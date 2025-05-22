// ! Date and Time in JavaScript
// ? What is it?
// The Date object allows you to work with dates and times, get current timestamps, and manipulate time-based values.

// ? What it does:
// Get current date/time
// Format, parse, and manipulate time
// Calculate time differences

// ? How to use:
const now = new Date();
console.log(now); // Full date-time
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0-based (0 = Jan)
console.log(now.getDate()); // Day of month
console.log(now.getDay()); // Day of week (0 = Sunday)

const timestamp = now.getTime(); // ms since Jan 1, 1970
console.log(new Date(timestamp)); // Convert back to Date

// ? Custom formatting:
const date = new Date();
const formatted = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;
console.log(formatted); // e.g. 22/5/2025
