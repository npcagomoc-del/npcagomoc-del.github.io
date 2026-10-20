import { escape, tags, bullets } from "./html.mjs";
import { icons, diagrams, svg } from "./graphics.mjs";
import { renderResume } from "./resume.mjs";
function projectCard(p, index) {
  return `<article class="work-card ${index === 0 ? "featured" : p.wide ? "infrastructure-feature" : ""}">${diagrams[p.id] || ""}<div class="work-copy"><p class="eyebrow">${String(index + 1).padStart(2, "0")} / ${escape(p.category)}</p><h3>${escape(p.title)}</h3><p>${escape(p.description)}</p>${tags(p.tools)}<details class="project-details"><summary>Read project scope <span class="plus" aria-hidden="true">+</span></summary><p>${escape(p.scope)}</p>${p.note ? `<p class="small muted">${escape(p.note)}</p>` : ""}</details>${p.link ? `<a class="text-link project-link" href="${escape(p.link)}" target="_blank" rel="noopener noreferrer">${escape(p.linkLabel)} ${icons.arrow}</a>` : ""}</div></article>`;
}
const credentialDates = (c) =>
  [
    c.issued ? `Issued ${c.issued}` : "",
    c.expires ? `Expires ${c.expires}` : "",
  ]
    .filter(Boolean)
    .join(" · ");
