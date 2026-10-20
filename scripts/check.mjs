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
const dangerous = structuredClone(data);
dangerous.name = "</script><script>globalThis.injected=true</script>";
const metadata = render(dangerous).metadata;
const jsonText = metadata
  .split('<script type="application/ld+json">')[1]
  .split("</script>")[0];
assert(
  !jsonText.includes("<"),
  "JSON-LD must not allow HTML script termination",
);
assert.equal(
  JSON.parse(jsonText).name,
  dangerous.name,
  "JSON-LD must retain the name as data",
);
const changed = structuredClone(data);
changed.name = "Test Person";
changed.initials = "TP";
changed.linkedin = "https://www.linkedin.com/in/test-person/";
changed.github = "https://github.com/test-person";
const changedSections = render(changed);
const template = await readFile("src/template.html", "utf8");
const changedPage = template.replace(
  /\{\{(\w+)\}\}/g,
  (_, key) => changedSections[key],
);
assert(
  !changedPage.includes(data.name),
  "Identity should come from central content",
);
assert(
  changedPage.includes("linkedin.com/in/test-person"),
  "Résumé contact labels should match URLs",
);
assert(
  !changedSections.resume.includes("linkedin.com/in/npcagomoc"),
  "Old résumé label must not remain",
);
console.log(
  "Regression checks passed: JSON-LD injection boundary and central identity updates.",
);
const withoutCertifications = structuredClone(data);
withoutCertifications.certifications = [];
const withoutSections = render(withoutCertifications);
const withoutPage = template.replace(
  /\{\{(\w+)\}\}/g,
  (_, key) => withoutSections[key],
);
const strip = withoutPage
  .split('class="credential-strip"')[1]
  .split("</div>")[0];
for (const cert of data.certifications.filter((c) => c.featured)) {
  assert(
    !strip.includes(cert.stripLabel || cert.short),
    "Removed credentials must not remain in the summary strip",
  );
}
console.log("Credential-strip content mutation regression passed.");

const changedEducation = structuredClone(data);
changedEducation.education.school = "Example Engineering College";
changedEducation.education.degree = "Example Engineering Degree";
const changedTimeline = render(changedEducation).experience;
assert(changedTimeline.includes(changedEducation.education.school));
assert(changedTimeline.includes(changedEducation.education.degree));
assert(!changedTimeline.includes(data.education.school), "Timeline education must follow central content");
console.log("Timeline education content mutation regression passed.");

const timelineYears = [...render(data).experience.matchAll(/class="experience-year"[^>]*>(\d{4})</g)].map((match) => Number(match[1]));
assert.deepEqual(timelineYears, [...timelineYears].sort((a, b) => a - b), "Main timeline must run from past to present");

for (const [, asset] of html.matchAll(/<img[^>]+src="(assets\/[^"]+)"/g))
  await access("dist/" + asset);

for (const entry of data.experience) {
  if (entry.website) assert.equal(new URL(entry.website).protocol, "https:");
}
