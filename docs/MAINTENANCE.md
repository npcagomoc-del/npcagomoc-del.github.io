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

`social-card.png` is the share preview. Update it if the name/headline changes. `favicon.svg` is the NC monogram. Manrope is self-hosted; preserve its OFL license. No external font requests are required.

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

Email and LinkedIn are ordinary links, not a submission form. There is no message database, analytics service, authentication, API key, or visitor data collection. The only saved browser state is the chosen theme.
