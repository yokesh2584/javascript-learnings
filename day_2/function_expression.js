// TODO: Function Expression.

// ! 1. Create a function expression sayHello that prints "Hello!"
const sayHello = function () {
  // Function is declared and stored in the variable.
  console.log("Hello!");
};
sayHello();

// ! 2. Create a function expression cube(n) that returns n³
const cube = function (n) {
  // Function takes parameter as n to calculate the cubic value of it.
  return n ** 3;
};
console.log(cube(3));

// ! 3. Create a function getFirstChar(str) that returns first character
const getFirstChar = function (str) {
  // Function takes string as a parameter.
  return str.charAt(0); // This returns first characater of the string.
};
console.log(getFirstChar("Hello"));

// ! 4. Write a function to return sum of two numbers
const sum = function (a, b) {
  //  Function takes two parameters.
  return a + b; // This return the sum of the two number passes in the parameters.
};
console.log(sum(5, 10));

// ! 5. Write a function to check if number is divisible by 3
const divisibleByThree = function (num) {
  // Takes number as a parameter.
  return num % 3 === 0; // Returns true or false based on the remainder of the division.
};
console.log(divisibleByThree(9));
console.log(divisibleByThree(13));
