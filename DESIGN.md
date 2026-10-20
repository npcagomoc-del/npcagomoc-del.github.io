# Systems Portfolio — Design System

## 0. Research Log

- Brief: original personal portfolio for an IT systems and network professional, with light and dark themes, circular personal photo, work, experience, certifications, résumé, and agentic development using Codex, Claude, and OpenCode.
- User references: https://aminnepali.com.np/#work for dark direction; https://www.tim-gesemann.dev/ for light direction. They are inspiration, not a clone contract. Do not copy their biography, artwork, projects, credentials, or branding.
- Reference inspection on 2026-10-20: subagent IAB creation returned a browser binding, but screenshot failed with “IAB visibility is not supported in a subagent thread.” Web fetch returned inaccessible / timeout. No reference pixels or runtime tokens were verified by this designer. Parent subsequently verified both references in Chrome: dark site uses #202020 body, DM Sans, Manrope headings at 55–68px in #edf2f8, lime CTAs, pill navigation, portrait left/copy right, thin project panels, mono labels and dotted backdrop. Light site uses warm off-white, navy #2f355c typography, coral greeting, mono-style body and a spacious text-left/portrait-right hero. Our system retains the large type, personal portrait, whitespace and precise project framing; the theme palettes, geometry and tokens below are original adaptations, not exact extractions.
- Loaded frontend router, design README, minimalist taste rules, URL reference workflow, design-system architecture, designpowers README and Lane C review. The applicable branch is reference-inspired greenfield. No unrelated brand references, Lazyweb research, or generated concepts are needed to replace the user's named direction.
- Chosen direction: an editorial professional dossier. The signature is a large asymmetric headline opposite a circular portrait, followed by precise numbered section labels and work framed like technical field notes. Avoid a dashboard, a terminal imitation, and an endless equal-card grid.

## 1. Atmosphere & Identity

Calm, capable, personal. Warm paper in light mode and deep graphite in dark mode, with moss-green interaction accents. Broad typographic shapes and generous margins give the portfolio presence; small monospaced labels and hairline dividers bring technical precision. The real portrait supplies humanity and depth. Recruiters should understand the role in five seconds, inspect relevant work in thirty, then reach experience, qualifications, or a résumé without searching.

Content order: navigation → introduction/portrait → selected work → systems and tools → experience → certifications → résumé/contact → footer. Work can precede capabilities because evidence earns the claims. Agentic development is a specific part of the toolset, not a substitute for systems expertise. Use user-provided biography, projects, employer names, dates, certifications and links only. Missing material gets a compact honest state, never invented résumé content. Do not expose internal implementation notes in public copy.

Suggested headline direction, subject to the supplied profile: “Reliable systems. Thoughtful solutions.” Supporting description should state actual systems/network work and development practice in plain language; avoid unsupported years, customer counts, uptime, superlatives, and percentage claims.

## 2. Color

| Role / CSS token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F5F4EF` | `#111412` | Page canvas |
| `--surface` | `#FCFCF8` | `#191D19` | Work panels and elevated controls |
| `--surface-alt` | `#EAEDE4` | `#222820` | Visual panels / compact tags |
| `--text` | `#20251F` | `#F1F2EB` | Main text |
| `--muted` | `#5D665A` | `#ADB6A5` | Supporting text |
| `--border` | `#D5DACF` | `#343D31` | Hairline separators |
| `--border-strong` | `#A8B49D` | `#66765D` | Active control edge |
| `--accent` | `#345B31` | `#C4D9A8` | Links, CTA, focus |
| `--accent-hover` | `#244522` | `#DAEAC6` | Hovered action |
| `--on-accent` | `#FFFFFF` | `#1B2818` | Filled action text |
| `--accent-wash` | `#E2EBD8` | `#2B3825` | Selected tags / tool emphasis |

Use each theme as a complete palette. Main action is a solid accent rectangle with a small arrow, not a glowing pill. Muted text must still meet body contrast. The palette has no mandatory “availability” status: do not add an open-to-work dot or claim without confirmation. Color must not be the only cue for state. No arbitrary technology rainbow.

## 3. Typography

Primary: locally served **Manrope** if available, fallback `"Segoe UI", Arial, sans-serif`. Metadata: `"IBM Plex Mono", Consolas, monospace`; self-host if used. Limit to two families and use system fallbacks immediately. Display 600, headings 600, body 400, labels 500.

