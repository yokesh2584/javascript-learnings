const factorial = require("./factorial.js");

test("Factorial of 0 is 1", () => {
  expect(factorial(0)).toBe(1);
});

test("Factorial of 2 is 2", () => {
  expect(factorial(2)).toBe(2);
});

test("Factorial of 5 is 720", () => {
  expect(factorial(5)).toBe(120);
});

test("Factorial of 7 is 5040", () => {
  expect(factorial(7)).toBe(5040);
});

test("Factorial of -5 is undefined", () => {
  expect(factorial(-5)).toBe(undefined);
});
