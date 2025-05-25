// ! Debounce — “Wait until they stop doing it”
// ? 1. Auto-Saving Form Data
// When a user types into a form, we don’t want to save on every keystroke — that’d crash the backend! We wait until they stop typing.
const saveForm = debounce(function () {
  console.log("Form auto-saved!");
}, 2000);

document.querySelector("#form").addEventListener("input", saveForm);
// * Real-World Use: Google Docs-style "autosave"

// ? 2. Window Resize Events
// Imagine re-calculating layout while resizing — CPU cries 😭. Instead, we debounce the callback so it runs after resizing stops.
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resizing done! Recalculating layout...");
  }, 500)
);
// * Real-World Use: Adjusting responsive layouts or canvas redraws.

// ? 3. Validation Feedback (on typing)
// When checking a username/email, wait until the user stops typing.
const checkUsername = debounce(async function (username) {
  const isAvailable = await fetch(`/check-username?user=${username}`);
  console.log("Checking username availability...");
}, 700);

document.getElementById("username").addEventListener("input", (e) => {
  checkUsername(e.target.value);
});
// * Real-World Use: Show "username available ✅" feedback.

// ! Throttle — “Do it, but only every once in a while”
// ? 1. Infinite Scroll / Lazy Loading
// When user scrolls, check the position only every 500ms, not on every pixel shift.
window.addEventListener(
  "scroll",
  throttle(() => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if (nearBottom) {
      console.log("Load more items...");
    }
  }, 500)
);
// * Real-World Use: Pinterest-style endless scrolling.

// ? 2. Drag & Drop Position Tracking
// While dragging, limit how often you update element’s position for smoother experience.
const dragElement = document.getElementById("box");

dragElement.addEventListener(
  "drag",
  throttle((e) => {
    console.log("Dragging at", e.clientX, e.clientY);
  }, 100)
);
// * Real-World Use: Game elements, drag handles, sliders.

// ? 3. Analytics Tracking (Scroll depth, Clicks)
// Imagine logging analytics every pixel the user scrolls. Disaster! Instead, throttle it.
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("User is scrolling...track event");
  }, 2000)
);
// * Real-World Use: Google Analytics, heatmaps.
