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
  buseng: `<figure class="project-preview"><div class="game-gallery"><img src="assets/buseng-menu.webp" width="258" height="560" loading="lazy" alt="Buseng Chronicles game menu with the rice characters"><img src="assets/buseng-gameplay.webp" width="258" height="560" loading="lazy" alt="Buseng Chronicles rice-throwing gameplay"></div><figcaption>ACTUAL GAME SCREENS / ANDROID + PC</figcaption></figure>`,
  journal: `<figure class="project-preview"><div class="journal-preview"><img src="assets/journal-dashboard.webp" width="1000" height="562" loading="lazy" alt="Libre Trading Journal dashboard with synthetic demonstration trades"></div><figcaption>APPLICATION PREVIEW / SYNTHETIC DEMO DATA</figcaption></figure>`,
};

const projectArt = (name, kind, composition) =>
  `<div class="network-art project-art project-art-${kind}" aria-hidden="true"><div class="diagram-label">${name}</div><svg viewBox="0 0 560 250" fill="none" stroke-linecap="round" stroke-linejoin="round">${composition}</svg></div>`;

const panel = (x, y, width, height, content) =>
  `<g><rect class="network-node" x="${x}" y="${y}" width="${width}" height="${height}" rx="10"/><path class="network-line" d="M${x} ${y + 26}h${width}"/><circle class="node-dot" cx="${x + 14}" cy="${y + 13}" r="2"/><path class="network-line" d="M${x + 25} ${y + 13}h24"/>${content}</g>`;

const checkMark = (x, y) =>
  `<path d="m${x} ${y} 5 5 10-12" stroke="var(--accent)" stroke-width="2.5"/>`;

const paperLines = (x, y, width) =>
  `<path d="M${x} ${y}h${width}m-${width} 12h${width * 0.72}m-${width * 0.72} 12h${width * 0.9}" stroke="var(--border-strong)" stroke-width="4" opacity=".65"/>`;

diagrams.operations = projectArt('MONITORING / ZABBIX + GRAFANA', 'monitoring', `
  <ellipse cx="288" cy="222" rx="192" ry="12" fill="var(--border)" opacity=".35"/>
  <g transform="translate(48 5) rotate(-4 230 120)">
    ${panel(34, 18, 366, 188, `
      <path class="network-line" d="M96 44v162"/>
      <path d="M51 64h25m-25 21h17m-17 21h22m-22 21h17" stroke="var(--border-strong)" stroke-width="4"/>
      <rect x="113" y="58" width="270" height="91" rx="5" fill="var(--surface-alt)"/>
      <path class="network-line" opacity=".5" d="M125 80h246m-246 23h246m-246 23h246"/>
      <path d="m125 126 30-12 25 6 27-31 24 12 28-24 28 12 30-21 24 7 30-12" stroke="var(--accent)" stroke-width="3"/>
      <rect x="113" y="161" width="122" height="29" rx="4" fill="var(--accent-wash)"/>
      <rect x="247" y="161" width="136" height="29" rx="4" fill="var(--surface-alt)"/>
      <path class="network-line" d="M127 176h88m46 0h108"/>
    `)}
  </g>
  <g transform="rotate(7 442 168)"><rect class="network-node core" x="380" y="138" width="119" height="63" rx="8"/><circle cx="402" cy="169" r="9" stroke="var(--accent)" stroke-width="2"/><path d="m398 169 3 3 5-6M423 163h56m-56 12h36" stroke="var(--accent)" stroke-width="2"/></g>`);

diagrams['unifi-reporting'] = projectArt('NETWORK REPORT / UNIFI API', 'reporting', `
  <circle cx="166" cy="119" r="77" stroke="var(--border-strong)" stroke-dasharray="3 8"/>
  <circle cx="166" cy="119" r="53" fill="var(--accent-wash)"/>
  <path d="M142 103q24-24 48 0m-39 12q15-15 30 0m-21 11q6-6 12 0" stroke="var(--accent)" stroke-width="4"/><circle cx="166" cy="139" r="3" class="node-dot"/>
  <g transform="rotate(8 344 124)"><rect class="network-node" x="271" y="28" width="153" height="196" rx="8"/></g>
  <g transform="rotate(-6 335 120)">
    <rect class="network-node core" x="248" y="16" width="172" height="203" rx="8"/>
    <text x="334" y="48">NETWORK REPORT</text>
    <path class="network-line" d="M268 62h131"/>
    ${paperLines(269, 82, 116)}
    <rect x="268" y="125" width="132" height="48" rx="4" fill="var(--accent-wash)"/>
    <path d="M283 157v-13m23 13v-21m23 21v-9m23 9v-27m23 27v-18" stroke="var(--accent)" stroke-width="8"/>
    <path class="network-line" d="M269 191h74"/>
  </g>
  <path d="M196 119h28m-7-6 7 6-7 6" stroke="var(--accent)" stroke-width="2"/>`);

diagrams.permissions = projectArt('PERMISSION INVENTORY / ACCESS RECORDS', 'permissions', `
  <g transform="rotate(-3 280 125)">
    ${panel(88, 21, 384, 202, `
      <text x="280" y="39">ACCESS INVENTORY</text>
      <path class="network-line" d="M112 84h336m-336 39h336m-336 39h336m-336 39h336M236 63v138m70-138v138m70-138v138"/>
      <circle cx="126" cy="103" r="8" fill="var(--accent-wash)"/><circle cx="126" cy="142" r="8" fill="var(--accent-wash)"/><circle cx="126" cy="181" r="8" fill="var(--accent-wash)"/>
      <path d="M146 103h60m-60 39h45m-45 39h54" stroke="var(--border-strong)" stroke-width="4"/>
      ${checkMark(261, 102)}${checkMark(331, 102)}${checkMark(331, 141)}${checkMark(401, 180)}${checkMark(261, 180)}
      <path class="network-line" d="M402 103h13m-153 39h13m128 0h13m-84 39h13"/>
    `)}
  </g>
  <g transform="rotate(9 451 184)"><rect x="421" y="161" width="62" height="58" rx="10" fill="var(--accent-wash)" stroke="var(--accent)"/><rect x="439" y="186" width="26" height="19" rx="3" stroke="var(--accent)" stroke-width="2"/><path d="M444 186v-7a8 8 0 0 1 16 0v7" stroke="var(--accent)" stroke-width="2"/></g>`);

