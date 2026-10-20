# Portfolio handoff

Updated 20 October 2026. This is the current continuation guide; it supersedes older status summaries.

## Publication revision

The owner authorized uploading all completed revisions to GitHub on 20 October 2026. This revision packages the site sources, public brand/event assets and maintenance documentation for publication through the existing `main` GitHub Pages workflow. Historical local/unpublished statements below describe earlier checkpoints, not the publication authorization. Confirm the workflow for the latest commit and the live URL before reporting deployment success. Local `.omo/` review evidence is ignored alongside `work/`.

## Latest logo adjustment

The owner prefers company logos to match the neutral site palette and subsequently requested removal of the white wells. Company/tool/issuer and social marks now have transparent backgrounds and no added padding. Shared treatment uses grayscale/multiply in light mode and grayscale plus inversion/screen in dark mode, also blending away embedded white raster backgrounds. Source assets keep their original colors; portrait, AWS event art and project previews remain unaffected. This supersedes earlier white-well and full-color display instructions.

Education now has central `description` and `thesis` fields. The first roadmap card gives a general overview of Computer Engineering; it is not a verified personal course transcript. The owner confirmed the group thesis **Voice Controlled Wheelchair**, displayed on the roadmap and résumé without invented technology, metrics, awards or outcomes. The résumé remains two A4 pages.

Current build/check/full Chrome suite and focused transparent-logo/shared-thesis checks passed. Both scoped independent reviewers approved with no blockers (`work/review-logo-education-integrity.md`, `work/review-logo-education-visual.md`); visual pass covered30responsive sections,8focused crops and4PDF page renders. Focused evidence is in `work/qa/logo-education/`. Static screenshots now also put roadmap-nav in document flow to avoid composite-only sticky overlays; live interactions remain unchanged. Changes are local and unpublished.

Build/check/full Chrome browser suite passed. Both scoped reviewers approved with no product blockers; the visual reviewer inspected all18fresh skills/certification/contact captures across six viewport/theme states. Reports: `work/review-monochrome-integrity.md`, `work/review-monochrome-visual.md`. Actual IAB filter checks confirmed marks grayscale and photo unfiltered. Supplemental IAB shot is `work/qa/monochrome-brand-preview.jpg` (JPEG bytes; corrected from an initially mismatched PNG extension). Changes remain local.

## Latest small revision

Animations now start in full mode by default at the owner's explicit request, regardless of the device motion preference. An explicitly saved `portfolio-motion=reduced` remains respected; the existing toggle still turns motion off/on and persists the choice. This supersedes earlier device-following default instructions below. The learning sentence now follows the introduction as a second paragraph, both portrait captions (learning note and NPC / Portfolio2026) are removed, and the contact heading reads **Contact me**.

Build/check/full Chrome suite passed again, including default full under both device settings and saved on/off persistence. Both scoped independent reviewers passed all12fresh hero/contact captures with no blockers (`work/review-small-revision-integrity.md`, `work/review-small-revision-visual.md`). Actual IAB was refreshed and verified; screenshot `work/qa/latest-intro-placement.png`. No commit or publication.

## Current request: AI internship, roadmap and 3D portrait

The owner corrected the Clauto title to **AI Engineer Intern**, requested a winding interactive roadmap and a dimensional technology scene around the real portrait, removal of the small hero “Systems · Networks · Technology Operations” eyebrow, and original brand colors on icons. These design directions supersede the older straight-rail/orbit restrictions. Keep the saved animation opt-in and device-reduced default. Source content remains central; do not infer further internship dates/status/outcomes.

Implemented: `.tech-scene` perspective stage with inclined animated circuit rings and four SVG tech nodes; pointer tilt and native scroll depth; visibility-based pause. `.roadmap-nav` links move to and focus four chronological milestones; ArrowLeft/Right/Home/End navigation; cubic SVG path follows alternating measured checkpoints on desktop and a winding phone rail. The underlying content remains visible without JavaScript. The real image retains its intrinsic square frame and circular crop, though perspective changes the projected box.

Brand fills now follow the source registry; Microsoft/Google/Python are multicolor, AWS has its orange smile. Sources and Devicon license are recorded in docs/CONTENT-SOURCES.md and assets/brands. The requested hero eyebrow is removed. No runtime dependency was added.

