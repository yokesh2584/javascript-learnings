const reverseString = require("./reverseString.js");

test('reverse "hello" to "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('reverse "Yokesh" to "hsekoY"', () => {
  expect(reverseString("Yokesh")).toBe("hsekoY");
});

test('reverse "Ammu" to "ummA"', () => {
  expect(reverseString("Ammu")).toBe("ummA");
});

test("reverse empty string", () => {
  expect(reverseString("")).toBe("");
});
