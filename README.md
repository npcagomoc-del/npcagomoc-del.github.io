# Noe P. Cagomoc — portfolio

A personal portfolio for systems administration, network support, and technology operations. Includes dark/light themes, real project scope, certifications, an interactive career roadmap, a dimensional technology scene around the portrait, and a printable résumé.

**Website:** https://npcagomoc-del.github.io/

For continuity and future revisions, start with [HANDOFF.md](HANDOFF.md).

## Run locally

Requires Node.js 22 or newer. There are no production dependencies or external services.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173. The build runs once. After editing content or styles, run `npm run build` in a second terminal and refresh the browser. Stop the server with Ctrl+C.

## Update the website

| What to change | File |
| --- | --- |
| Name, role, contact links, headline, experience, credentials, education, projects | `src/content.json` |
| Section order and permanent page wording | `src/template.html` |
| Theme colors, typography, layout, responsive and print styles | `src/styles.css` |
| Theme, mobile navigation, print behavior | `src/main.js` |
| Generated sections and résumé | `src/render.mjs`, `src/resume.mjs` |
| Icons and original project illustrations | `src/graphics.mjs` |
| Portrait | `public/assets/noe-cagomoc-480.webp`, `noe-cagomoc-720.webp` |
| Social preview and favicon | `public/assets/social-card.png`, `public/assets/favicon.svg` |

Read [the maintenance guide](docs/MAINTENANCE.md) for examples, image instructions, and publishing. [DESIGN.md](DESIGN.md) defines the design system. [Content sources](docs/CONTENT-SOURCES.md) records factual boundaries. [QA](docs/QA.md) records verification.

## Check changes

```sh
npm run build
npm run check
npx playwright install chrome
npm run preview
```

In a second terminal:

```sh
npm test
```

The tests use real Google Chrome and cover both themes at 375px, 768px, and 1280px, narrow layout, disclosures, theme persistence, mobile menu behavior, no-JavaScript content, résumé printing, and axe accessibility checks. Screenshots and reports go into ignored `work/qa/`.

## Publish

Push to `main`. The GitHub Actions workflow builds, checks, runs browser tests, and deploys only `dist/` to GitHub Pages. Pull requests run validation without deployment. In repository Settings → Pages, the publishing source is **GitHub Actions**.

All browser asset references are relative, so the output also works under a repository subpath. If moving the site, update `siteUrl` in `src/content.json` for canonical links, sitemap, and social metadata. GitHub Pages serves static files; there is no backend or contact-form service.

The résumé section prints as two A4 pages through the browser's Print / Save as PDF dialog. It uses the same content as the website, so there is no second résumé file to keep in sync.

## Privacy and credits

No analytics, tracking cookies, third-party runtime scripts, or embedded social widgets. Theme and animation preferences are stored in the visitor's browser. Contact links open the visitor's email app, LinkedIn or GitHub.

Design inspiration: [Amin Nepali](https://aminnepali.com.np/#work) and [Tim Gesemann](https://www.tim-gesemann.dev/). Original layout and illustrations; no reference-site code or artwork copied. Manrope is self-hosted under the SIL Open Font License; license included in `public/assets/Manrope-OFL.txt`. Personal photo and résumé content belong to Noe P. Cagomoc. Libre Trading Journal is credited as an adaptation of Trading-Journal-AI (MIT).
