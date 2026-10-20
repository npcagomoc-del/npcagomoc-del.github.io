import { escape, tags, bullets } from "./html.mjs";
import { icons, diagrams } from "./graphics.mjs";
import { renderResume } from "./resume.mjs";
function projectCard(p, index) {
  return `<article class="work-card ${index === 0 ? "featured" : ""}">${diagrams[p.id] || ""}<div class="work-copy"><p class="eyebrow">${String(index + 1).padStart(2, "0")} / ${escape(p.category)}</p><h3>${escape(p.title)}</h3><p>${escape(p.description)}</p>${tags(p.tools)}<details class="project-details"><summary>Read project scope <span class="plus" aria-hidden="true">+</span></summary><p>${escape(p.scope)}</p><p class="small muted">${escape(p.note)}</p></details>${p.link ? `<a class="text-link project-link" href="${escape(p.link)}" target="_blank" rel="noopener noreferrer">${escape(p.linkLabel)} ${icons.arrow}</a>` : ""}</div></article>`;
}
const credentialDates = (c) =>
  [
    c.issued ? `Issued ${c.issued}` : "",
    c.expires ? `Expires ${c.expires}` : "",
  ]
    .filter(Boolean)
    .join(" · ");
export function render(data) {
  const sections = {
    ...icons,
    headline: `${escape(data.headline[0])}<br><span class="hero-accent">${escape(data.headline[1])}</span>`,
    projects: `<div class="work-grid">${data.projects.map(projectCard).join("")}</div>`,
    skills: data.skills
      .map(
        (s) =>
          `<article class="skill-group"><span class="skill-number">${escape(s.id)}</span><h3>${escape(s.title)}</h3><p>${escape(s.description)}</p>${tags(s.tools)}</article>`,
      )
      .join(""),
    experience: data.experience
      .map(
        (e) =>
          `<article class="experience-row"><div class="experience-period"><span class="timeline-dot" aria-hidden="true"></span><p>${escape(e.period)}</p><span>${escape(e.location)}</span></div><div><h3>${escape(e.title)}</h3><p class="company">${escape(e.company)}</p>${bullets(e.bullets)}</div></article>`,
      )
      .join(""),
    certifications: data.certifications
      .filter((c) => c.featured)
      .map(
        (c) =>
          `<article class="cert-card"><div class="cert-top"><span class="cert-mark">${escape(c.short)}</span><span class="cert-type">${escape(c.type)}</span></div><h3>${escape(c.name)}</h3><p>${escape(c.issuer)}</p>${credentialDates(c) ? `<p class="cert-date">${escape(credentialDates(c))}</p>` : ""}</article>`,
      )
      .join(""),
    training: data.certifications
      .filter((c) => !c.featured)
      .map(
        (c) =>
          `<article><p class="eyebrow">${escape(c.type)}</p><h3>${escape(c.name)}</h3><p>${escape(c.issuer)} · ${escape(c.issued)}</p></article>`,
      )
      .join(""),
    resume: renderResume(data),
    metadata: metadata(data),
  };
  for (const key of [
    "name",
    "initials",
    "role",
    "location",
    "availability",
    "intro",
    "email",
    "linkedin",
    "github",
  ])
    sections[key] = escape(data[key]);
  return sections;
}
function metadata(d) {
  const title = `${d.name} | Systems, Networks & Technology Operations`;
  const description = `${d.name}: ICT Administration Supervisor and Database & Server Administrator. CCNA, AWS, Azure and ISC2 CC. Systems, networking, security and AI-assisted development.`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.name,
    url: d.siteUrl,
    jobTitle: d.role,
    sameAs: [d.linkedin, d.github],
    knowsAbout: d.skills.flatMap((s) => s.tools),
  };
  return `<title>${escape(title)}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${escape(d.siteUrl)}"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(d.siteUrl)}"><meta property="og:image" content="${escape(d.siteUrl)}assets/social-card.png"><meta property="og:image:alt" content="Noe Cagomoc — Systems, Networks and Technology Operations"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\u003c")}</script>`;
}
