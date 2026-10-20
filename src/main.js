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
