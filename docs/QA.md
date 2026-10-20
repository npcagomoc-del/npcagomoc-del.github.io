# Verification

## Automated checks

- `npm run build`: static HTML generated from central content.
- `npm run check`: one h1, unique IDs, all local anchors, HTTPS profile/project links, required assets, CCNA highlight and HTML escaping.
- `npm test`: real Chrome, both dark/light themes at 375px, 768px and 1280px; 320px reflow; photo circle; theme persistence; mobile menu and Escape focus; native project/training disclosures; local request/console errors; no-JavaScript navigation; résumé print isolation; axe WCAG scans.
- `npm audit`: no known vulnerabilities in the project dependency tree at preparation time. All dependencies are development-only; the published site has none.

Generated screenshots, axe JSON, browser results and a test résumé PDF are in ignored `work/qa/`. A4 résumé pagination was rendered and visually inspected with Poppler. The website uses a browser print dialog, so printer settings and future content length can affect pagination.

## Performance

Real Chrome controlled by Playwright, Lighthouse Node API, three runs per mobile/desktop preset. Local production-file preview after image optimization: all four categories (performance, accessibility, best practices, SEO) scored 100 in every run. Local preview uses gzip for text, matching static-host compression behavior. Raw audit reports remain in ignored `work/performance/`.

Performance tooling is isolated in ignored work/ rather than adding it to the site's dependency tree. Scores describe a measurement, not a guarantee for every network, browser or future content edit. Live-host verification and independent review results are recorded in the release record once completed.

## Manual checks and limitations

The parent inspected the original references, the real rendered site, dark/light hero, work cards, responsive layouts and A4 résumé. The design intentionally interprets the references rather than cloning them.

The role history and credentials come from supplied evidence. CCNA is owner-confirmed, without dates or a verification URL. Certification issuers were not queried for live status. LinkedIn and mail links are outbound contact links; no message is sent by the website. No screen-reader session with assistive software has been performed; semantic checks, keyboard tests and automated accessibility scans are the available evidence.

## Local revision, 20 October 2026

Updated office-project emphasis, experience details and plain résumé copy. Added monitoring/reporting, UniFi API reporting (owner confirmed already in use), permission inventory, Translift CMS companion uploader and Python installation automation. Added deployment scope, project coordination, community attendance and locally hosted brand/issuer icons. Astra implemented the timeline/grid and reading-position interaction.

This revision has been built and checked locally. Real Chrome regression checks passed at 375/768/1280 in dark/light, plus320px, no-JavaScript navigation, menu/Escape, saved themes, disclosures, resource checks and résumé-only printing. Axe reported0violations in all six configurations. Capture setup now scrolls every image and waits for decoding before taking section composites; this fixes initially blank lazy brand wells in an evidence capture.

Both actual A4 PDFs were rendered with Poppler and inspected on both pages. The résumé deliberately uses two pages with9pt body text: experience/credentials/education/community, followed by projects/skills/training. Scroll evidence shows rail progression0/0.494/1; reduced motion fixes progress at1 and leaves all content visible. Local screenshots/PDFs and interaction JSON are in ignored work/qa/. Independent visual findings and performance measurements are recorded in the revision evidence; previous release scores elsewhere in this document remain historical.

Independent visual review completed: Pass A and Pass B both PASS with no remaining blockers after refreshed decoded-image captures. Both reviewed all42section captures across six configurations and all4PDF page renders. Their inventory and verdicts are preserved in ignored work/revision-review.md.

The final timeline initialization avoids synchronous layout measurement during page startup. Three mobile and three desktop Lighthouse Node API runs against the local production preview using real Chrome each scored100in performance, accessibility, best practices and SEO. Evidence: work/revision-performance-optimized/summary.json. Earlier local audit batches measured98–99mobile performance; those prompted the startup measurement fix and are retained as diagnostic history. These are local measurements, not deployed-site scores or future guarantees.

After the final initialization optimization, fresh independent Pass A and Pass B both passed on the current source and recaptured evidence. The final review excludes older baseline disclosure artifacts. No product or evidence blockers remain.

