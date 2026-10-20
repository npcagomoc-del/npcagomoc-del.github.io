import { readFile, writeFile, mkdir, cp } from "node:fs/promises";
import { render } from "../src/render.mjs";
const data = JSON.parse(
  await readFile(new URL("../src/content.json", import.meta.url), "utf8"),
);
const template = await readFile(
  new URL("../src/template.html", import.meta.url),
  "utf8",
);
const sections = render(data);
const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
  if (!(key in sections)) throw new Error(`Unknown template key: ${key}`);
  return sections[key];
});
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });
for (const name of ["styles.css", "main.js"])
  await cp(`src/${name}`, `dist/${name}`);
await writeFile("dist/index.html", html);
await writeFile("dist/.nojekyll", "");
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${data.siteUrl}sitemap.xml\n`,
);
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${data.siteUrl}</loc></url></urlset>`,
);
console.log(
  `Built portfolio: ${data.projects.length} projects, ${data.certifications.length} credentials.`,
);
