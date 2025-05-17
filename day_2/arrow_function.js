// TODO: Arrow Functions.

// ! 1. Convert a function greet() to arrow syntax
const greet = () => "Hello, there!";
// An arrow function stores the output in the variable.
console.log(greet()); // Prints the string stored in the variable.

// ! 2. Arrow function multiply(a, b) → returns multiplication
const multiply = (a, b) => a * b;
// Arrow function takes two parameters and returns their multiplied value.
console.log(multiply(5, 3));
console.log(multiply(2, 15));
console.log(multiply(4, 8));

// ! 3. Arrow function isPositive(n) → true if positive
const isPositive = (n) => n > 0;
// Functions take a number parameter and checks whether it is greater than 0 or not and returns true or false based on that.
console.log(isPositive(1));
console.log(isPositive(-1));

// ! 4. Arrow function lengthOfWord(word) → returns word length
const lengthOfWord = (str) => str.length;
// Functions takes string as a parameter and returns the length(number of characters) of that string.
console.log(lengthOfWord("word"));
console.log(lengthOfWord("string"));
console.log(lengthOfWord("length"));

// ! 5. Arrow function getLastChar(str) → returns last character
const getLastChar = (str) => str.charAt(str.length - 1);
// Function takes string as a parameter  and returns last character of that string.
console.log(getLastChar("String"));
console.log(getLastChar("Yokesh"));
console.log(getLastChar("Character"));
