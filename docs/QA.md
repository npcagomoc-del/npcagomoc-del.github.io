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
