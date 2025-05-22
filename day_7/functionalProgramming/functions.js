// ! What is Functional Programming (FP)?
// Functional Programming is a declarative programming paradigm where computation is treated as
// the evaluation of mathematical functions and avoids changing-state and mutable data.

// TODO: 1. Pure Functions:
// A pure function is like a loyal heart — given the same input,
// it always returns the same output and causes no side effects.

// * Example:
// Not pure
let taxRate = 0.18;
function calculateTax(amount) {
  return amount * taxRate; // depends on external variable
}

// Pure version
function calculatePureTax(amount, rate) {
  return amount * rate; // depends only on input variable
}

// TODO: 2. Immutability:
// In FP, data is frozen like crystal — we don’t change it, we create new versions of it.

// * Example:
// Mutating
const arr = [1, 2, 3];
arr.push(4); // modifying original array

// Immutable
const newArr = [...arr, 4]; // original untouched

// TODO: 3. First-Class & Higher-Order Functions:
// In FP, functions are like precious gifts — you can pass them around, return them, store them.

// * Example:
// Passing function as argument
function greet(name) {
  return `Hello, ${name}`;
}

function greetLoudly(fn, name) {
  return fn(name).toUpperCase();
}

console.log(greetLoudly(greet, "Yokesh")); // HELLO, YOKESH

// TODO: 4. Function Composition:
// Like composing music — small tunes become grand symphonies.

// * Example:
const trim = (str) => str.trim();
const toLower = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

// Compose functions
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((val, fn) => fn(val), x);

const transform = compose(wrapInDiv, toLower, trim);
console.log(transform("   this is a FUNCTION Composition   ")); // <div>this is a function composition</div>

// TODO: 5. Currying:
// Currying is slicing a multi-argument function into single-argument functions

// * Example:
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10

// ? You are building a functional data pipeline. Given an array of names with random spaces and cases, format them beautifully.
const names = ["  aRjun", "KriShNa  ", " radha ", "YOKESH"];

const strTrim = (str) => str.trim();
const strCasing = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const wrapStr = (str) => `<p>${str}</p>`;

const composeStr =
  (...fn) =>
  (val) =>
    fn.reduceRight((acc, fn) => fn(acc), val);

const transformString = composeStr(wrapStr, strCasing, strTrim);
const transformedString = names.map(transformString);
console.log(transformedString);

// ! 1. map Challenge:
// Task: You are given an array of lowercase book titles.
// Return a new array where each word in each title is capitalized.
const books = [
  "harry potter and the prisoner of azkaban",
  "to kill a mockingbird",
  "the lord of the rings",
];
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const capitalizeTitle = (title) => {
  return title.split(" ").map(capitalizeWord).join(" ");
};
const updatedBooks = books.map(capitalizeTitle);
console.log(updatedBooks);

// ! 2. filter Challenge:
// Task: From the given list of numbers, filter out all numbers that are either even or divisible by 5.
const numbers = [3, 10, 17, 20, 33, 40, 51, 60, 55];
const filteredNumbers = numbers.filter(
  (number) => number % 2 === 0 || number % 5 === 0
);
console.log(filteredNumbers);

// ! 3. reduce Challenge:
// Task: Given an array of transaction objects, calculate the net balance.
// Add up "credit" transactions
// Subtract "debit" transactions
const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 400 },
  { type: "debit", amount: 100 },
];
const netBalance = transactions.reduce(
  (acc, val) =>
    val.type === "credit" ? (acc += val.amount) : (acc -= val.amount),
  0
);
console.log(netBalance);