## Study Room Filinvest addition, 20 October 2026

Added the owner-supplied Jul–Aug2023project as a separate professional network deployment, preserving morethan50users, Ubiquiti components, POS-integrated Wi-Fi voucher portal, and contributor Jev. No employer affiliation or quantified sales/reliability improvement is inferred. The compact résumé project uses the same data. `wide: true` selects the existing wide card style for this entry and the multi-site infrastructure entry.

Build/check and full real-Chrome tests passed. Focused new-project checks passed in six theme/width configurations; project and expanded-scope screenshots are under work/qa/study-room/. Both-theme actual résumé PDFs were rendered with Poppler and remain two A4 pages. No style or browser interaction code changed.

Independent visual Pass A/B both passed the Study Room addition with no blockers. Each reviewed12project-card states,6integratedWorkcaptures and4actualPDFpage renders. Current evidence and source boundaries are recorded in work/study-room-review.md and docs/CONTENT-SOURCES.md.

## Hero, identity and career timeline revision

Owner-requested content: Noe P. Cagomoc display name below npc., Projects/Certified in labels, four years of supervisory duties as owner-reported, updated project names, Linux/Microsoft365/ZKTeco/Anviz expertise, learning note and STI education in the career timeline. Public process-disclaimer boilerplate and filler were removed; credits and upstream/synthetic-data attribution remain. Shared JSON drives identity, expertise, project copy and education. Social-card.png updated to the central name/headline.

Current build/check and real Chrome tests pass at375/768/1280px dark/light, plus320px/noJS/menus/disclosures/theme/print checks. Header assertions verify full-name-below-monogram; static mutation regression verifies education follows central content. Axe reports0violations in all six configurations. Actual dark/light A4 PDFs remain two pages, rendered by Poppler.

Motion evidence work/qa/hero-motion/: hero start/middle/settled and three career reading positions in both themes, plus reduced-motion320/375/768/1280captures. Browser observations prove active finite entrance animations, changing leading-point coordinates across2025/2021/2015, no running entrance animation under reduced motion, complete static reduced path and visible stacked identity at320px. The portrait animation's rotated pseudo-element bounds initially caused tablet overflow; targeted hero paint clipping with supported32/20px margin corrected it without removing content or animation. The failing overflow assertion passed after the fix. No production debug instrumentation remains.

Current local Lighthouse Node API against real Chrome, three mobile and three desktop runs in work/hero-performance-final/: all six runs scored100in performance/accessibility/best practices/SEO. These are local production-preview measurements, not a live deployment claim.

The final independent visual passes A/B both approved the current hero/timeline revision with no remaining blockers. A mobile full-page export artifact beyond16384px was repaired using software-rendered Chrome captures; normal GPU viewport, motion and performance evidence remains available. Review report: ignored work/hero-review.md. No revised site deployment was performed.

## Clauto internship addition

Added the owner-confirmed Intern experience at Clauto for 2026 to the shared page/résumé data, with agentic programming, OpenCode and Oh My OpenCode learning. Build, static checks and full real-Chrome tests passed. Focused checks verified the official company link and connected four-node career timeline. Both-theme PDF exports remain two A4 pages. Independent visual passes A/B inspected all 24 affected captures and PDF renders, both returning PASS with no blockers. Evidence: ignored work/clauto-review.md and work/qa/clauto/. These changes remain local and unpublished.

## Six-year experience and introduction correction

Build, static checks and the full real-Chrome suite passed for the introduction correction. Focused browser assertions confirm six years in both central intro/summary and no employer name in either. Independent visual passes A/B both passed all 17 affected images: six hero captures, six résumé captures, four A4 PDF page renders and the regenerated social card. Both themes retain two-page résumé printing. Evidence: ignored work/qa/intro/ and work/intro-review.md. Changes remain local and unpublished.
# 20 October 2026 evening revision