const brandIcon = (key) => key ? '<img class="brand-icon" src="assets/brands/' + escape(key) + (['hikvision','zabbix','zkteco','google'].includes(key) ? '.png' : '.svg') + '" width="36" height="36" alt="" loading="lazy">' : '';
function portraitTechnology() {
  const nodes = [
    ["server", "Servers", '<rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6.5h.01M8 17.5h.01M12 6.5h5m-5 11h5"/>'],
    ["network", "Networks", '<rect x="8" y="2" width="8" height="6" rx="1"/><rect x="2" y="16" width="7" height="6" rx="1"/><rect x="15" y="16" width="7" height="6" rx="1"/><path d="M12 8v4m-6 4v-4h12v4"/>'],
    ["chip", "Systems", '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><rect x="10" y="10" width="4" height="4"/>'],
    ["code", "Automation", '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>'],
  ];
  return `<svg class="scene-circuit" viewBox="0 0 440 440" aria-hidden="true"><path d="M58 120h42l32 32M350 66v58l-34 34M382 292h-54l-28-28M120 382v-54l30-30"/><circle cx="58" cy="120" r="4"/><circle cx="350" cy="66" r="4"/><circle cx="382" cy="292" r="4"/><circle cx="120" cy="382" r="4"/></svg>${[1, 2, 3].map(n => `<div class="orbit-plane orbit-plane-${n}" aria-hidden="true"><div class="orbit-track"><span class="orbit-signal"></span></div></div>`).join("")}${nodes.map(([key, label, path]) => `<div class="tech-node tech-node-${key}" aria-hidden="true"><div class="tech-node-face">${svg(path)}<span>${label}</span></div></div>`).join("")}`;
}
export function render(data) {
  const milestones = [...data.experience, { title: data.education.degree, company: data.education.school, period: data.education.period, location: "", bullets: [data.education.description, data.education.thesis ? `Group thesis: ${data.education.thesis}.` : ""].filter(Boolean) }]
    .sort((a, b) => Number(a.period.match(/\d{4}/)?.[0]) - Number(b.period.match(/\d{4}/)?.[0]));
  const sections = {
    ...icons,
    monogram: escape(data.initials.toLowerCase()),
    year: escape(data.year),
    portraitTech: portraitTechnology(),
    roadmapNavigation: `<nav class="roadmap-nav" aria-label="Career milestones">${milestones.map((entry, index) => `<a href="#milestone-${index + 1}"><span class="roadmap-step" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="roadmap-stop">${escape(entry.period.match(/\d{4}/)?.[0] || "")}<span>${escape(entry.company)}</span></span>${icons.arrowDown}</a>`).join("")}</nav>`,
    credentialStrip: data.certifications
      .filter((c) => c.featured)
      .map((c) => `<span>${brandIcon(c.icon)}${escape(c.stripLabel || c.short)}</span>`)
      .join(""),
    brands: data.brands.map(b => '<span class="brand-item">' + brandIcon(b.icon) + '<span>' + escape(b.name) + '</span></span>').join(''),
    community: data.community.map(c => '<aside class="community-note">' + (c.image ? '<img class="community-art" src="' + escape(c.image) + '" width="1080" height="1080" alt="' + escape(c.imageAlt) + '" loading="lazy">' : '') + '<p class="eyebrow">COMMUNITY & LEARNING</p><div><h3>' + escape(c.title) + '</h3><p>' + escape(c.detail) + '</p></div></aside>').join(''),
    headline: `${escape(data.headline[0])}<br><span class="hero-accent">${escape(data.headline[1])}</span>`,
    projects: `<div class="work-grid">${data.projects.map(projectCard).join("")}</div>`,
    skills: data.skills
      .map(
        (s) =>
          `<article class="skill-group"><span class="skill-number">${escape(s.id)}</span><h3>${escape(s.title)}</h3><p>${escape(s.description)}</p>${tags(s.tools)}</article>`,
      )
      .join(""),
    experience: milestones
      .map(
        (e, index) =>
          `<article class="experience-row" id="milestone-${index + 1}" tabindex="-1" aria-labelledby="milestone-heading-${index + 1}"><div class="experience-period"><span class="timeline-dot" aria-hidden="true"></span><span class="milestone-index" aria-hidden="true">${String(index + 1).padStart(2, "0")} / ${String(milestones.length).padStart(2, "0")}</span><span class="experience-year" aria-hidden="true">${escape(e.period.match(/\d{4}/)?.[0] || "")}</span><p>${escape(e.period)}</p>${e.location ? `<span>${escape(e.location)}</span>` : ""}</div><div class="experience-content"><h3 id="milestone-heading-${index + 1}">${escape(e.title)}</h3><p class="company">${e.website ? `<a href="${escape(e.website)}" target="_blank" rel="noopener noreferrer">${escape(e.company)}</a>` : escape(e.company)}</p>${e.bullets.length ? bullets(e.bullets) : ""}</div></article>`,
      )
      .join(""),
    certifications: data.certifications
      .filter((c) => c.featured)
      .map(
        (c) =>
          `<article class="cert-card"><div class="cert-top"><span class="cert-mark">${brandIcon(c.icon)}${escape(c.short)}</span><span class="cert-type">${escape(c.type)}</span></div><h3>${escape(c.name)}</h3><p>${escape(c.issuer)}</p>${credentialDates(c) ? `<p class="cert-date">${escape(credentialDates(c))}</p>` : ""}</article>`,
      )
      .join(""),
    training: data.certifications
      .filter((c) => !c.featured)
      .map(
        (c) =>
          `<article><p class="eyebrow">${escape(c.type)}</p><h3 class="training-heading">${brandIcon(c.icon)}${escape(c.name)}</h3><p>${escape(c.issuer)} · ${escape(c.issued)}</p></article>`,
      )
      .join(""),
    resume: renderResume(data),
    metadata: metadata(data),
  };
  for (const key of [
    "name",
    "greetingName",
    "initials",
    "role",
    "location",
    "availability",
    "intro",
    "learningNote",
    "email",
    "linkedin",
    "github",
  ])
    sections[key] = escape(data[key]);
  return sections;
}
function metadata(d) {
  const title = `${d.name} | Systems, Networks & Technology Operations`;
  const description = d.summary;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.name,
    url: d.siteUrl,
    jobTitle: d.role,
    sameAs: [d.linkedin, d.github],
    knowsAbout: d.skills.flatMap((s) => s.tools),
  };
  return `<title>${escape(title)}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${escape(d.siteUrl)}"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(d.siteUrl)}"><meta property="og:image" content="${escape(d.siteUrl)}assets/social-card.png"><meta property="og:image:alt" content="${escape(d.name)} — ${escape(d.role)}"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`;
}
