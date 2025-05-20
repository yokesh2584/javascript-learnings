// ! DOM — The Soul of the Web Page
// ? 1. What is the DOM?
// Let’s begin by truly understanding what the DOM (Document Object Model) is — not just the term, but its soul.

// * Definition:
// The DOM is a programmatic interface for HTML and XML documents.
// It represents the page as a tree structure where each node is an object that represents a part of the page.

// * Think of it like:
// The HTML file is the source.
// The DOM is the live object model created from that source.
// JavaScript can then read, change, add, or remove anything in that live structure.

// * Why is DOM so Powerful?
// Because JavaScript can:
// => Find elements
// => Change styles
// => Update text
// => Add/Remove elements
// => React to user actions

// TODO: Selecting elements:
//*|         Method           |      Returns           |  Selector Type   |
// | ------------------------ | ---------------------- | ---------------- |
// | `getElementById`         | Single Element         | ID (`#id`)       |
// | `getElementsByClassName` | HTMLCollection         | Class (`.class`) |
// | `getElementsByTagName`   | HTMLCollection         | Tag (`div`, `p`) |
// | `querySelector`          | First Match            | Any CSS selector |
// | `querySelectorAll`       | NodeList (all matches) | Any CSS selector |

// TODO: Changing Content and Styles

// textContent: Replaces all text inside an element.
// ? Example: document.getElementById("heading").textContent = "This is a heading text!";

// innerText: Like textContent, but respects CSS styles (e.g., display: none). // ?
// ? Example: document.querySelector(".note").innerText = "Visible text only!";

// innerHTML: Can add or change the HTML structure within the element.
// ? Example: document.querySelector(".box").innerHTML = "<strong>Shining Star 🌟</strong>";

// You can directly manipulate CSS through .style property.
// ? Example:
const btn = document.querySelector("button");
btn.style.backgroundColor = "purple";
btn.style.color = "white";
btn.style.padding = "10px 20px";

// classList: A treasure chest of methods to manipulate CSS classes.
// ? Example:
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
element.classList.contains("hero"); // returns true/false

// TODO: Event Handling — The Pulse of Interaction
// ? Why Events Matter
// Events are the whispers and roars of the user:
// => A click of a button
// => A hover over a link
// => A keypress in an input
// => By listening for these signals and responding with our code, we craft experiences that feel alive.

// ! addEventListener() :
// * element.addEventListener(eventType, callbackFunction, options);
// => eventType: a string, e.g. "click", "mouseover", "keydown".
// => callbackFunction: the function to run when that event fires.
// => options (optional): { once: true }, { capture: true }, or { passive: true }.
// * Example:
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

// ! The Event Object — Details of the Moment
// Every callback receives an event object that holds precious details:
// * Example:
element.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // the element clicked
  console.log(event.clientX, event.clientY); // cursor coords
});

// ! Removing Listeners — Letting Go
// To stop listening, we use removeEventListener.
// *Note: the callback reference must be the same:

// * Example:
function greet() {
  console.log("Hi!");
}
button.addEventListener("click", greet);
// later…
button.removeEventListener("click", greet);

// ! One-Time Listeners — Capturing Moments
// If you only need the event once, use the { once: true } option:

// * Example:
button.addEventListener(
  "click",
  () => {
    console.log("This only runs once!");
  },
  { once: true }
);

// ! Event Propagation — Bubbling & Capturing
// * When you click a nested element, the event travels:
// => Capturing phase: from the document root down to the target
// => Target phase: the actual element
// => Bubbling phase: back up from the target to the root
// * By default, addEventListener listens in the bubbling phase. To listen in capturing, pass { capture: true }.

//?| Methods           | What It Does                                |
// | ----------------- | ------------------------------------------- |
// | Bubbling          | Events move **upward** from child to parent |
// | Capturing         | Events move **downward** to the target      |
// | stopPropagation() | Stops further bubbling or capturing         |
// | Styling on event  | Real-time visual feedback on propagation    |

// * Example:
parentDiv.addEventListener("click", () => console.log("Parent!"), {
  capture: true,
});
childDiv.addEventListener("click", () => console.log("Child!"));

// ! Preventing Default Behavior
// Forms, links, keys — many elements have built-in behaviors.
// Use event.preventDefault() to pause them:

// * Example:
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link's default navigation was lovingly halted.");
});