| Token | Value | Line height / tracking |
|---|---|---|
| `--text-display` | `clamp(2.75rem, 6.5vw, 5.5rem)` | 1.02 / -0.055em |
| `--text-section` | `clamp(2rem, 3.8vw, 3.25rem)` | 1.1 / -0.04em |
| `--text-title` | `clamp(1.375rem, 2vw, 1.75rem)` | 1.25 / -0.025em |
| `--text-lead` | `clamp(1.0625rem, 1.4vw, 1.25rem)` | 1.65 / -0.01em |
| `--text-body` | 1rem | 1.65 / normal |
| `--text-small` | 0.875rem | 1.5 / normal |
| `--text-meta` | 0.75rem | 1.5 / 0.06em |

Only short metadata uses the smallest size. Paragraph measure 58–64ch, hero description 48ch. Heading span changes may create two complementary lines, but never insert line breaks that make mobile text wrap awkwardly. No all-uppercase body prose. No text gradients.

## 4. Spacing & Layout

Base scale: `--space-1:4px`, `--space-2:8px`, `--space-3:12px`, `--space-4:16px`, `--space-5:20px`, `--space-6:24px`, `--space-8:32px`, `--space-10:40px`, `--space-12:48px`, `--space-16:64px`, `--space-20:80px`, `--space-24:96px`, `--space-32:128px`.

- `--content-width:1160px`; fluid gutters `clamp(20px,5vw,64px)`; section block spacing `clamp(64px,8vw,112px)`; card radius `--radius-card:16px`; small control radius `--radius-control:8px`; tag radius `--radius-tag:4px`.
- Header 80px desktop / 72px mobile. Logo/name left, concise Work / Experience / Credentials links and theme control right. Keep it legible and uncluttered. Header can be sticky with solid/translucent canvas and hairline border, not a floating oversized pill.
- Desktop hero: 1.5fr / 1fr, gap 64px, aligned center; at least 560px high including spacing, no forced full viewport. Copy occupies ~640px; portrait diameter 280–320px. One short mono role label above the headline, lead below, then two actions.
- Portrait is circular, real and recognisable, with `object-fit:cover`, adjustable focal point, 8px canvas ring and 1px border. Optional concentric static outline outside the image establishes structure. Do not use decorative orbiting logos, floating cards, stock headshots, or generated likenesses. Until supplied use a tasteful initials disc explicitly representing missing photo.
- Work uses one featured wide panel followed by two smaller panels if sufficient verified projects exist. Visual area and copy area are distinct. Where screenshots do not exist, use an intentionally authored small network/system schematic labeled as illustration—not a fake product screenshot or invented operational telemetry.
- Experience is a vertical editorial ledger: dates left, role/employer and scoped bullets right. Credentials use compact rows, not giant empty award cards. Missing certifications must not imply completed training.
- At 768–1023px: hero remains two columns only if copy fits; portrait 224px, gap 32px, work cards can be two columns.
- Below 768px: one column, hero copy followed by portrait (or portrait above headline only if it fits compactly); portrait 168px; section label above title; all work and ledger entries stack. Maintain 20px gutters. Navigation can use a real accessible disclosure menu; theme remains directly reachable. No horizontal scrolling primary content.

## 5. Components

All layout uses reusable `Container`, `SectionHeading`, `Stack`, `Cluster`, and `Divider` primitives. Root document owns scrolling. Validate primitives and states at 375 / 768 / 1280 before full-screen composition.

### Navigation and ThemeToggle
- Semantic header/nav, named links, current section indicated by underline or accent plus `aria-current` when accurate. No invented active state.
- Theme button 44×44 minimum, labelled “Switch to light theme” / “Switch to dark theme”; icon shows intended next mode. Persist preference and initialise before first paint; first visit follows system preference. Confirm both themes after reload.
- Mobile disclosure: button with `aria-expanded`, actual navigation links, Escape closes; no keyboard trap for simple inline disclosure. Button hover tint, pressed scale, clear focus ring.

### Button / TextLink
- Anchor for navigation/download; button for state changes. Primary filled, secondary outlined, tertiary inline arrow. Height 48px, padding 16–24px, gap 8px, radius 8px.
- Hover distinct background or underline; active translateY(1px); keyboard focus 2px accent ring offset 4px. Disabled controls not used to conceal missing assets: show honest adjacent text and omit fake downloads. Long labels wrap.

