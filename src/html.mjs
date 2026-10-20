export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
export const tags = (tools) =>
  `<ul class="tags">${tools.map((t) => `<li>${escape(t)}</li>`).join("")}</ul>`;
export const bullets = (items) =>
  `<ul class="bullet-list">${items.map((t) => `<li>${escape(t)}</li>`).join("")}</ul>`;
