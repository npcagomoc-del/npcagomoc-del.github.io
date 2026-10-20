# Portfolio maintenance instructions

Read README.md, DESIGN.md, docs/MAINTENANCE.md and docs/CONTENT-SOURCES.md before changes.

- Static HTML/CSS/JavaScript with Node build scripts. Keep the site compatible with GitHub Pages and repository subpaths.
- Edit `src/content.json` for personal facts; both the main page and résumé render from it. Do not hand-edit dist/.
- Preserve factual boundaries. No invented credentials, dates, project outcomes, availability promises, or original authorship of upstream work.
- Preserve accessible navigation, reduced motion, no-JavaScript content, both themes, square photo frame, and isolated résumé printing.
- Use existing CSS tokens and reusable render functions. Keep dependencies development-only unless behavior needs runtime code.
- Never commit private source documents, screenshots of internal systems, credentials, work/ artifacts, node_modules/ or dist/.
- Verify with `npm run build`, `npm run check`, and `npm test` against a running preview. Browser tests require real Chrome (`npx playwright install chrome`). Inspect work/qa/ screenshots before reporting visual success.
- Update docs when content structure, deployment, assets or maintenance steps change. Keep public copy free of implementation notes.