### SectionHeading
- Mono number and short topic on left (e.g. “01 / SELECTED WORK”), title and brief explanation below or right. Border marks section boundary. Title always semantic h2. No interaction or decorative animation.

### WorkCard
- Article: visual, discipline/category, h3, concise problem/scope, stack tags, verified project action if available. Featured and standard variants share anatomy. Border, radius 16px, 24–32px content padding.
- Only linked panels have hover affordance; on hover border strengthens and actual arrow translates 3px. Focus-within equivalent. No whole-card link with nested duplicate interactive controls. Real image alt text; process diagrams remain abstract and contain no invented telemetry. Empty list gets one sentence instead of invented projects.

### SkillGroup / ToolTag
- Label + short relevant list, tidy wrapping tags; normal sentence case. Agentic development uses named Codex, Claude and OpenCode tags with a brief truthful workflow description. Do not imply vendor certification or partnership. Static tags never look like clickable filters.

### ExperienceRow / CredentialRow
- Dates and semantic headings; optional issuer, verification link and date only when supplied. Timeline separator is decorative. Experience bullets state owned scope, not invented quantified impact. Incomplete entries stay editable in content data, with restrained public missing-content language if necessary.

### ResumeContact
- Full-width concluding section, large direct heading, résumé download/view and contact links only when real. A missing résumé shows “Résumé available on request” only if user approves that claim; otherwise “Résumé will be added here.” No working-looking `href="#"` controls or invented email. No contact form unless actual submission is implemented.

## 6. Motion & Interaction

Motion budget deliberately small: `--motion-fast:140ms`, `--motion-standard:220ms`, easing `cubic-bezier(.2,.8,.2,1)`. Use opacity and transform for presses and directional link arrows. Theme switches update colors immediately or with a short opacity transition; no View Transition dependency. The owner-approved finite hero entrance and career trace are specified in the current motion revision below. Avoid continuous background animation, typewriters, scroll hijacking, magnetic cursors, parallax, or hidden-until-JS content. Native anchor scrolling may be smooth only when reduced motion is not requested. Reduced motion removes all nonessential animation and uses instant scroll. These standard interactions need no external animation dependency.

## 7. Depth & Surface

Strategy: borders plus quiet tonal layers. Canvas surrounds slightly contrasted work surfaces; images and actual portrait provide depth. Single-pixel rules and 16px radii establish craft. Portrait has a real photographic focal point and layered ring with a finite entrance and static settled state. Do not use large shadows, neon glow, gradients behind every section, glass cards, fake grain overlays, or a uniform three-card marketing grid. The light version must be individually inspected rather than treated as a mechanical color inversion.

## 8. Accessibility Constraints & Accepted Debt

WCAG 2.2 AA target: 4.5:1 normal text, 3:1 large text and meaningful control edges; full keyboard operation; visible focus; skip-to-main; one h1 and logical headings; descriptive link text; 44px touch targets; 200% text zoom and narrow viewport reflow. Screen-reader text for icon-only controls. Decorative visuals use empty alt/aria-hidden. Never use tooltip-only essential content. Test with a long name, long certification title, missing image, no projects, and unbroken URL.

Personas and essential tasks:
- Recruiter on phone: identify role, inspect recent experience, find résumé/contact within one minute.
- Technical hiring manager: understand actual project scope and tools; distinguish real evidence from illustration.
- Keyboard / low-vision visitor: switch theme, navigate sections, reach real links, preserve focus and contrast.
- Portfolio owner: update central content data and replace photo/résumé without editing layout components.

Accepted debt: none approved. Open dependencies are factual content, portrait, résumé and links. Parent completed live reference-site inspection. These are tracked dependencies, not permission to invent facts or claim a verified visual match. Implementation contract: vanilla HTML/CSS/JavaScript, with central JSON content compiled into static HTML; no framework required. Before delivery parent must record actual screenshots, tested interactions and unresolved content limitations; design approval alone is not implementation QA.


## Implementation refinements

