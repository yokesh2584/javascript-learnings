// TODO: JavaScript Functions.

// ? What is a function?
// Function is a reusable block of code that performs a specific tasks.

// * 1. A normal function:
function greet() {
  // function with name.
  console.log("Hello, coder!");
}
greet();

// * 2. Function declaration (having parameters):
function add(a, b) {
  // A named function with parameter(a & b).
  return a + b;
}
console.log(add(2, 3));

// * 3. Function expression:
const subtract = function (a, b) {
  // A function expression is stored in a variable.
  return a - b;
};
console.log(subtract(5, 3));

// * 4. Arrow function (ES6+):
const multiply = (a, b) => a * b; // In ES6+, function written in one-liner using arrow functions.
console.log(multiply(4, 5));

const hello = () => "Hello, coder."; // With no parameter, we can just simply use empty paranthesis.
console.log(hello());

// * 5. Return & console.log:
const square = (x) => {
  return x ** 2; // This will return the output of the function to the caller.
};
console.log(square(5)); // console.log will only print the value in the console.

// * 6. Function Scope:
function showScope() {
  let scope = "This is inside of a function"; // Only accessible inside this function.
  console.log(scope);
}
showScope();
console.log(scope); // We cannot access the variable that present inside of a function.

// * 7. Anonymous function:
const hi = function () {
  // There is no name after the function keyword, so this is known as anonymous function.
  // But the function's output value will be stored in the variable.
  console.log("Hi, there!");
};
hi();

// TODO: Scope
// ? What is scope in JS?
// Scope determines the visibility and accessibility of variables in different parts of our code.

// ? Types of scopes:
// * Global Scope:
// Variables declared outside of any function or block.
// It can be accessed anywhere in the codes.

// * Functional/Local Scope:
// Variables declared inside of any function.
// It can only be accessed inside of that function.

// * Block Scope:
// Variables declared with 'let' or 'const' inside of an curly braces '{}'.
// It can only be accessed inside of that block '{}'.

// ? Important Note:
// var is function-scoped. So can be accessed anywhere even if we declared it inside of any function or block.
// let and const are block-scoped. So these can only be accessed inside of that certain block of code.

// ? Global and Local Scope example:
let name = "Yokesh"; // Global variable, can be accessed anywhere.

function logName() {
  let mission = "Learn JavaScript"; // Local scope, accessed only in this function.
  console.log(name, mission); // name & mission accessed in this function.
}
logName();

console.log(`Name: ${name}`); // name can be accessed here too.
console.log(`Mission: ${mission}`); // But mission can't be accessed here.

// ? Block Scope example:
{
  let message = "Inside Block";
  let mood = "Excited";
  var action = "var leaks message out."; // This can be accessed anywhere even outside this block.
  console.log(message); // Can be accessed inside in the same block of code.
  console.log(mood); // Can be accessed inside in the same block of code.
}

console.log(action); // Can print the variable outside of that block because of var keyword.
console.log(message); // Can't be accessed outside of that block.
console.log(mood); // Can't be accessed outside of that block.

// TODO: Hoisting
// ? What is hoisting in JavaScript?
// Hoisting is JavaScript's default behaviour of moving declarations to the top of their scope(script or functions).
// But the declarations only hoisting, not get initialized.
// And it is actually taking the variables and store them in a "memory of the execution context".
// In this memory of the execution context variable with the var keyword get initialized with special value called'undefined'.
// But for the keywords 'let' and 'const', they can't be initialized with 'undefined' and be called it as "Temporal Dead Zone(TDZ)".
// So by this trick, we can access the variable with 'var' keyword and it gives only 'undefined',
// but for the 'let' and 'const' we can't access because it doesn't get initialized until the exact declaration of code get executed.

// * Code example

console.log(a); // Will be undefined.
console.log(b); // Cannot access 'b' before initialization
console.log(c); // Cannot access 'c' before initialization

var a = 5;
let b = 10;
const c = 15;

console.log(a); // prints the output '5'.
console.log(b); // prints the output '10'.
console.log(c); // prints the output '15'.
