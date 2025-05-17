// TODO: Anonymous Functions.
// Anonymous functions only accessible when we call it in a callback functions or used like function expression(stored in a variable).

// ! 1. Assign an anonymous function to variable logMsg that logs "Anonymous magic!"
const logMsg = function () {
  console.log("Anonymous magic!");
};
logMsg();

// ! 2. Create a variable addTen with an anonymous function that adds 10 to input
const addTen = function (n) {
  return n + 10;
};
console.log(addTen(10));
console.log(addTen(50));
console.log(addTen(100));

// ! 3. Use an anonymous function inside setTimeout() that logs a message after 1 second
const delayTimer = function () {
  setTimeout(() => console.log("Delivered with delay ⏰."), 1000);
};
delayTimer();

// ! 4. Assign an anonymous function to variable squareRoot that returns square root
const squareRoot = function (n) {
  return Math.sqrt(n);
};
console.log(squareRoot(9));
console.log(squareRoot(16));
console.log(squareRoot(25));
console.log(squareRoot(36));
console.log(squareRoot(64));

// ! 5. Create an array of numbers and use forEach() with an anonymous function to log each number
const array = [1, 2, 3, 4, 5];
array.forEach((ele) => console.log(ele));
