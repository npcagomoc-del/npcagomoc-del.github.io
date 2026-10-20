const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
function updateThemeLabel() {
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${root.dataset.theme === "dark" ? "light" : "dark"} theme`,
  );
}
updateThemeLabel();
themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("portfolio-theme", root.dataset.theme);
  } catch {
    /* The theme remains usable when storage is unavailable. */
  }
  updateThemeLabel();
});
themeQuery.addEventListener("change", () => {
  let preference = null;
  try {
    preference = localStorage.getItem("portfolio-theme");
  } catch {
    /* Use the device preference when storage is unavailable. */
  }
  if (!preference) {
    root.dataset.theme = themeQuery.matches ? "light" : "dark";
    updateThemeLabel();
  }
});
function closeMenu(returnFocus = false) {
  root.dataset.menuOpen = "false";
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  if (returnFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  root.dataset.menuOpen = String(open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && root.dataset.menuOpen === "true")
    closeMenu(true);
});
window
  .matchMedia("(min-width: 900px)")
  .addEventListener("change", () => closeMenu());
document
  .querySelector(".print-button")
  .addEventListener("click", () => window.print());

const motionToggle = document.querySelector(".motion-toggle");
function storedMotionPreference() {
  try {
    const preference = localStorage.getItem("portfolio-motion");
    return preference === "full" || preference === "reduced" ? preference : null;
  } catch {
    return null;
  }
}
let motionPreference = storedMotionPreference();
root.dataset.motion = motionPreference || "full";
function updateMotionLabel() {
  const enabled = root.dataset.motion === "full";
  if (motionToggle) {
    motionToggle.textContent = enabled ? "Reduce animations" : "Enable animations";
    motionToggle.setAttribute("aria-pressed", String(enabled));
  }
}
updateMotionLabel();
motionToggle?.addEventListener("click", () => {
  motionPreference = root.dataset.motion === "full" ? "reduced" : "full";
  root.dataset.motion = motionPreference;
  try {
    localStorage.setItem("portfolio-motion", motionPreference);
  } catch {
    root.dataset.motion = motionPreference;
  }
  updateMotionLabel();
  scheduleReadingPosition();
});
const hero = document.querySelector(".hero");
const techScene = document.querySelector(".tech-scene");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const roadmapLinks = [...document.querySelectorAll(".roadmap-nav a")];
const experienceList = document.querySelector(".experience-list");
const experienceRows = [...document.querySelectorAll(".experience-row")];
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')]
  .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
  .filter(({ section }) => section);
let timelineClip = null;
let timelineHead = null;
let timelineHeight = 0;
let timelineCenters = [];
let scrollFrame = 0;
let scenePointer = null;

function makeTimeline() {
  if (!experienceList) return;
  const checkpoints = [...experienceList.querySelectorAll(".timeline-dot")];
  if (!checkpoints.length) return;
  const bounds = experienceList.getBoundingClientRect();
  timelineHeight = bounds.height;
  timelineCenters = checkpoints.map((checkpoint) => {
    const rect = checkpoint.getBoundingClientRect();
    return { x: rect.left - bounds.left + rect.width / 2,
      y: rect.top - bounds.top + rect.height / 2 };
  });
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.classList.add("timeline-path");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  const first = timelineCenters[0];
  let curve = `M ${first.x} ${first.y}`;
  for (let index = 1; index < timelineCenters.length; index += 1) {
    const start = timelineCenters[index - 1];
    const end = timelineCenters[index];
    const middle = (start.y + end.y) / 2;
    curve += ` C ${start.x} ${middle}, ${end.x} ${middle}, ${end.x} ${end.y}`;
  }
  const path = document.createElementNS(namespace, "path");
  path.setAttribute("d", curve);
  const underlay = path.cloneNode();
  underlay.classList.add("timeline-underlay");
  const clip = document.createElementNS(namespace, "clipPath");
  clip.id = "career-progress-clip";
  clip.setAttribute("clipPathUnits", "userSpaceOnUse");
  timelineClip = document.createElementNS(namespace, "rect");
  timelineClip.setAttribute("width", String(bounds.width));
  timelineClip.setAttribute("height", String(bounds.height));
  clip.append(timelineClip);
  const progress = path.cloneNode();
  progress.classList.add("timeline-progress");
  progress.setAttribute("clip-path", "url(#career-progress-clip)");
  timelineHead = document.createElementNS(namespace, "g");
  timelineHead.classList.add("timeline-head");
  for (const radius of [11, 5]) {
    const dot = document.createElementNS(namespace, "circle");
    dot.setAttribute("r", String(radius));
    timelineHead.append(dot);
  }
  svg.append(clip, underlay, path, progress, timelineHead);
  experienceList.querySelector(".timeline-path")?.remove();
  experienceList.prepend(svg);
  experienceList.dataset.pathReady = "true";
  scheduleReadingPosition();
}

function pointAtReadingLine(position) {
  const first = timelineCenters[0];
  const last = timelineCenters[timelineCenters.length - 1];
  if (position <= first.y) return first;
  if (position >= last.y) return last;
  const index = timelineCenters.findIndex((point) => point.y >= position);
  const start = timelineCenters[index - 1];
  const end = timelineCenters[index];
  const middle = (start.y + end.y) / 2;
  let low = 0;
  let high = 1;
  for (let iteration = 0; iteration < 16; iteration += 1) {
    const t = (low + high) / 2;
    const inverse = 1 - t;
    const y = inverse ** 3 * start.y + 3 * inverse * t * middle + t ** 3 * end.y;
    if (y < position) low = t;
    else high = t;
  }
  const t = (low + high) / 2;
  return { x: start.x + (end.x - start.x) * (3 * t * t - 2 * t ** 3), y: position };
}

function updateReadingPosition() {
  scrollFrame = 0;
  const reducedMotion = root.dataset.motion !== "full";
  const readingLine = window.innerHeight * 0.48;
  let currentSection = null;
  for (const entry of sectionLinks) {
    if (entry.section.getBoundingClientRect().top <= readingLine) currentSection = entry;
  }
  const bounds = experienceList?.getBoundingClientRect();
  const heroBounds = hero?.getBoundingClientRect();
  const sceneBounds = techScene?.getBoundingClientRect();
  const rowBounds = experienceRows.map((row) => row.getBoundingClientRect());
  for (const entry of sectionLinks) {
    if (entry === currentSection) entry.link.setAttribute("aria-current", "location");
    else entry.link.removeAttribute("aria-current");
  }
  if (heroBounds) {
    const departure = reducedMotion ? 0 :
      Math.min(1, Math.max(0, (80 - heroBounds.top) / heroBounds.height));
    hero.style.setProperty("--hero-copy-y", `${-64 * departure}px`);
    hero.style.setProperty("--hero-portrait-y", `${-120 * departure}px`);
    hero.style.setProperty("--hero-portrait-scale", String(1 - 0.16 * departure));
    hero.style.setProperty("--hero-ring-turn", `${180 * departure}deg`);
    hero.style.setProperty("--hero-outer-turn", `${-120 * departure}deg`);
    hero.style.setProperty("--scene-scroll-x", `${12 * departure}deg`);
    hero.style.setProperty("--scene-scroll-y", `${18 * departure}deg`);
    const pointerX = !reducedMotion && scenePointer && sceneBounds ?
      Math.max(-1, Math.min(1, (scenePointer.x - sceneBounds.left) / sceneBounds.width * 2 - 1)) : 0;
    const pointerY = !reducedMotion && scenePointer && sceneBounds ?
      Math.max(-1, Math.min(1, (scenePointer.y - sceneBounds.top) / sceneBounds.height * 2 - 1)) : 0;
    hero.style.setProperty("--scene-tilt-x", `${-8 * pointerY}deg`);
    hero.style.setProperty("--scene-tilt-y", `${8 * pointerX}deg`);
  }
  if (!bounds || !timelineClip || !timelineHeight) return;
  const position = readingLine - bounds.top;
  const progress = reducedMotion ? 1 : Math.min(1, Math.max(0, position / timelineHeight));
  timelineClip.setAttribute("transform", `scale(1 ${progress})`);
  const head = pointAtReadingLine(position);
  timelineHead.setAttribute("transform", `translate(${head.x} ${head.y})`);
  timelineHead.style.display = reducedMotion || position < timelineCenters[0].y ||
    position > timelineCenters[timelineCenters.length - 1].y ? "none" : "";
  let current = -1;
  if (position >= 0 && position <= timelineHeight) {
    current = 0;
    timelineCenters.forEach((point, index) => {
      if (position >= point.y) current = index;
    });
  }
  experienceRows.forEach((row, index) => {
    row.dataset.current = String(index === current);
    row.dataset.reached = String(reducedMotion || position >= timelineCenters[index]?.y);
    const settle = reducedMotion ? 1 :
      Math.min(1, Math.max(0, (window.innerHeight * 0.92 - rowBounds[index].top) /
        (window.innerHeight * 0.46)));
    row.style.setProperty("--entry-shift", `${64 * (1 - settle)}px`);
    row.style.setProperty("--entry-slide", `${-48 * (1 - settle)}px`);
  });
  roadmapLinks.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  });
}

function scheduleReadingPosition() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateReadingPosition);
}
window.addEventListener("scroll", scheduleReadingPosition, { passive: true });
window.addEventListener("resize", scheduleReadingPosition);
for (const [index, link] of roadmapLinks.entries()) {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const milestone = experienceRows[index];
    if (!milestone) return;
    event.preventDefault();
    milestone.scrollIntoView({ block: "start", behavior: root.dataset.motion === "full" ? "smooth" : "instant" });
    milestone.focus({ preventScroll: true });
    history.replaceState(null, "", link.getAttribute("href"));
    scheduleReadingPosition();
  });
  link.addEventListener("keydown", (event) => {
    let destination = index;
    if (event.key === "ArrowRight") destination = (index + 1) % roadmapLinks.length;
    else if (event.key === "ArrowLeft") destination = (index - 1 + roadmapLinks.length) % roadmapLinks.length;
    else if (event.key === "Home") destination = 0;
    else if (event.key === "End") destination = roadmapLinks.length - 1;
    else return;
    event.preventDefault();
    roadmapLinks[destination].focus();
  });
}
if (hero && techScene) {
  hero.dataset.pageVisible = String(!document.hidden);
  document.addEventListener("visibilitychange", () => {
    hero.dataset.pageVisible = String(!document.hidden);
  });
  techScene.addEventListener("pointermove", (event) => {
    if (!finePointer.matches || root.dataset.motion !== "full") return;
    scenePointer = { x: event.clientX, y: event.clientY };
    scheduleReadingPosition();
  });
  techScene.addEventListener("pointerleave", () => {
    scenePointer = null;
    scheduleReadingPosition();
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      hero.dataset.sceneActive = String(entry.isIntersecting);
    }).observe(techScene);
  } else {
    hero.dataset.sceneActive = "true";
  }
}
if (experienceList && "ResizeObserver" in window) {
  new ResizeObserver(makeTimeline).observe(experienceList);
} else {
  let timelineFrame = 0;
  function scheduleTimeline() {
    if (timelineFrame) return;
    timelineFrame = requestAnimationFrame(() => {
      timelineFrame = 0;
      makeTimeline();
    });
  }
  window.addEventListener("resize", scheduleTimeline);
  document.fonts.ready.then(scheduleTimeline);
}

for (const strip of document.querySelectorAll(".brand-strip")) {
  const shell = document.createElement("div");
  shell.className = "brand-motion-shell";
  shell.dataset.paused = "false";
  shell.dataset.inView = "false";
  const track = document.createElement("div");
  track.className = "brand-track";
  track.append(...strip.children);
  const duplicate = track.cloneNode(true);
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.inert = true;
  const control = document.createElement("button");
  control.className = "brand-motion-control";
  control.type = "button";
  control.textContent = "Pause motion";
  control.setAttribute("aria-pressed", "false");
  control.addEventListener("click", () => {
    const paused = shell.dataset.paused !== "true";
    shell.dataset.paused = String(paused);
    control.setAttribute("aria-pressed", String(paused));
    control.textContent = paused ? "Resume motion" : "Pause motion";
  });
  strip.before(shell);
  strip.append(track, duplicate);
  shell.append(strip, control);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      shell.dataset.inView = String(entry.isIntersecting);
    }).observe(shell);
  } else {
    shell.dataset.inView = "true";
  }
}
scheduleReadingPosition();
