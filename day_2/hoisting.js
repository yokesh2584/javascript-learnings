// ! 1. Function declarations
greet(); // Works because functions declarations are fully hoisted.
function greet() {
  console.log("Hello!");
}

// ! 2. Function expression
greet2(); // greet2 is actually a variable holding the value of the function, and it's not the function itself!
const greet2 = function () {
  console.log("Hello, again!");
};

// ! 3. var hoisting
console.log(varHoist); // Hoisted and gives undefined
var varHoist = "Hoisted with var";

// ! 4. let and const hoisting
console.log(letHoist); // Cannot access until the value gets initialized.
console.log(constHoist); // Cannot access until the value gets initialized.

let letHoist = "Temporal Dead Zone";
const constHoist = "Also TDZ";
