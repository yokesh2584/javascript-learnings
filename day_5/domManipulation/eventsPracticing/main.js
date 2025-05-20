const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandparent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("BUBBLE -> Grandparent");
// });

// parent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("BUBBLE -> Parent");
// });

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("BUBBLE -> Child");
// });

// grandparent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("CAPTURE -> Grandparent");
// });

// grandparent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("CAPTURE -> Parent");
// });

// grandparent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("CAPTURE -> Child");
// });

grandparent.addEventListener("click", () => {
  grandparent.style.backgroundColor = "#d8bfd8";
}, { capture: false });

parent.addEventListener("click", () => {
  parent.style.backgroundColor = "#dda0dd";
}, { capture: true });

child.addEventListener("click", () => {
  child.style.backgroundColor = "#ee82ee";
});