Current build/check and full real-Chrome browser suite pass at375/768/1280 in both themes, plus320px, motion opt-in/out persistence, no-JavaScript and printing. Focused normal-GPU checks prove orbit movement, desktop pointer tilt, curved path, four milestones and keyboard focus under system-reduced/explicit-full contexts at all six width/theme states. Résumé remains two A4 pages. Evidence: `work/qa/roadmap-scene/`, including videos, results, PDF renders and actual IAB screenshots. A tablet Clauto-link hit target was enlarged to44px; roadmap links use their native visible names.

Final independent integrity and visual reviews approve with no blockers (`work/review-roadmap-scene-integrity-final.md`, `work/review-roadmap-scene-visual.md`). Visual reviewer inspected all42section captures, all scene/roadmap states and PDF renders, and independently reran build/check/tests. Six final local real-Chrome Lighthouse runs all score100 in all four categories (`work/roadmap-scene-performance-final/summary.json`); an earlier concurrent first mobile run scored99 before the final repeat. Changes remain uncommitted and unpublished.

## Follow-up: actual preview motion and concise intro

The owner reported invisible animation again. Live inspection of the owner's in-app tab confirmed `prefers-reduced-motion: reduce` is true. The prior normal-motion Chrome tests did not cover that actual viewer state. The site now offers Enable animations / Reduce animations below the intro. Default follows the device; an explicit `portfolio-motion` choice overrides it. Parent enabled full motion through that visible control in the user's tab and observed hero transform changes while scrolling. Do not remove this override or bypass the device preference globally.

Current intro: “I’ve worked in IT for six years, from user support to managing servers and networks. I also build tools that cut down repetitive work.” The AWS strip label is “AWS Solutions Architect,” replacing “AWS Solutions Architecture.”

Astra strengthened the staged hero entrance and scroll transforms, plus career entry movement. Full/reduced mode now consistently drives CSS and JavaScript through `data-motion`. The browser suite checks both system settings, explicit opt-in/out and reload persistence. Full browser checks and motion checks passed; the motion suite explicitly opts in while system reduced motion is true. Six fresh local Lighthouse runs again score100 in all four categories (`work/motion-override-performance/summary.json`).

Independent follow-up reviews both approved with no blockers: `work/review-motion-override-integrity.md`, `work/review-motion-override-visual.md`. The second reviewer also reran build/check/browser tests successfully. Changes remain local, uncommitted and unpublished.

## Latest owner revision, evening of 20 October

Implemented locally, uncommitted and unpublished. This section supersedes conflicting descriptions below.

- Contact now includes GitHub and LinkedIn marks and links.
- Credential strip, certification cards and further training use company/issuer marks. Added ZKTeco, Cisco Secure Endpoint and Microsoft 365 to the technology strip; Hikvision and other wordmarks have wider tiles.
- AWS Community Days attendance includes the owner's supplied AWS Community Day Manila 2026 artwork.
- Main timeline runs from past to present: education 2015, support 2021, supervisor 2025, Clauto 2026. The latest revision uses an interactive winding roadmap with reading progress and active checkpoints. The résumé keeps employment newest first.
- Clauto learning now includes Codex, Claude Code, OpenCode, Oh My OpenCode, and understanding model behavior/when to use models, directly confirmed by the owner. No dates/status/outcomes were inferred.
- Introduction shortened to two sentences while retaining six years and employer-neutral duties. Hero has more space, title/portrait entrance and native scroll transforms/ring motion.
- Technology marks move while visible, with Pause/Resume, hover/focus pause, static reduced-motion and no-JavaScript paths.
- Seven professional projects now have distinct conceptual SVG compositions; real personal-project screenshots and upstream attribution remain.

Source ownership in this run: Astra changed styles/main.js/design contract; project-art worker changed graphics.mjs; parent integrated content/rendering/template/assets/checks/docs. Preserve all pre-existing uncommitted work.

Fresh verification: build/check and full real-Chrome browser suite passed at375/768/1280 in both themes,320px reflow/no-JavaScript/printing passed, zero axe violations/errors. Motion evidence verifies hero scroll, four chronological checkpoints, moving logos, pause, and static reduced motion at320/375/768/1280. Résumé PDFs remain two A4 pages. Three mobile and three desktop real-Chrome Lighthouse runs each score100 in all four categories, on local preview only.

Evidence: `work/qa/`, `work/qa/revision-motion/` (motion frames/videos/results and PDF renders), `work/revision-final-performance/summary.json`. Static screenshot harness pauses the logo strip, eagerly decodes images (including clipped marquee images), skips the inert duplicate track, and settles offscreen timeline entry translations; normal motion is verified separately.

Both independent visual reviewers passed the current42section captures and motion/print evidence with no blockers. Reports: `work/review-oct20-integrity.md`, `work/review-oct20-visual.md`. No requested implementation work remains pending; publication has not been requested.

