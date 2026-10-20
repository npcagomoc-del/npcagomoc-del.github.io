export const svg = (path) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
export const icons = {
  arrow: svg('<path d="M7 17 17 7M7 7h10v10"/>'),
  arrowDown: svg('<path d="M12 5v14m-6-6 6 6 6-6"/>'),
  arrowUp: svg('<path d="M12 19V5m-6 6 6-6 6 6"/>'),
  menuIcon: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  printIcon: svg(
    '<path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z"/><path d="M17 11h.01"/>',
  ),
  themeIcon: `<span class="sun-icon">${svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>')}</span><span class="moon-icon">${svg('<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>')}</span>`,
};
export const diagrams = {
  infrastructure: `<div class="network-art" aria-hidden="true"><div class="diagram-label">CONNECTED INFRASTRUCTURE <span>ILLUSTRATIVE</span></div><svg viewBox="0 0 560 250" fill="none"><path class="network-line" d="M280 86v40M100 126h360M100 126v45m180-45v45m180-45v45"/><rect class="network-node core" x="205" y="28" width="150" height="58" rx="8"/><text x="280" y="52">NETWORK CORE</text><circle class="node-dot" cx="247" cy="68" r="3"/><circle class="node-dot" cx="263" cy="68" r="3"/><circle class="node-dot" cx="279" cy="68" r="3"/><path class="network-line" d="M300 68h33"/><rect class="network-node" x="35" y="171" width="130" height="48" rx="6"/><rect class="network-node" x="215" y="171" width="130" height="48" rx="6"/><rect class="network-node" x="395" y="171" width="130" height="48" rx="6"/><text x="100" y="200">WORKPLACE</text><text x="280" y="200">REMOTE SITES</text><text x="460" y="200">VESSELS</text></svg></div>`,
  buseng: `<figure class="project-preview"><div class="game-gallery"><img src="assets/buseng-menu.webp" width="258" height="560" loading="lazy" alt="Buseng Chronicles game menu with the rice characters"><img src="assets/buseng-gameplay.webp" width="258" height="560" loading="lazy" alt="Buseng Chronicles rice-throwing gameplay"></div><figcaption>ACTUAL GAME SCREENS / ANDROID + PC</figcaption></figure>`,
  journal: `<figure class="project-preview"><div class="journal-preview"><img src="assets/journal-dashboard.webp" width="1000" height="562" loading="lazy" alt="Libre Trading Journal dashboard with synthetic demonstration trades"></div><figcaption>APPLICATION PREVIEW / SYNTHETIC DEMO DATA</figcaption></figure>`,
};
