// ! Timers (setTimeout & setInterval)
// ? What is it?
// JavaScript gives us timers to schedule code to run after a delay or repeatedly at intervals.

// ? What it does:
// setTimeout: runs once after a delay
// setInterval: runs repeatedly every X ms

// ? How to use:
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

let count = 0;
const timer = setInterval(() => {
  count++;
  console.log(`Interval #${count}`);
  if (count === 3) clearInterval(timer); // stop after 3 runs
}, 1000);

// * Always remember clearTimeout() and clearInterval() to stop timers when needed.