## Current state

- Workspace: `C:/Users/Default.LAPTOP-CSA57S2U/Documents/ChatGPT/Portfolio Website`
- Repository: https://github.com/npcagomoc-del/npcagomoc-del.github.io
- Public URL: https://npcagomoc-del.github.io/
- Branch: `main`; use `git rev-parse HEAD` for the current revision.
- The owner authorized publication of all completed revisions. Check GitHub Actions for deployment status; do not infer live status from a local build.
- Preview: http://127.0.0.1:4173/ . Check whether it is running before starting another server.
- No implementation task remains pending. Publication is authorized through the existing GitHub Pages workflow.

## Read before changing anything

Read `AGENTS.md`, `README.md`, `DESIGN.md`, `docs/MAINTENANCE.md` and `docs/CONTENT-SOURCES.md`. `docs/QA.md` records verification history. Preserve all existing uncommitted work.

The project is static HTML/CSS/JavaScript with Node build scripts and development-only dependencies. Keep GitHub Pages and repository-subpath compatibility. Never edit `dist/` directly.

## Latest approved wording

Name: **Noe P. Cagomoc**. Wordmark: lowercase **npc.**, with the full name below it at every viewport width. Favicon uses the same initials.

Headline:

> Networks & systems.
> IT support & automation.

Introduction:

> I’ve worked in IT for six years, from user support to managing servers and networks. I also build tools that cut down repetitive work.

The owner corrected four years to **six years of overall IT experience**. Do not infer six years of supervision or change formal employment dates. The introduction and résumé profile are employer-neutral; employer names remain in factual employment history. The résumé summary also states six years. The social preview image has been regenerated for the current headline and full name.

Use direct, natural wording. Avoid slogans, filler, generic AI language and public implementation notes. Use **Projects** and **Certified in**. Keep the personal learning note: “I love learning and putting new skills to work.”

## Experience and education

The central employment data has three roles, newest first; the main page combines these with education and sorts past to present:

1. **AI Engineer Intern — Clauto, 2026**. Learned agentic programming using Codex, Claude Code, OpenCode and harness tools such as Oh My OpenCode, including model selection. Official company link: https://clauto.io/ . The internship, corrected title and learning are owner-confirmed. No exact months, location, current/completed status or delivery outcomes were supplied.
2. **ICT Administration Supervisor / Database & Server Admin — Leonio Group, Feb 2025–Present**. Detailed support supervision, network/security/systems/application administration, server/storage/backup work, deployments, project coordination and automation duties are in central content.
3. **IT Support Specialist — Leonio Group, Mar 2021–Feb 2025**. Support, endpoint/application setup, Microsoft 365, asset/license records, backups and infrastructure work.
4. **Bachelor of Science in Computer Engineering — STI College, Jun 2015–Jun 2020**. Education is rendered from the central education object, not duplicated as an employment record.

An experience entry may have an optional official HTTPS `website`; shared rendering links the company name on both page and résumé.

## Projects, expertise and credentials

Nine projects are present. Seven professional projects appear in the compact résumé project section:

- Server monitoring and report automation: Zabbix and Grafana.
- Network Report Automation (UniFi): API-based recurring reporting, explicitly confirmed by the owner as already in use.
- Permission inventory database.
- Translift CMS companion file uploader supporting the legacy system.
- Python application installation automation for technical support.
- Network infrastructure and CCTV deployments across Shared Services, Mining, Tankering and Land. This latest owner scope supersedes earlier narrower CCTV wording.
- Study Room Filinvest network infrastructure and Wi-Fi voucher portal, Jul–Aug 2023: Ubiquiti, more than 50 users, POS integration; contributor Jev. No employer affiliation or measured sales/reliability improvement is inferred.
- Buseng Chronicles: personal game with real public screenshots.
- Libre Trading Journal: MIT-licensed upstream adaptation; retain Simon / Tape to Edge attribution and synthetic demonstration-data caption.

Expertise includes Windows/Linux, Microsoft 365, Synology, Ubiquiti/UniFi, Hikvision, ZKTeco, Anviz, Zabbix, Grafana, Python, Codex, Claude, OpenCode, Oh My OpenCode and project coordination/management. Tools are not additional certifications or vendor partnerships.

Certification highlights include CCNA, AWS Solutions Architect – Associate, Azure Fundamentals and ISC2 CC. Preserve supplied credential names/dates and distinguish training from certification. CCNA is owner-confirmed; no issue/expiry dates or verification URL were provided. Community participation includes AWS Community Days 2026 as an attendee.

