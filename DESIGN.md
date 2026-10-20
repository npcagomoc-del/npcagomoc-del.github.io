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
- Only linked panels have hover affordance; on hover border strengthens and actual arrow translates 3px. Focus-within equivalent. No whole-card link with nested duplicate interactive controls. Real image alt text; illustrative diagrams explicitly marked. Empty list gets one sentence instead of invented projects.

### SkillGroup / ToolTag
- Label + short relevant list, tidy wrapping tags; normal sentence case. Agentic development uses named Codex, Claude and OpenCode tags with a brief truthful workflow description. Do not imply vendor certification or partnership. Static tags never look like clickable filters.

### ExperienceRow / CredentialRow
- Dates and semantic headings; optional issuer, verification link and date only when supplied. Timeline separator is decorative. Experience bullets state owned scope, not invented quantified impact. Incomplete entries stay editable in content data, with restrained public missing-content language if necessary.

### ResumeContact
- Full-width concluding section, large direct heading, résumé download/view and contact links only when real. A missing résumé shows “Résumé available on request” only if user approves that claim; otherwise “Résumé will be added here.” No working-looking `href="#"` controls or invented email. No contact form unless actual submission is implemented.

## 6. Motion & Interaction

Motion budget deliberately small: `--motion-fast:140ms`, `--motion-standard:220ms`, easing `cubic-bezier(.2,.8,.2,1)`. Use opacity and transform for presses and directional link arrows. Theme switches update colors immediately or with a short opacity transition; no View Transition dependency. Avoid ornamental entrance sequences, background animation, typewriters, scroll hijacking, magnetic cursors, parallax, or hidden-until-JS content. Native anchor scrolling may be smooth only when reduced motion is not requested. Reduced motion removes all nonessential animation and uses instant scroll. These standard interactions need no external animation dependency.

## 7. Depth & Surface

Strategy: borders plus quiet tonal layers. Canvas surrounds slightly contrasted work surfaces; images and actual portrait provide depth. Single-pixel rules and 16px radii establish craft. Portrait has a real photographic focal point and layered static ring. Do not use large shadows, neon glow, gradients behind every section, glass cards, fake grain overlays, or a uniform three-card marketing grid. The light version must be individually inspected rather than treated as a mechanical color inversion.

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
- Original work illustrations: network schematic with labeled illustrative state, Buseng typography/rice motif, Libre journal marks. Art uses only the theme tokens; it is not product telemetry or a screenshot.
- ResumeSheet, ProjectDetails and TrainingDetails are additional primitives. Native details/summary, plus changes to minus when expanded; no animation of disclosure height. Resume two-column paper surface, one column below 768px, full-width isolated print view on A4.

- Evidence upgrade: the personal-project panels use actual public repository screenshots (Buseng menu/gameplay and Libre dashboard). Libre data is explicitly labeled synthetic per its source README. These replace the original typography illustrations. ProjectPreview is a figure with a 248px image stage and caption, native colors, explicit image dimensions, and lazy loading. Static network schematic remains illustrative.
