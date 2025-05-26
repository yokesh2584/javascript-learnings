const { add, sub, isEven } = require("./math.js");

test("add 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("sub 5 + 2 to equal 3", () => {
  expect(sub(5, 2)).toBe(3);
});

test("4 is even", () => {
  expect(isEven(4)).toBe(true);
});
test("5 is not even", () => {
  expect(isEven(5)).toBe(false);
});
test("15 is not even", () => {
  expect(isEven(15)).toBe(false);
});
test("-4 is even", () => {
  expect(isEven(-4)).toBe(true);
});
test("0 is even", () => {
  expect(isEven(0)).toBe(true);
});
