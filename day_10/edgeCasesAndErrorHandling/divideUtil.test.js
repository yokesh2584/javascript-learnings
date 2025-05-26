const divide = require("./divideUtil.js");

test("Division of 10 by 2 is 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Division of -20 by 2 is -10", () => {
  expect(divide(-20, 2)).toBe(-10);
});

test("should throw error on divide by 0", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});

test("should throw error if missing arguments", () => {
  expect(() => divide()).toThrow("Missing inputs");
});

test("should throw error if input is not a number", () => {
  expect(() => divide("a", 2)).toThrow("Input is not a Number");
});

test("Divide with only one argument: divide(5) returns 5", () => {
  expect(divide(5)).toBe(5);
});

test("Divide 0 by 5 should return 0", () => {
  expect(divide(0, 5)).toBe(0);
});

test("Passing undefined as second argument should return 5", () => {
  expect(divide(5, undefined)).toBe(5);
});

test("Divide 5.5 by 2 should return 2.75", () => {
  expect(divide(5.5, 2)).toBeCloseTo(2.75);
});

test("Passing null as second argument should throw Invalid input", () => {
  expect(() => divide(5, null)).toThrow("Invalid input");
});

test("Passing object as input should throw Invalid input", () => {
  expect(() => divide({}, 2)).toThrow("Input is not a Number");
});

test("Passing array as input should throw Invalid input", () => {
  expect(() => divide([10], 2)).toThrow("Input is not a Number");
});

test("Passing NaN should throw Invalid input", () => {
  expect(() => divide(NaN, 2)).toThrow("Input is not a Number");
});
