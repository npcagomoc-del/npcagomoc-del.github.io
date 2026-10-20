import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { render } from "../src/render.mjs";
const data = JSON.parse(await readFile("src/content.json", "utf8"));
const html = await readFile("dist/index.html", "utf8");
assert(!/\{\{\w+\}\}/.test(html), "Unresolved template token");
assert.equal(
  (html.match(/<h1\b/g) || []).length,
  1,
  "Expected one main heading",
);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate document IDs");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(id), `Broken anchor #${id}`);
for (const key of ["github", "linkedin", "siteUrl"])
  assert.equal(new URL(data[key]).protocol, "https:");
for (const project of data.projects)
  if (project.link) assert.equal(new URL(project.link).protocol, "https:");
assert(
  data.certifications.some((c) => c.short === "CCNA" && c.featured),
  "CCNA highlight missing",
);
for (const asset of [
  "assets/noe-cagomoc-720.webp",
  "assets/manrope-latin.woff2",
  "assets/social-card.png",
  "assets/favicon.svg",
  "styles.css",
  "main.js",
])
  await access("dist/" + asset);
const adversarial = structuredClone(data);
adversarial.name = "<script>alert(1)</script>";
assert(
  !render(adversarial).name.includes("<script>"),
  "Content must be HTML escaped",
);
console.log(
  "Static checks passed: anchors, metadata, assets, credentials, and content escaping.",
);
