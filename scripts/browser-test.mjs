import assert from "node:assert/strict";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const base = process.env.TEST_URL || "http://127.0.0.1:4173";
const evidence = "work/qa";
await mkdir(evidence, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--disable-gpu"] });
const results = [];
const content = JSON.parse(await readFile("src/content.json", "utf8"));
// Composite captures keep navigation in document flow; live interactions still test the sticky header.
const captureStyle =
  ".site-header,.roadmap-nav{position:static!important}.skip-link{visibility:hidden!important}.experience-row{--entry-shift:0px!important;--entry-slide:0px!important}";
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
      const mark = await page.locator(".monogram").boundingBox();
      const fullName = await page.locator(".wordmark-name").boundingBox();
      assert(fullName && fullName.y >= mark.y + mark.height - 1, "Full name must sit below the monogram");
      assert.equal(await page.locator(".wordmark-name").innerText(), content.name);
      assert(await page.locator("#experience").getByRole("heading", { name: content.education.degree, exact: true }).isVisible());
      const photo = await page.locator(".portrait-frame").evaluate((frame) => ({
        width: frame.offsetWidth,
        height: frame.offsetHeight,
        radius: getComputedStyle(frame).borderRadius,
      }));
      assert(
        Math.abs(photo.width - photo.height) < 1,
        "Portrait is not circular",
      );
      assert.equal(photo.radius, "50%", "Portrait must retain its circular crop before 3D projection");
      await page.getByRole("button", { name: "Pause motion", exact: true }).click();
      for (const preview of await page.locator('img').all()) {
        if (await preview.evaluate((img) => Boolean(img.closest('[aria-hidden="true"]')))) continue;
        await preview.scrollIntoViewIfNeeded();
        await preview.evaluate((img) => {
          img.loading = "eager";
          return img.decode();
        });
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        animations: "disabled",
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
        animations: "disabled",
          style: captureStyle,
          path: `${evidence}/${width}-${theme}-${selector.replace(/[.#]/g, "")}.png`,
        });
      }
      await page.screenshot({
        animations: "disabled",
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
        animations: "disabled",
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
  for (const paperTheme of ["dark", "light"]) {
    const printContext = await browser.newContext({
      colorScheme: paperTheme,
      viewport: { width: 794, height: 1123 },
    });
    const printPage = await printContext.newPage();
    await printPage.goto(base);
    await printPage.evaluate(() => document.fonts.ready);
    await printPage.emulateMedia({ media: "print" });
    const paper = await printPage
      .locator("html")
      .evaluate((e) => ({
        scheme: getComputedStyle(e).colorScheme,
        background: getComputedStyle(e).backgroundColor,
      }));
    assert.equal(
      paper.scheme,
      "light",
      "Printing from " + paperTheme + " must use a light paper canvas",
    );
    assert.equal(
      paper.background,
      "rgb(255, 255, 255)",
      "Printed page margins must stay white",
    );
    await printPage.pdf({
      path: evidence + "/resume-" + paperTheme + ".pdf",
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    await printPage.screenshot({
        animations: "disabled",
      path: evidence + "/print-" + paperTheme + ".png",
      fullPage: true,
    });
    assert.equal(await printPage.locator(".hero").isVisible(), false);
    assert(await printPage.locator(".resume-sheet").isVisible());
    if (paperTheme === "dark")
      await printPage.pdf({
        path: evidence + "/resume.pdf",
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });
    await printContext.close();
  }
  for (const reducedMotion of ["reduce", "no-preference"]) {
    const motionContext = await browser.newContext({
      reducedMotion,
      viewport: { width: 375, height: 900 },
    });
    const motionPage = await motionContext.newPage();
    await motionPage.goto(base);
    assert.equal(await motionPage.locator("html").getAttribute("data-motion"), "full");
    await motionPage.getByRole("button", { name: "Reduce animations", exact: true }).click();
    assert.equal(await motionPage.locator(".brand-motion-control").isVisible(), false);
    await motionPage.getByRole("button", { name: "Enable animations", exact: true }).click();
    assert.equal(await motionPage.locator("html").getAttribute("data-motion"), "full");
    await motionPage.reload();
    assert.equal(await motionPage.locator("html").getAttribute("data-motion"), "full");
    assert.equal(await motionPage.locator(".brand-motion-control").isVisible(), true);
    await motionPage.getByRole("button", { name: "Reduce animations", exact: true }).click();
    await motionPage.reload();
    assert.equal(await motionPage.locator("html").getAttribute("data-motion"), "reduced");
    assert.equal(await motionPage.evaluate(() => document.getAnimations().filter((a) => a.playState === "running").length), 0);
    results.push({ systemMotion: reducedMotion, motionOverride: "pass", motionPersistence: "pass" });
    await motionContext.close();
  }
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
