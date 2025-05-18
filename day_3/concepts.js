// TODO: Closures:

// ? What is a Closure?
// In JavaScript, a closure is created when a function "remembers" the variables from its lexical scope even when the function is executed outside that scope.

// * Definition:
// A closure is a combination of a function and the lexical environment within which that function was declared.

function outerFunction() {
  let outVar = "This variable is from outer function";

  function innerFunction() {
    console.log(outVar); // This inner function is going to have a reference of the variable from the outer function.
  }

  return innerFunction; // This will return the inner function with its all reference of the lexical environment.
}

const myClosure = outerFunction();
myClosure(); // By calling this closure function, it returns the  inner function's console.log value.

// TODO: 'this' keyword:

// ? What is 'this' keyword in JavaScript ?
// 'this' is a special keyword in JavaScript that refers to the object that is executing the current function.

// TODO: Callbacks:

// ? What is a Callback?
// Callback is a function passed as an argument to another function, which is then invoked(called back) later inside that outer function.

// * Basic Synchronous Callback:
function hello(name, callback) {
  console.log(`Hello ${name}!`);
  callback(name);
}
function bye(name) {
  console.log(`Hey ${name}! Goodbye, see you soon.`);
}
hello("Yokesh", bye);

// TODO: Higher Order Functions:

// ? What is a Higher Order Funtions?
// Higher Order Functions are the functions takes another function as an argument or returns a function -- or can do both.

// * Basic example:
function processNumber(num, operation) {
  return operation(num);
}
function double(n) {
  return n * 2;
}
console.log(processNumber(20, double));

// * Returning a function(Higher-order):
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(10));

const triple = multiplier(3);
console.log(triple(10));

// TODO: Array Methods:

// * => .forEach() – Just for side effects (like printing).
// * => .map() – For transforming each element.
// * => .filter() – For keeping only what we need.
// * => .reduce() – For compressing an array to a single value (like sums).
// * => .find(), .findIndex() – For finding needles in our array haystack.
// * => .some() / .every() – For checking conditions.

// TODO: Object Methods:

// * =>  Object.keys(), Object.values(), Object.entries() – For looping over properties.
// * =>  Object.assign() – For cloning or merging.
// * =>  Object.hasOwnProperty() – For checking if a key exists.
// * =>  Object.freeze() & Object.seal() – To lock or restrict objects.

// TODO: Destructuring:

// ? 🔹 What is Destructuring?
// Destructuring is a shorthand syntax that allows you to unpack values from arrays or extract properties from objects into distinct variables.

// * =>  Destructuring objects and arrays.
// * =>  Setting default values.
// * =>  Renaming variables during destructure.
// * =>  Nested destructuring.

// TODO: Spread & Rest Operators:

// * =>  Spread: Clone or merge arrays/objects.
// * =>  Rest: Capture remaining elements or arguments.