Build/static checks and the full real-Chrome browser suite passed after the logo, chronology, project art, intro and motion revision. Both themes at375,768,1280px: zero horizontal overflow, axe violations, browser errors or local asset errors; theme persistence, menu/Escape, project/training disclosures pass.320px reflow, no-JavaScript navigation/content, résumé print isolation and white print margins pass. Actual dark/light print output remains two A4 pages; rendered evidence is in work/qa/revision-motion/resume-*.png.

Normal-GPU motion checks: hero transforms change on scroll; timeline years are2015,2021,2025,2026with four distinct leading-point positions; technology track moves and Pause/Resume works. Reduced-motion runs at320,375,768,1280have no running animations or overflow, full rail, hidden moving head/control and wrapped original logos. Frame sequences and two videos are in work/qa/revision-motion/; results.json records assertions.

Three mobile and three desktop Lighthouse runs through Playwright-controlled real Chrome each scored100performance/accessibility/best-practices/SEO. Local evidence: work/revision-final-performance/summary.json. These are local measurements, not a deployed-site claim.

Static capture harness uses the actual pause button, requests eager decoding for clipped original-track images, skips inert duplicate images, and sets offscreen timeline entries to their settled translation for complete section composites. The first run exposed a capture wait on moving/lazy clipped marks; separate motion evidence retains the real animated behavior.

Independent design-system integrity and visual reviewers both passed with no blockers, covering all42section captures, motion/fallback frames and four PDF page renders. Reports: work/review-oct20-integrity.md and work/review-oct20-visual.md. The minor stale handoff intro/order descriptions were corrected; older design sections are explicitly historical.

## Follow-up: reduced-motion viewer correction

Live inspection of the owner's in-app browser found its system reduced-motion query true, explaining why earlier normal-motion Chrome evidence did not match the owner's experience. Added an explicit Enable animations / Reduce animations control and persisted site preference; device preference remains the default. Parent enabled full motion using the actual tab's control and observed hero matrix changes on scroll while the system query remained true, then verified persistence on reload. Actual-tab screenshot: work/qa/revision-motion/iab-motion-enabled.png.

The full browser suite passes again in both themes at375/768/1280, including additional tests for both system motion settings, explicit enable/disable, saved preference across reload, and no running animations after disabling. The normal-GPU motion suite now starts with system reduced motion in both themes, explicitly opts in via the control, and proves hero/rail/logo motion and pause. Four fresh no-override reduced-motion checks remain static. Evidence: work/qa/results.json and work/qa/revision-motion/results.json, frame sequences and videos. Introduction and AWS strip terminology were corrected from central content.

Six fresh real-Chrome Lighthouse runs (three mobile, three desktop) again score100 in performance, accessibility, best practices and SEO. Evidence: work/motion-override-performance/summary.json; local preview only.

Both independent follow-up reviewers approved with no blockers: work/review-motion-override-integrity.md and work/review-motion-override-visual.md. The visual reviewer independently reran build/check/browser tests successfully and inspected the actual in-app opt-in screenshot and responsive/motion/fallback captures.

## Interactive roadmap and 3D portrait revision

Build/check and the full browser suite pass again at375/768/1280 in both themes, including320px, axe, menu/theme/disclosures, both device-motion states and override persistence, no-JavaScript and isolated printing. Main roadmap title and résumé now read AI Engineer Intern. The attached hero eyebrow is absent. Brand assets retain original colors and white wells. Photo shape checks use intrinsic layout dimensions and50% radius, since 3D perspective intentionally changes its projected rectangle.

Focused normal-GPU Chrome checks in work/qa/roadmap-scene/results.json pass all six viewport/theme combinations under system reduced motion with explicit full opt-in: orbit matrix changes; desktop pointer tilt changes depth; four checkpoints span multiple x positions; SVG path is cubic; milestone click/Enter focuses the target; End key focuses the last navigation stop. No overflow. Device-reduced mode starts with zero running animations. Videos and motion-frame captures are alongside the results.

Actual in-app verification confirms saved full mode, running orbit-travel animation with900px perspective, absent eyebrow, corrected role, and milestone2 focus after selection. Actual screenshots: work/qa/roadmap-scene/iab-3d-hero.png and iab-interactive-roadmap.png. Both dark/light résumé PDFs remain two A4 pages; all four renders were inspected. Initial tablet axe target-size finding was resolved with a scoped44px company-link target. Redundant roadmap aria-labels were removed so accessible names match visible labels.