- Display scale is `clamp(2.75rem,6vw,5.25rem)` to preserve the two-line title; tablet 3.5rem, phone 2.75rem. Hero ratio 1.8fr/1fr. Portrait 320px, 224px tablet, 168px phone.
- Metadata uses system Consolas/monospace, not an unloaded IBM Plex font. Manrope variable Latin font is locally served with its OFL license.
- Original work illustrations: abstract network schematic, Buseng typography/rice motif, Libre journal marks. Art uses only the theme tokens; it is not product telemetry or a screenshot.
- ResumeSheet, ProjectDetails and TrainingDetails are additional primitives. Native details/summary, plus changes to minus when expanded; no animation of disclosure height. Resume two-column paper surface, one column below 768px, full-width isolated print view on A4.

- Evidence upgrade: the personal-project panels use actual public repository screenshots (Buseng menu/gameplay and Libre dashboard). Libre data is explicitly labeled synthetic per its source README. These replace the original typography illustrations. ProjectPreview is a figure with a 248px image stage and caption, native colors, explicit image dimensions, and lazy loading. Static network schematic remains illustrative.

## Historical October 2026 interaction refinement (superseded below)

The owner requested Tim Gesemann-inspired graph paper and a winding career timeline. This is an original adaptation within the existing moss/graphite/ivory system. Parent supplied the reference observation: curved vertical paths with large year nodes. No reference artwork or biography is reused.

- `--grid-size:48px`, `--grid-ink:color-mix(in srgb,var(--border) 35%,transparent)` create a restrained static grid on hero and experience surfaces. The grid fades at section edges and stays behind content.
- `--timeline-rail:220px`, `--timeline-node:88px`, `--timeline-indent:72px` define the desktop career rail. Large outlined year badges alternate horizontally; a measured SVG curve connects their centers. Dates remain normal accessible text. Below 768px the rail becomes 56px wide and nodes 56px; text has its own readable column. Decorative paths and badges are hidden from assistive technology.
- ExperienceRow has static, reached and current-reading states. All content is present immediately. A native passive scroll listener updates a clipped accent path and the current row; no scroll hijacking or entrance hiding. Reduced motion displays the complete path without continuous progress. Source consulted: beui.dev/r/scroll-animation/raw; adapt its native progress fallback and reduced-motion contract, without Lenis, React or any new dependency.
- Navigation uses an accurate `aria-current="location"` state with underline. Hover/focus arrows use the existing 220ms motion token; no ornamental hover motion on noninteractive cards.
- BrandStrip items pair a 28px original brand asset with its name; credential logo wells are 40px, white for recognizable original logo colors in both themes. These marks identify tools/issuers and do not imply partnership.
- CommunityNote uses a hairline divider, short heading and readable paragraph. FlowArt reuses the schematic visual grammar. Portrait maintains its square intrinsic frame and existing round crop.
- Print preserves the light isolated résumé, allows natural additional pages, and avoids splitting individual experience/project items. Do not shrink body type to force one page.
- Verification ownership: parent runs production build, static checks, real Chrome viewport/motion/keyboard checks, screenshot review and PDF review after integration. These notes describe the contract, not a claim that verification has passed.

### Project collection refinements

Eight projects use two broad anchors: the leading monitoring project and `.infrastructure-feature`, each a two-column art/copy panel on desktop. The four other office projects form two pairs between them; the two personal projects form a final pair. Below 900px all project cards become one column so 560-unit process diagrams remain readable. Diagram stages have a 220px minimum at this breakpoint. Process labels use 20 SVG units, their short notes 15, and the public illustration badge was removed at the owner’s request. Year labels are excluded from legacy period/location span rules so their centered flex layout and display type remain intact.

## Historical hero and career motion revision (superseded below)

The owner's new brief explicitly expands the earlier quiet-motion rule: a stronger introduction and a visibly moving career line. The existing palette, real portrait, static HTML and native scrolling remain the foundation.

