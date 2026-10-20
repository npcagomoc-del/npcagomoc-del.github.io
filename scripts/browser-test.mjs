import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const base = process.env.TEST_URL || "http://127.0.0.1:4173";
const evidence = "work/qa";
await mkdir(evidence, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
// Composite captures keep navigation in document flow; live interactions still test the sticky header.
const captureStyle =
  ".site-header{position:static!important}.skip-link{visibility:hidden!important}";
try {
  for (const width of [375, 768, 1280])
    for (const theme of ["dark", "light"]) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        colorScheme: theme,
      });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("response", (response) => {
        if (response.url().startsWith(base) && response.status() >= 400)
          errors.push(`${response.status()} ${response.url()}`);
      });
      await page.goto(base, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      assert.equal(
        await page.locator("html").getAttribute("data-theme"),
        theme,
      );
      assert(
        await page
          .locator(".portrait-frame img")
          .evaluate((img) => img.complete && img.naturalWidth > 0),
      );
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Overflow at ${width}/${theme}`,
      );
      const photo = await page.locator(".portrait-frame").boundingBox();
      assert(
        Math.abs(photo.width - photo.height) < 1,
        "Portrait is not circular",
      );
      await page.screenshot({
        path: `${evidence}/${width}-${theme}-viewport.png`,
      });
      for (const selector of [
        ".hero",
        "#work",
        "#skills",
        "#experience",
        "#certifications",
        "#resume",
        "#contact",
      ]) {
        await page.locator(selector).screenshot({
          style: captureStyle,
          path: `${evidence}/${width}-${theme}-${selector.replace(/[.#]/g, "")}.png`,
        });
      }
      await page.screenshot({
        style: captureStyle,
        path: `${evidence}/${width}-${theme}-full.png`,
        fullPage: true,
      });
      const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const violations = audit.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      }));
      await writeFile(
        `${evidence}/${width}-${theme}-axe.json`,
        JSON.stringify(violations, null, 2),
      );
      assert.equal(violations.length, 0, JSON.stringify(violations));
      const toggle = page.getByRole("button", {
        name: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
      });
      await toggle.click();
      await page.reload();
      assert.equal(
        await page.locator("html").getAttribute("data-theme"),
        theme === "dark" ? "light" : "dark",
      );
      await page
        .getByRole("button", { name: `Switch to ${theme} theme` })
        .click();
      if (width < 900) {
        await page.getByRole("button", { name: "Open navigation" }).click();
        assert.equal(
          await page.locator(".menu-toggle").getAttribute("aria-expanded"),
          "true",
        );
        await page.keyboard.press("Escape");
        assert.equal(
          await page.locator(".menu-toggle").getAttribute("aria-expanded"),
          "false",
        );
        assert(
          await page
            .locator(".menu-toggle")
            .evaluate((e) => e === document.activeElement),
        );
        await page.getByRole("button", { name: "Open navigation" }).click();
        await page
          .getByRole("navigation")
          .getByRole("link", { name: "Credentials" })
          .click();
        assert.equal(
          await page.locator(".menu-toggle").getAttribute("aria-expanded"),
          "false",
        );
      }
      for (const details of await page.locator("details").all()) {
        await details.locator("summary").click();
        assert((await details.getAttribute("open")) !== null);
        await details.screenshot({
          style: captureStyle,
          path: `${evidence}/${width}-${theme}-details-${(await details.locator("summary").innerText()).startsWith("Further") ? "training" : (await details.locator("p").first().innerText()).slice(0, 15).replace(/\W/g, "")}.png`,
        });
        await details.locator("summary").click();
      }
      assert.deepEqual(errors, [], "Browser errors");
      results.push({
        width,
        theme,
        overflow: false,
        portrait: "circle",
        axeViolations: 0,
        themePersistence: "pass",
        menu: width < 900 ? "pass" : "desktop",
        disclosures: "pass",
        consoleErrors: 0,
      });
      console.log(`PASS ${width}px ${theme}`);
      await context.close();
    }
  const page = await browser.newPage({ viewport: { width: 320, height: 900 } });
  await page.goto(base);
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: `${evidence}/resume.pdf`,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.screenshot({ path: `${evidence}/print.png`, fullPage: true });
  assert.equal(await page.locator(".hero").isVisible(), false);
  assert(await page.locator(".resume-sheet").isVisible());
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const fallback = await nojs.newPage();
  await fallback.goto(base);
  assert(await fallback.getByRole("heading", { level: 1 }).isVisible());
  assert(
    await fallback
      .getByRole("navigation")
      .getByRole("link", { name: "Résumé" })
      .isVisible(),
  );
  assert(
    await fallback.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  results.push({
    narrow320: "pass",
    printIsolation: "pass",
    noJavaScript: "pass",
  });
  await writeFile(`${evidence}/results.json`, JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
console.log("Browser checks passed. Evidence: work/qa/");
