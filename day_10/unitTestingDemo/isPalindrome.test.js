const isPalindrome = require("./isPalindrome.js");

test('"madam" is a palindrome', () => {
  expect(isPalindrome("madam")).toBe(true);
});

test('"racecar" is a palindrome', () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test('"Yokesh" is not a palindrome', () => {
  expect(isPalindrome("Yokesh")).toBe(false);
});

test('"Ammu" is not a palindrome', () => {
  expect(isPalindrome("Ammu")).toBe(false);
});

test('"A man, a plan, a canal, Panama" is a palindrome', () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});
