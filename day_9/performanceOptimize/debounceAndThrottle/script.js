// ! Debouncing
// * Debouncing delays the function call until after a certain period of inactivity.

// !Throttling
// * Throttling ensures that a function runs at most once every set interval, even if triggered many times.

const input = document.getElementById("input");
const defaultText = document.getElementById("default");
const debounce = document.getElementById("debounce");
const throttle = document.getElementById("throttle");

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updatedDebounce(e.target.value);
  updatedThrottle(e.target.value);
});

function debounceInput(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updatedDebounce = debounceInput(function () {
  // debounce.textContent = text;
  increment(debounce);
}, 500);

function throttleInput(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeout = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeout, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeout, delay);
  };
}

const updatedThrottle = throttleInput(function () {
  // throttle.textContent = text;
  increment(throttle);
}, 200);

document.addEventListener("mousemove", (e) => {
  increment(defaultText);
  updatedDebounce();
  updatedThrottle();
});

function increment(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
