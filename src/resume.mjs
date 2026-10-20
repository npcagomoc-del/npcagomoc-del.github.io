import { escape, bullets } from "./html.mjs";
import { icons } from "./graphics.mjs";
const displayUrl = (value) => {
  const url = new URL(value);
  const host = url.hostname.startsWith("www.")
    ? url.hostname.slice(4)
    : url.hostname;
  const path = url.pathname.endsWith("/")
    ? url.pathname.slice(0, -1)
    : url.pathname;
  return escape(host + path);
};
export function renderResume(d) {
  const experience = d.experience
    .map(
      (e) =>
        `<div class="resume-job"><h5>${escape(e.title)}</h5><p class="small muted">${e.website ? `<a href="${escape(e.website)}" target="_blank" rel="noopener noreferrer">${escape(e.company)}</a>` : escape(e.company)} · ${escape(e.period)}</p>${bullets(e.bullets)}</div>`,
    )
    .join("");
  const projects = d.projects
    .filter((p) => p.resume)
    .map(
      (p) =>
        `<p class="resume-project"><strong>${escape(p.id === "infrastructure" ? "Multi-site ICT infrastructure" : p.title)}</strong><br>${escape(p.resumeDescription || p.description)}${p.link ? ` <a href="${escape(p.link)}">Source code ${icons.arrow}</a>` : ""}</p>`,
    )
    .join("");
  const skills = d.skills
    .map(
      (s) =>
        `<p class="resume-skill"><strong>${escape(s.title)}</strong><br>${s.tools.map(escape).join(" · ")}</p>`,
    )
    .join("");
  const certs = d.certifications
    .filter((c) => c.featured)
    .map(
      (c) =>
        `<li><strong>${escape(c.name)}</strong><br><span class="muted">${escape(c.issuer)}${c.issued ? ` · ${escape(c.issued)}` : ""}</span></li>`,
    )
    .join("");
  return `<article class="resume-sheet" aria-label="${escape(d.name)} résumé"><header class="resume-top"><div><p class="eyebrow">PROFESSIONAL PROFILE</p><h3>${escape(d.name)}</h3><p>${escape(d.role)}</p></div><span class="resume-location">${escape(d.location)}</span></header><div class="resume-contacts"><a href="mailto:${escape(d.email)}">${escape(d.email)}</a><a href="${escape(d.linkedin)}">${displayUrl(d.linkedin)}</a><a href="${escape(d.github)}">${displayUrl(d.github)}</a></div><p class="resume-summary">${escape(d.summary)}</p><div class="resume-columns"><div><h4>Professional experience</h4>${experience}</div><div><h4>Certifications</h4><ul class="resume-cert-list">${certs}</ul><h4>Community</h4>${d.community.map((c) => `<p class="resume-community">${escape(c.title)} · Attendee</p>`).join("")}<h4>Education</h4><p><strong>${escape(d.education.degree)}</strong><br>${escape(d.education.school)}<br><span class="muted">${escape(d.education.period)}</span></p>${d.education.thesis ? `<p class="resume-thesis">Thesis: ${escape(d.education.thesis)}</p>` : ""}</div></div><div class="resume-continuation"><span>${escape(d.name)}</span><span>Projects & technical skills</span></div><div class="resume-columns resume-supplement"><div><h4>Projects</h4>${projects}</div><div><h4>Technical skills</h4>${skills}<h4>Additional training</h4><p>${d.certifications
    .filter((c) => !c.featured)
    .map((c) => escape(c.name))
    .join(
      " · ",
    )}</p></div></div></article>`;
}