The first integrity review requested named typography tokens for new scene labels and mobile roadmap headings. These now use documented root variables with exactly the same computed values; secondary orbit durations and pointer timing were tokenized too. A fresh integrity reviewer approved with no blockers: work/review-roadmap-scene-integrity-final.md.

Final visual reviewer passed all42freshsection captures, every responsive scene/motion/roadmap state, actual IAB shots and four PDF renders, and independently reran build/check/browser tests after the token/name repairs: work/review-roadmap-scene-visual.md. Six final local Lighthouse runs all score100 across all four categories, three mobile and three desktop: work/roadmap-scene-performance-final/summary.json. The earlier concurrent first mobile run scored99; the final repeat follows the completed fixes and idle regression workload. No live deployment claim.

## Default-on animation and caption placement

At the owner's explicit request, a fresh visitor now starts in full motion under either device preference. An explicitly saved reduced choice still disables motion and persists; no-JavaScript remains static. Browser regression expectations were updated for both system settings. The learningNote paragraph follows the introduction, both under-photo captions are removed, and the heading reads Contact me.

Build/check and the full real-Chrome suite pass again at375/768/1280 in both themes, plus320px, both motion-setting contexts, saved on/off choices, no-JavaScript and print isolation. Fresh hero/contact captures are under work/qa/; actual IAB screenshot is work/qa/latest-intro-placement.png. Source/DOM checks confirm the paragraph order, no portrait-caption/index elements, Contact me, and full motion in the actual preview.

Both scoped independent reviewers passed all12fresh hero/contact captures with no blockers: work/review-small-revision-integrity.md and work/review-small-revision-visual.md. An outdated sentence in the current design contract was corrected to default-on behavior; historical captions remain as unused CSS only.

## Neutral company-mark treatment

Shared --brand-treatment:grayscale(1) now applies only to .brand-icon and .social-mark at the owner's request. Build/check and full real-Chrome suite pass in all six viewport/theme states, including motion preferences, no-JavaScript and print checks. Both scoped reviewers approved; visual pass inspected all18fresh skills/certifications/contact PNGs. Logos retain white wells and readable adjacent labels, while photo/event/project colors remain. Reports: work/review-monochrome-integrity.md and work/review-monochrome-visual.md. Actual IAB checks report grayscale(1) on company/social marks and none on photo; supplemental screenshot renamed to work/qa/monochrome-brand-preview.jpg to match its JPEG content. No product change needed for that evidence-extension correction.

## Transparent marks and education detail

The owner subsequently requested removal of white logo wells. Company marks now have transparent CSS backgrounds and no added padding; light grayscale/multiply and dark inverse/screen treatments blend embedded raster whites into the surface. Focused real-Chrome checks assert transparent backgrounds and shared thesis content, with fresh cropped logo/education screenshots in work/qa/logo-education/ at375/1280 in both themes. Source art is unchanged; native logo shapes remain.

Central education fields add a general degree description and confirmed group thesis Voice Controlled Wheelchair. The roadmap shows both; the résumé includes the thesis title. Build/check/full browser suite pass at375/768/1280 in both themes, plus320px, motion choice persistence, no-JavaScript and print isolation. Actual IAB DOM confirms the new copy and transparent background/multiply blend. The actual PDFs remain two A4 pages, rendered in work/qa/logo-education/resume-*.png. Static composite captures now also place roadmap-nav in normal flow to avoid a floating sticky strip obscuring education/experience content; live navigation behavior is unchanged.

Both scoped reviewers approved with no blockers: work/review-logo-education-integrity.md and work/review-logo-education-visual.md. Visual pass directly inspected all30fresh scoped responsive sections,8focused logo/education crops and4PDF page renders; no white wells, dark raster boxes, clipped education text or print issues. Focused crop filenames: work/qa/logo-education/{375,1280}-{dark,light}-{logos,education}.png.
