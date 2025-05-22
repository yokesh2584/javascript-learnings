// ! Regular Expressions (RegEx)
// ? What is it?
// A RegEx is a special sequence of characters that helps match patterns in strings. It's like giving JavaScript a magnifying glass to find, validate, or replace text!

// ? What it does:
// Pattern matching
// String searching & replacing
// Input validation (emails, passwords, etc.)

// ? How to use:
const str = "yokesh";
const strPattern = /yokesh/;
console.log(strPattern.test(str)); // true

const email = "yokesh@gmail.com"; // /^\S+@\S+\.\S+$/
const emailPattern = /^\S+@\S+\.\S+$/;
console.log(emailPattern.test(email));

// ? Useful RegEx snippets:
// /\d/        // any digit
// /\w/        // any word character (a-z, A-Z, 0-9, _)
// /\s/        // any whitespace
// /^abc/      // string starts with abc
// /abc$/      // string ends with abc
// /[^a-z]/gi  // not a-z, case-insensitive
