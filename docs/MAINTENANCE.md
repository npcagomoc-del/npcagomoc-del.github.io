# Maintaining the portfolio

## Content is the source of truth

Edit `src/content.json`, then run `npm run build`. The page and printable résumé use the same data. Do not edit `dist/`; it is generated and excluded from Git. Page copy outside the content file lives in `src/template.html`.

### Experience

Each `experience` entry has a title, employer, period, location and short bullet list. List the most recent role first. When the final employment date is confirmed, replace `Feb 2025 — Present` with the actual period.

Prefer duties, scope and substantiated outcomes. Do not invent uptime, savings, staff counts, project dates, job titles or role-specific technology ownership.

### Certifications and training

`featured: true` places a credential in the main credential grid and résumé certification list. Other entries appear under further training and résumé additional training. Keep course completion separate from professional certification. `issued` and `expires` may be empty if not supplied.

CCNA is included at the owner's express request. Its issue date, expiry date and verification URL have not been supplied, so they are not displayed. Never invent a verification link or claim live issuer verification. Before a credential expires, confirm renewal or update its wording. The site does not automatically verify status.

### Projects

A project entry includes `id`, category, title, description, detailed scope, tools, link, linkLabel and note. Leave `link` empty if there is no public project resource; there is no placeholder button. Layout is one featured project followed by smaller cards.

`src/graphics.mjs` maps IDs to a visual. Add a reusable illustration or a real screenshot for a new ID. Label illustrations and demonstration data accurately. Screenshots from internal systems must be sanitized before adding them to public source. Employer projects should describe scope without exposing internal network diagrams, IPs, accounts, credentials, business data or client identifiers.

Libre Trading Journal must retain attribution to Trading-Journal-AI by Simon / Tape to Edge (MIT); do not describe the upstream application as built from scratch.

## Images and typography

The portrait is rendered as a circle in CSS. Its source is the owner's supplied photo, not a generated likeness. Optimized files have EXIF metadata removed and the original camera orientation applied.

Replace `public/assets/noe-cagomoc-480.webp` and `noe-cagomoc-720.webp` with the same portrait at 480px and 720px wide. Keep their original aspect ratio. `srcset` selects an appropriate image; `.portrait-frame img` controls the focal point using `object-position`. Keep explicit dimensions and the square frame. Check the face crop on mobile and desktop.

Project screenshots live under `public/assets/` and use WebP. Review new screenshots for private information. Update alt text, width and height in `src/graphics.mjs` when replacing them.

`social-card.png` is the share preview. Update it if the name/headline changes. `favicon.svg` is the NPC monogram. Manrope is self-hosted; preserve its OFL license. No external font requests are required.

## Themes and layout

`DESIGN.md` documents the palette and primitives. Edit CSS custom properties at the top of `src/styles.css` for colors. Light mode has its own complete palette. The first visit follows device preference; the theme button saves a local preference. Print always uses a light, résumé-only layout.

Breakpoints: 1100px compact header, 899px navigation disclosure/tablet, 767px single-column phone, 359px narrow-screen refinements. Verify at 320, 375, 768 and 1280px. Honor reduced motion. Keep all essential content available without JavaScript.

## Review and release

1. Run `npm ci`, `npm run build`, and `npm run check`.
2. Install real Chrome for testing with `npx playwright install chrome`.
3. Start `npm run preview`, then run `npm test` in another terminal.
4. Inspect light and dark screenshots under `work/qa/`, including mobile, project disclosures, training disclosure and print view. Scan the generated `resume.pdf` for awkward page breaks.
5. Check local links and professional facts. Run `npm audit` after dependency changes.
6. Commit only source and intended public assets. Push to `main`.
7. Check the `Check and deploy portfolio` Actions run, then visit the live Pages URL. Refresh if a CDN is still serving the previous deployment.

Use `git revert <commit>` followed by a push for rollback. Never force-push main to roll back a website.

## Hosting and contact

Repository: `npcagomoc-del/npcagomoc-del.github.io`. Publishing source: GitHub Actions. Workflow: `.github/workflows/pages.yml`. Only generated `dist/` is uploaded. No server runtime, domain purchase or hosting secrets are needed.

`siteUrl` is used for the canonical URL, sitemap and social metadata. All assets use relative paths. A repository-subpath deployment therefore renders correctly, but update `siteUrl` if the public address changes.

Contact actions are ordinary links, not a submission form. There is no message database, analytics service, authentication, API key, or visitor data collection. Saved browser state contains the chosen theme and optional animation preference.

## Office projects, tools and community

`brands` contains display names and asset keys; `community` contains event titles and attendance descriptions. Keep both in content.json. Featured certifications may include an `icon` key for their issuer mark. These marks do not confer certifications beyond the named credential.

Projects with `resume: true` appear in the professional résumé project section. Use `resumeDescription` for its compact summary; full project scope remains on the main page. The résumé prints as two deliberate A4 pages: experience and credentials, then selected projects and technical skills. Check both actual PDF pages from dark and light modes after copy changes. Do not force it onto one page by reducing type.