## Design and implementation boundaries

Keep the graphite/ivory themes, moss accents, self-hosted Manrope, grid-backed hero and experience, real portrait with square source frame and circular CSS crop, accessible navigation and isolated résumé printing.

Astra helped implement and review the design and motion. The hero has a finite 800ms text entrance and 1800ms portrait-ring entrance. The career curve has a reading-position trail and moving leading point. Native passive scrolling is coalesced in animation frames; ResizeObserver initializes geometry without synchronous startup measurement. Reduced motion shows static content/path and hides the moving point; no-JavaScript retains essential content and navigation.

The résumé prints as **two deliberate A4 pages**, including from dark mode with white margins. Do not force one page by shrinking text. Both page and résumé read central content.

Generic illustration disclaimers were removed from public copy at the owner's explicit request. Process graphics remain abstract SVG diagrams, without invented telemetry. Keep real contributor/upstream credits. Never publish internal system screenshots, private documents, credentials or operational data.

## File map

| Change | Source |
| --- | --- |
| Personal facts, intro, résumé summary, history, projects, skills, credentials | `src/content.json` |
| Permanent page copy and section markup | `src/template.html` |
| Reusable section and résumé rendering | `src/render.mjs`, `src/resume.mjs` |
| Shared escaping | `src/html.mjs` |
| Tokens, responsive and print styles | `src/styles.css` |
| Theme, menu, print and timeline interactions | `src/main.js` |
| SVG process/project visuals | `src/graphics.mjs` |
| Portrait, favicon, share image and locally hosted marks | `public/assets/` |
| Build, preview and checks | `scripts/` |
| GitHub Pages workflow | `.github/workflows/pages.yml` |

New fields include `brands`, `community`, `learningNote`, optional experience `website`, project `wide`, `resume` and `resumeDescription`. Asset provenance is recorded in `docs/CONTENT-SOURCES.md`.

## Verification completed

For the latest six-year/introduction correction:

- `npm run build` and `npm run check` passed.
- `npm test` passed against the running production preview in real Chrome at 375, 768 and 1280px, both themes. Zero overflow, axe violations or console errors; menu/Escape, theme persistence, disclosures, 320px reflow, no-JavaScript and print isolation checks passed.
- Focused browser assertions verified six years in the rendered introduction and résumé profile, with no employer name in either.
- Both actual résumé PDFs were rendered and inspected; each remains two A4 pages.
- Two independent visual reviewers passed all 17 affected images: six hero captures, six résumé captures, four PDF page renders and the social card. No blockers remain.

Local evidence is ignored and unavailable in a fresh clone:

- `work/intro-review.md`, `work/qa/intro/`, `work/qa/results.json`: latest introduction verification.
- `work/clauto-review.md`, `work/qa/clauto/`: internship and four-node timeline verification.
- `work/hero-review.md`, `work/qa/hero-motion/`: prior hero/motion checks. The older motion video predates the Clauto node; do not call it current four-node evidence.
- `work/hero-performance-final/summary.json`: prior hero revision's three mobile and three desktop real-Chrome Lighthouse runs, all four categories at 100. These scores are historical local measurements, not newly rerun for the copy/internship changes or verified on the deployed site.
- `work/study-room-review.md`: Study Room addition.

Long mobile composites exceed Chrome's 16384px GPU raster boundary. The test harness uses `--disable-gpu` for reliable tall screenshot export. Normal-GPU viewport, motion and prior performance evidence is separate. Do not mistake an export artifact for a rendered-page defect.

## Continue and verify

```sh
npm ci
npm run build
npm run check
npx playwright install chrome
npm run preview
```

In another terminal, run `npm test`. After edits, rebuild and refresh. Inspect affected captures in `work/qa/`; for résumé changes, render and inspect actual PDF pages from both themes. Keep shared-content mutation checks, JSON-LD escaping, credential-strip rendering and education-source regression coverage.

Current pending changes span source, scripts, docs, favicon, social card and new `public/assets/brands/`. Do not discard them. Never commit `work/`, `node_modules/`, `dist/`, private source documents or internal screenshots.

When publication is requested, inspect/stage intended source and public assets, verify, commit and push to `main`, then check the GitHub Actions deployment and live site. Do not report publication before confirming it. Roll back using a revert commit rather than force-pushing.

Optional future owner input: exact Clauto months/status, CCNA dates/verification URL, or a confirmed employment end date. None blocks the current local implementation.