diagrams['cms-uploader'] = projectArt('TRANSLIFT CMS / COMPANION UPLOADER', 'uploader', `
  <g transform="rotate(-8 154 122)"><path class="network-node" d="M79 58h54l15 16h91v134H79Z"/><path d="M97 96h125m-125 16h89" stroke="var(--border-strong)" stroke-width="4"/></g>
  <g transform="rotate(6 190 122)"><rect class="network-node" x="139" y="31" width="109" height="146" rx="5"/>${paperLines(157, 61, 71)}<path d="M157 116h71m-71 13h52" stroke="var(--border-strong)" stroke-width="4"/></g>
  <g transform="rotate(-3 354 130)">
    ${panel(252, 67, 224, 143, `
      <rect x="269" y="110" width="190" height="76" rx="7" fill="var(--accent-wash)" stroke="var(--border-strong)" stroke-dasharray="4 5"/>
      <path d="M364 159v-34m-12 12 12-12 12 12M347 162v9h34v-9" stroke="var(--accent)" stroke-width="2.5"/>
    `)}
  </g>
  <circle cx="464" cy="72" r="21" fill="var(--accent-wash)" stroke="var(--accent)"/>${checkMark(456, 73)}`);

diagrams['support-automation'] = projectArt('PYTHON / APPLICATION INSTALLATION', 'installation', `
  <g transform="rotate(-4 256 119)">
    ${panel(77, 28, 350, 177, `
      <path d="m107 78 13 10-13 10m26 0h21M107 121h91m-91 15h138m-138 15h116m-116 15h79" stroke="var(--border-strong)" stroke-width="3"/>
      <path d="m271 89-17 17 17 17m47-34 17 17-17 17m-22-47-12 60" stroke="var(--accent)" stroke-width="3"/>
    `)}
  </g>
  <g transform="rotate(7 415 159)">
    <rect class="network-node core" x="348" y="113" width="131" height="104" rx="9"/>
    <path d="m389 147 24-13 24 13v28l-24 14-24-14Zm0 0 24 14 24-14m-24 14v28m-12-48 24 14" stroke="var(--accent)" stroke-width="2"/>
  </g>`);

diagrams.infrastructure = projectArt('NETWORK INFRASTRUCTURE / CCTV', 'infrastructure', `
  <path class="network-line" stroke-dasharray="4 5" d="M139 163v46h286v-68M277 114V66h112"/>
  <g transform="rotate(-4 238 140)">
    <rect class="network-node core" x="85" y="109" width="305" height="61" rx="8"/>
    <path class="network-line" d="M99 150h277"/>
    <g fill="var(--surface-alt)" stroke="var(--border-strong)"><path d="M105 124h24v15h-24zM140 124h24v15h-24zM175 124h24v15h-24zM210 124h24v15h-24zM245 124h24v15h-24zM280 124h24v15h-24z"/></g>
    <circle class="node-dot" cx="349" cy="132" r="4"/><circle class="node-dot" cx="363" cy="132" r="4"/>
  </g>
  <g transform="rotate(8 421 77)"><path class="network-node" d="M371 47h102v49H371l-14-12V59Z"/><circle cx="439" cy="71" r="15" fill="var(--accent-wash)" stroke="var(--accent)"/><circle cx="439" cy="71" r="6" stroke="var(--accent)"/><path class="network-line" d="M400 96v18h31m-49-18v18"/></g>
  <circle cx="139" cy="62" r="33" class="network-node"/>
  <path d="M121 58q18-18 36 0m-29 9q11-11 22 0" stroke="var(--accent)" stroke-width="2.5"/><circle class="node-dot" cx="139" cy="77" r="2.5"/>
  <circle cx="425" cy="164" r="8" fill="var(--accent-wash)" stroke="var(--accent)"/>`);

diagrams['study-room'] = projectArt('STUDY ROOM / WI-FI VOUCHER PORTAL', 'voucher', `
  <g transform="rotate(-8 202 125)">
    <rect class="network-node" x="99" y="25" width="202" height="191" rx="12"/>
    <path class="network-line" d="M119 52h162"/>
    <path d="M173 88q28-28 56 0m-46 14q18-18 36 0m-27 13q9-9 18 0" stroke="var(--accent)" stroke-width="3"/><circle cx="201" cy="128" r="3" class="node-dot"/>
    <text x="201" y="163">WI-FI ACCESS</text>
    <path d="M150 186h102" stroke="var(--border-strong)" stroke-width="5"/>
  </g>
  <g transform="rotate(7 370 155)">
    <path class="network-node core" d="M280 108h188v29a13 13 0 0 0 0 26v40H280v-40a13 13 0 0 0 0-26Z"/>
    <path class="network-line" stroke-dasharray="3 5" d="M411 119v72"/>
    <text x="346" y="139">VOUCHER</text>
    <path d="M304 157h80m-80 13h56m-56 14h68" stroke="var(--border-strong)" stroke-width="4"/>
    <path d="M429 131h21v21h-21zm0 32h8v8h-8zm13 0h8v20h-8zm-13 13h8v7h-8z" fill="var(--accent)"/>
  </g>`);