Office illustrations use shared SVG primitives in graphics.mjs and are marked as process illustrations. Do not replace them with unsanitized internal screenshots. Brand assets live in assets/brands; record sources in CONTENT-SOURCES.md and preserve the license. After replacing images, browser QA must scroll through and decode the lazy project previews before composite captures.

The career path follows reading position and the active navigation link. Reduced motion displays the complete path; no-JavaScript navigation, roles and dates remain available. Check these fallbacks after interaction changes.

The technology strip moves only while visible and offers Pause / Resume motion. Hovering or focusing the strip pauses it; reduced motion and no JavaScript show wrapped static marks. Pause the strip before static screenshot checks, and verify movement separately with normal motion enabled. Skip the inert, aria-hidden duplicate track when testing lazy image scrolling.

The hero's Enable animations / Reduce animations button saves `portfolio-motion` as `full` or `reduced`. At the owner's latest request, no saved choice means full motion, including in a browser reporting reduced motion. An explicitly saved reduced choice still disables motion. Keep CSS and JavaScript keyed to the effective `data-motion` value. Test default-on behavior under both system settings, explicit on/off and reload persistence. Without JavaScript, the composition remains static.

The portrait now sits inside `.tech-scene` / `.tech-space`, a CSS perspective composition with decorative circuit rings and server/network/system/automation symbols. The actual photo retains its square intrinsic frame and circular crop. Verify its layout dimensions before perspective projection rather than expecting the projected bounding rectangle to remain square. Full motion includes orbit rotation, pointer tilt on fine pointers and native scroll depth; it pauses outside the viewport and when the document is hidden. Reduced motion and no JavaScript keep a static composition. Avoid replacing it with a screenshot or adding unsourced system metrics.

The career roadmap uses measured `.timeline-dot` checkpoints and cubic SVG connections, alternating across a central corridor on desktop and winding within a narrow left rail below900px. Milestone navigation renders from the same chronological content and links to generated article IDs; click/Enter scrolls and focuses the selected milestone. ArrowLeft/ArrowRight/Home/End operate the milestone links. Preserve readable source content and native anchor fallback without JavaScript. The Clauto company link has a44px hit target on the main roadmap; keep this separate from résumé printing.

Brand assets retain their source colors, but company/tool/issuer marks display in monochrome without white wells or added padding. Shared `--brand-treatment` / `--brand-blend` use grayscale and multiply on light surfaces, inversion and screen on dark surfaces to keep raster white backgrounds from appearing as tiles. Keep this scoped to marks so portrait/event/project images retain their colors. Source references and the additional Devicon license are in CONTENT-SOURCES.md and assets/brands.

Community entries may supply `image` and `imageAlt` for owner-approved event artwork. Logos use the central brand/credential `icon` keys, including optional issuer marks on further training. Keep adjacent text labels; the decorative marks do not replace accessible names.

Projects may set `wide: true` to reuse the full-width infrastructure card layout. Keep historical project dates in the category and compact résumé description when needed. Study Room Filinvest uses this layout and preserves its Jul–Aug2023period and contributor credit. The résumé reads its compact description from the same project entry.

## Identity, copy and timeline

`name` drives the full display name in the stacked wordmark, introduction, metadata, footer and résumé. `initials` drives the lowercase npc. mark; the favicon is its separate SVG asset. `learningNote` supplies the second paragraph below the introduction. The portrait caption and portfolio index have been removed.

`greetingName` supplies the short name in the hero greeting (“Hi, I'm Noe,”); the full `name` remains on the wordmark and résumé.

The page timeline combines employment entries with the central `education` object and sorts by the first year, from past to present. Keep employment data newest first for the résumé. Résumé employment and education remain separate sections. Do not add a duplicate education entry to `experience`, or it will also appear as a job in the résumé.

Education may include `description`, a short general degree description for the roadmap, and `thesis`, the owner-confirmed thesis title shared with the résumé. Do not turn the general description into an invented course transcript or add unspecified thesis outcomes.

Project notes are optional. Keep contributor and upstream attribution; omit empty notes rather than rendering empty paragraphs. Public process-graphic badges and generic disclosure disclaimers were removed at the owner's explicit request. The underlying visuals remain abstract process diagrams and must not acquire invented telemetry. Source/privacy boundaries remain in CONTENT-SOURCES.md.

Long composite capture note: mobile page height exceeds16384px. Chrome's GPU full-page capture repeated the page top beyond that raster boundary, while actual viewport and section captures were correct. Browser regression capture now launches real Chrome with `--disable-gpu` for reliable tall image export. A separate normal-GPU Chrome motion recording and Lighthouse audit remain the runtime/performance evidence. Repaired375px full composites show the complete résumé tail, contact and footer.

Experience entries may supply an optional `website` URL for a linked company name on the page and résumé. Use the official HTTPS site. Year-only dates are acceptable when exact months/status were not provided; do not manufacture Present or completion labels. The2026Clauto internship uses this pattern.
