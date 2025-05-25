// ! Performance Optimization — Minimizing Reflows & Repaints
// ? What are Reflows and Repaints?
// Think of the browser as a magical artist —
// When you change something on your page, it may need to repaint (change colors, styles) or even reflow (recalculate layout and geometry).

// Reflow is the heavier process.
// Repaint just changes visuals, but reflow recalculates where things go.

// * Common Triggers for Reflow:
// Changing element dimensions (height, width)
// Modifying font sizes
// Adding/removing DOM elements
// Changing styles that affect layout (like display, margin, padding)
// Accessing layout properties like offsetHeight, getBoundingClientRect can force reflow

// * Optimization Tips:
// ? Avoid changing layout in multiple steps
// ❌ Bad
element.style.width = "100px";
element.style.height = "100px";

// ✅ Better
element.style.cssText = "width: 100px; height: 100px;";

// ? Use documentFragment for multiple insertions
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