- Wordmark is a two-line lockup: `npc.` above the full name, at every viewport width. Name uses 12px metadata type and remains visible at 320px.
- Hero uses a broad type column and a framed portrait. Display type is `clamp(2.75rem,5.4vw,4.5rem)` with normal wrapping; the accent line has its own block. The portrait's outer broken ring and registration marks form a single signal-lock entrance, settling in 1800ms. Text enters by a 20px translation over 800ms without being hidden. No continuous background animation or cursor tracking.
- New motion tokens: `--motion-enter:800ms`, `--motion-signal:1800ms`; easing remains the existing `--ease`. Hero motion runs once via CSS, requires no startup geometry, and reduced-motion renders the final static composition.
- CareerPath retains its continuous measured cubic curve, with a 4px accent trail, 7px leading point and a soft 13px surrounding ring. The point follows the same cubic geometry at the viewport's 48% reading line; it is decorative and makes scroll progress legible. Reached year badges use the accent surface, while the current reading node has an accent ring. Education is a third standard ExperienceRow.
- Native scroll is passive and coalesced into one animation frame; geometry initializes from ResizeObserver, never synchronous startup measurement. All geometry reads precede state writes. No-JavaScript retains the static line, dates and content; reduced-motion shows the entire path, removes the moving point and entrance motion.
- Interaction reference revisited: `https://beui.dev/r/scroll-animation/raw`, using its passive native-scroll and reduced-motion pattern only, without Lenis, React or runtime dependencies. Existing project branch; frontend design, interaction, perfection and designpowers review guidance read. Parent owns integrated screenshot, accessibility and performance verification.

## Editorial progression revision — 20 October 2026

This revision supersedes the earlier winding rail and quiet hero motion. The owner requested a less crowded introduction, unmistakable scroll motion, chronological education-to-career storytelling, and moving technology marks. Recruiters need a calm first screen; technical readers need the dates and duties to remain easy to scan.

- Hero: a broad headline, compact supporting paragraph, and 320px portrait with generous 80px column space. Minimum desktop height is 760px, capped by ordinary content flow rather than scroll pinning. Copy spacing uses the existing 24/32/40px scale. The source image remains square with a circular crop. On phones, portrait and copy stack naturally.
- Intro in full-motion mode: finite 800ms arrivals travel 64px, staged at 120ms intervals from title through description, actions and metadata. The portrait registers from scale 0.72 and 24px horizontal displacement over 1800ms. Over the hero's natural scroll departure, text translates upward by at most 64px; portrait translates upward by 120px and scales to 0.84; broken rings rotate 180 degrees and counter-rotate 120 degrees. The bounded transform communicates leaving the introduction. No opacity fade of essential copy, pinning, scroll interception or continuous frame loop.
- Career rail: `--timeline-axis:12px` on desktop and `6px` on phones, `--timeline-rail:220px`, `--timeline-node:12px`. A straight 2px rail joins compact checkpoints, with a 3px accent reading trail and 5px leading point. Years are open editorial type (`--text-section`), never circles. Rows retain dates, optional locations, role headings and bullets. Chronology is controlled by the shared render function.
- Career movement in full-motion mode: content settles from a maximum 64px vertical and 48px leftward displacement as it approaches the reading line. Phones use only vertical movement to preserve the date/rail separation. Text remains fully opaque for contrast. Reached checkpoints and year labels use the accent; the current checkpoint gains a restrained surrounding ring. The first entry is readable from initial render. No content starts hidden.
- Technology strip: named marks travel on a continuous 36-second track, inspired by the source mechanism at `https://beui.dev/r/marquee/raw`. The duplicated track is inert and hidden from assistive technology. A visible Pause motion / Resume motion button controls movement; hover and focus also pause. It runs only while the strip is in view. Reduced motion and no JavaScript show a wrapped, static list without duplicates.
- Identity assets: original wordmarks use a 72×36px white tile when their aspect ratio needs room; square marks use 36px tiles. Credential strip issuer marks are 28px; training marks 40px; social marks 20px. Community art is a 112px image alongside the event copy and stacks at narrow widths.
- Motion implementation: native passive scroll coalesced to animation frames, all reads before writes, ResizeObserver for timeline geometry, IntersectionObserver for strip visibility. Transform/opacity only for scrolling. No dependencies added. Reduced motion resets intro and content transforms and shows a complete static career path.
- Motion preference: the computer's reduced-motion setting is the default. A visible Enable animations / Reduce animations button below the intro metadata lets a visitor explicitly choose full or reduced motion. The choice persists in `portfolio-motion`; `data-motion` initializes before first paint. An explicit full preference overrides a system reduction request only after the visitor chooses it, and explicit reduced motion also overrides a system no-preference state. Without a saved choice, operating-system changes update the page. No-JavaScript content stays static. Full/reduced mode controls every hero, rail and technology-strip effect consistently; the logo pause control remains a separate local pause.
- QA handoff: parent verifies real Chrome screenshots at 375/768/1280px in both themes, motion at multiple scroll positions, pause/resume, reduced motion, no-JavaScript and résumé print isolation. No visual or performance pass is claimed by this design contract.

