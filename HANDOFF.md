# Portfolio handoff

Use this file to continue revisions without reconstructing the original conversation.

## Current status

The portfolio is complete, pushed, and published at **https://npcagomoc-del.github.io/**.

- Repository: https://github.com/npcagomoc-del/npcagomoc-del.github.io
- Branch: `main`
- Validated application baseline: `fca31024374d1e8e1cfacb646ca73a07d830aff9`
- Successful baseline deployment: https://github.com/npcagomoc-del/npcagomoc-del.github.io/actions/runs/39373947442
- GitHub Pages source: **GitHub Actions**, HTTPS enabled.
- Local preview was stopped after verification. Start it again when needed.

This handoff is a documentation addition after that application baseline. Later commits and Actions runs may supersede the baseline; inspect current Git state before editing. Do not describe the old audit as a new verification.

## Read first

1. `AGENTS.md` — editing and verification rules.
2. `README.md` — setup, file map and publishing.
3. `DESIGN.md` — visual system and responsive behavior.
4. `docs/CONTENT-SOURCES.md` — factual sources and limits.
5. `docs/MAINTENANCE.md` — detailed editing, assets and release procedure.
6. `docs/QA.md` — what was tested and what was not.

## Accepted scope and design

Personal hiring portfolio for Noe Cagomoc: systems administration, networking, security, technology operations and AI-assisted development. User requested dark/light modes, a circular version of the supplied real photo, current credentials including CCNA, work history, relevant professional keywords, project examples, and a résumé section.

Inspiration: https://aminnepali.com.np/#work (dark) and https://www.tim-gesemann.dev/ (light). These are inspiration, not exact clone targets. Astra helped define and review the design.

The implemented style uses graphite and warm ivory, moss-green accents, self-hosted Manrope, monospaced labels, an asymmetric hero and circular portrait. Sections: Work, Expertise, Experience, Credentials, Résumé and Contact. Preserve both themes and mobile navigation during revisions.

## Architecture and edit locations

Static HTML/CSS/JavaScript with Node.js build scripts. No production dependencies, backend, contact form service, analytics or external font requests. Theme preference is stored locally in the visitor's browser.

| Revision | Main source |
| --- | --- |
| Personal facts, roles, dates, credentials, projects and links | `src/content.json` |
| Permanent section copy, order, navigation and layout markup | `src/template.html` |
| Colors, typography, spacing, responsive and print styles | `src/styles.css` |
| Theme persistence, mobile menu and print button | `src/main.js` |
| Section rendering and metadata | `src/render.mjs` |
| Résumé rendering | `src/resume.mjs` |
| Icons, illustrative network graphic and project previews | `src/graphics.mjs` |
| Shared HTML escaping and lists | `src/html.mjs` |
| Photo, screenshots, font, favicon and social card | `public/assets/` |
| Static generation and local preview | `scripts/build.mjs`, `scripts/serve.mjs` |
| Static/regression and browser checks | `scripts/check.mjs`, `scripts/browser-test.mjs` |
| Deployment | `.github/workflows/pages.yml` |

`dist/` is generated and ignored. Do not edit it directly. Browser paths are relative; update `siteUrl` if the public address changes. The résumé uses the same content as the page and prints through the browser's Save as PDF dialog. There is no separate résumé file to synchronize.

The photo uses responsive 480px/720px WebP assets and a CSS circle. EXIF orientation was applied and metadata removed. Keep the square frame and test its focal point after replacement. Social-card text is a separate image and needs its own update if the name/headline changes.

## Facts and attribution to preserve

- Leonio Group: IT Support Specialist, Mar 2021–Feb 2025; ICT Administration Supervisor / Database & Server Admin, Feb 2025–Present, following the supplied profile.
- CCNA is explicitly owner-confirmed. Its issue date, expiry and verification URL were not supplied; none were invented.
- AWS, Azure and ISC2 CC dates come from supplied screenshots. Additional training is kept distinct from professional certification.
- Codex, Claude and OpenCode are tools/skills, not vendor certifications.
- Buseng Chronicles is a personal project with real public game screenshots.
- Libre Trading Journal is an adaptation of Trading-Journal-AI by Simon / Tape to Edge (MIT). Preserve the attribution and synthetic-data screenshot label.
- The network diagram is illustrative, not an internal topology or operational telemetry.
- No invented metrics, job dates, credential links or original authorship claims. Do not commit private résumé originals, profile screenshots, internal-system data or credentials.

## Important regression boundaries

1. Personal identity, contact labels and credential highlights must remain driven by `content.json`. The credential strip uses `stripLabel` with a `short` fallback. Mutation checks catch stale hardcoded copies.
2. JSON-LD must encode less-than characters so content cannot terminate its script element. Keep the injection regression.
3. Print must use a light, white root canvas even when dark mode is selected. The stronger print `:root[data-theme]` selector fixes the earlier specificity bug. Keep both-theme PDF tests.
4. Native disclosures and all essential content work without JavaScript. Theme/menu/print controls are progressively enhanced.
5. Composite screenshots temporarily put the sticky header in normal flow and hide the skip link for capture hygiene. Separate `*-viewport.png` captures show the real sticky header. Do not confuse capture-only styling with product behavior.

## Baseline verification

At the application baseline above:

- Build, static checks and content/injection mutation regressions passed.
- Real Chrome checks passed in dark/light at 375, 768 and 1280px, plus 320px reflow, no-JavaScript navigation, saved theme, menu/Escape focus, all disclosures, print isolation, and local resource/error checks.
- Axe WCAG scans reported zero violations in the six theme/width configurations. This is not a claim of a manual screen-reader audit.
- Actual PDF exports from both themes were rendered with Poppler and inspected: complete one-page A4 résumé with white margins.
- Independent goal, hands-on, code, security, context and two visual review lanes passed after fixes.
- `npm audit` reported zero known vulnerabilities in the project dependency tree at that time.
- The deployed HTML matched the local approved build byte for byte. The same browser suite passed against the live host.
- Live Lighthouse Node API on real Chrome: performance, accessibility, best practices and SEO all 100, three mobile and three desktop runs. Scores are historical measurements, not guarantees for later revisions.

Local-only evidence is retained in ignored `work/`: `release-record.json`, `review-work.md`, `review-ledger.jsonl`, `review-*.md`, `qa/`, `live-qa/`, `hands-on/`, `performance/` and `live-performance/`. These artifacts are not in a fresh Git clone. Recreate evidence for new revisions; do not publish the entire work directory. One-off performance tools are also isolated there and are not project dependencies.

## Continue a revision

```sh
npm ci
npm run build
npm run check
npx playwright install chrome
npm run preview
```

In a second terminal:

```sh
npm test
```

After edits, rebuild and refresh. Inspect both themes, narrow layouts and affected sections. For résumé changes, check actual A4 PDFs from both themes, including margins and pagination. Re-run appropriate tests after changes. Keep unrelated user edits intact.

Push approved revisions to `main`; the Actions workflow builds, tests in Chrome and deploys only `dist/`. Check the Actions result and visit the live site. Roll back with a revert commit, not a force-push.

## Items awaiting future owner input

These do not block the current site:

- CCNA issue/expiry dates and issuer verification link, if desired.
- A confirmed final employment date before changing the current role's “Present” label.
- New quantified achievements, certificates, projects or screenshots when evidence is supplied.
- Any requested visual or copy revisions after reviewing the live version.

No further feature work was scheduled. Continue from the owner’s next revision request.
