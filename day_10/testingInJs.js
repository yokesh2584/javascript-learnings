// ! Testing in JavaScript:

// ? What is Testing in JavaScript?
// Testing in JavaScript is the process of writing code that checks whether other pieces of your code (like functions, components, etc.) work as expected. It helps catch bugs early, make code more reliable, and gives confidence when making changes.

// ? Why Testing Matters:
// Ensures your code works correctly
// Prevents future bugs when you add new features
// Makes refactoring safer
// Helps you write cleaner and modular code
// Increases developer confidence

// ? Types of Testing in JavaScript:
// Unit Testing: Testing small individual pieces like functions.
// Integration Testing: Testing how different modules or systems work together.
// End-to-End (E2E) Testing: Simulating real user interactions in a full app (e.g., clicking buttons, submitting forms).

// ? Common Testing Libraries:
// Jest (for unit/integration testing)
// Cypress / Playwright (for E2E testing)
// React Testing Library (for React components)

// ! Unit Testing Basics:
// ? What is Unit Testing?
// Unit testing is the process of testing individual units of code, usually functions or small modules, in isolation—meaning, we test them without depending on other parts of the application.

// * For example:
// If we have a function like:
function add(a, b) {
  return a + b;
}
// We write a unit test to make sure add(2, 3) returns 5.

// * Goals of Unit Testing:
// Verify that each function behaves correctly.
// Catch bugs early before code is pushed to production.
// Enable confident refactoring of code.

// * Common Unit Testing Tools:
// Jest (most popular, beginner-friendly, widely used in JS/React)
// Mocha + Chai (flexible and modular)
// Vitest (similar to Jest, faster for modern frameworks)