## Current direction: orbital portrait and interactive roadmap

Latest logo direction: company/tool/issuer marks sit directly on section surfaces with no white wells or added padding. Shared `--brand-treatment` and `--brand-blend` use grayscale/multiply in light mode, grayscale plus inversion/screen in dark mode. This keeps SVG marks legible and makes embedded white raster backgrounds visually blend into the surface. Original source files retain their brand colors; the portrait, event artwork and project previews are not filtered. This supersedes the earlier white-well and full-color directions.

Latest owner adjustment: animations start in full mode by default, including when the device requests reduced motion. The visible Reduce animations / Enable animations control remains, and an explicitly saved reduced choice is respected. The learning note is a normal body paragraph immediately after the introduction; the portrait has no caption or portfolio index. Contact heading reads “Contact me.” This supersedes earlier device-following defaults and portrait-caption placement.

Scene detail tokens: `--text-scene-label:9px` and `--text-scene-label-compact:8px` are decorative, aria-hidden node captions only; essential text keeps the normal type scale. Roadmap phone headings use `--text-roadmap-title:1.25rem` and years `--text-roadmap-year:2.5rem`. Secondary rings use `--orbit-duration-fast:18s`, `--orbit-duration-slow:30s`; pointer response uses `--motion-scene:180ms`. These extend the existing token system without changing layout geometry.

The owner explicitly replaced the straight editorial rail and requested a high-tech, three-dimensional introduction. This section supersedes earlier prohibitions on orbital decoration, continuous scene motion and a nonlinear timeline. The real photograph, factual content, theme palettes and explicit motion preference remain.

- PortraitScene is a 440px maximum square perspective stage. A square photo frame with circular crop occupies 66% of its width. Three inclined circuit rings, four SVG technology nodes (server, network, processor, code), fine connector traces and a restrained radial light layer surround the photo. These are decorative representations of existing expertise, not status indicators, telemetry or new credentials.
- Scene tokens: `--scene-size:440px`, `--scene-depth:900px`, `--orbit-duration:22s`, `--node-duration:6s`, `--tech-cyan:#7dd5d8` dark / `#246b77` light, `--scene-shadow:rgb(0 0 0 / 24%)`. Secondary rings take 18s and 30s. Rings use existing accent, border and surface tokens. Nodes use 64px faces (48px tablet, 56px phone), hairline rims, theme surfaces and a small directional shadow. CSS perspective and separate transform layers provide depth; no canvas, video, generated likeness or new dependency.
- Full motion rotates inclined circuit rings and advances signal points; technology nodes move through small 3D arcs. Fine pointer input tilts the entire scene up to 8 degrees. Native scrolling adds up to 12 degrees on X and 18 degrees on Y, which also works on touch. Motion is paused outside the viewport and when the document is hidden. Reduced motion and no JavaScript retain the complete static composition. The visible animation toggle disables or reenables the default-on scene and saves the chosen mode.
- Roadmap replaces the straight rail with a measured cubic path through alternating checkpoints. Desktop content panels alternate left/right around a 240px central corridor; checkpoint centers move 160px horizontally. At 899px and below, all content uses one readable column while the path winds between two x positions inside a 64px rail. Actual checkpoint geometry defines both the SVG and the moving head, so the path always meets its nodes.
- RoadmapNav is a sticky four-stop anchor strip sourced from the same chronological entries as the roadmap. Each stop shows its year and source company/school. Click/Enter moves to and focuses that milestone; ArrowLeft/ArrowRight/Home/End move between navigation stops. The current reading stop is exposed with `aria-current="step"`. Dates and every description remain in the document; this is navigation, not tabs with hidden panels.
- Milestone panels use existing 24px padding, 16px corners and surface/border tokens. A compact diamond checkpoint and ordinal label provide a technical visual signature without oversized year circles. Full-motion arrival remains transform-only and settles by the reading line. Keyboard focus highlights the panel; native links and content work without JavaScript.
- The generic introduction eyebrow is removed at the owner's request. The scene and roadmap are responsive at 320/375/768/1280px, with no clipping of essential content. All new scene visuals and navigation remain outside isolated résumé printing.
- Verification: inspect actual full/reduced-motion renders and trace alignment at desktop and phone widths; operate roadmap via pointer and keyboard; test stored full-motion override under a system reduction request. Record evidence before reporting visual success.
