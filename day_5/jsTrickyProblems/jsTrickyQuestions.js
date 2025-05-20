// ? Interview based tricky questions and Real-world based scenario questions.

// ! Question 1: Type Coercion:
// TODO: What’s the output of these lines? Why?

// * You’re using the + operator, and if either side is a string (or can be coerced to a string) — JavaScript treats it as string concatenation.

// * In JavaScript:
// => + operator:
// => If either operand is a string, it converts both to strings and concatenates them.
// => If both are numbers, it adds.
// => If objects (including arrays) are involved, JavaScript coerces them to strings using .toString() or .valueOf().

// ? Values of an empty object and an array:
console.log({}); // returns empty object in both browser(I tried both firefox & chrome) & node environment.
console.log([]); // returns empty array in both browser(I tried both firefox & chrome) & node environment.

console.log([] + []);
// * Both are empty arrays. Arrays are objects, and when coerced to string:
// [].toString() => ''
// So [] + [], becomes '' + ''  => ''
// Output: ''

console.log([] + {}); // ?
// In this one, [].toString() => '' & {}.toString() => "[object Object]"
// So [] + {}, becomes '' + "[object Object]" => "[object Object]"
// Output: "[object Object]"

console.log({} + []); // ?
// In this one same like above, {}.toString() => "[object Object]" & [].toString() => ''
// So {} + [] , becomes "[object Object]" + ''  => "[object Object]"
// Output: "[object Object]"
// * Note: if {} being a code block, not an object.
// * Note: => Then +[] is treated as a unary operator applied to an array: +[] === 0
// * Note: So, this could return output as : 0

console.log({} + {}); // ?
// In this case, both are objects, so {}.toString() => "[object Object]"
// So {} + {}, becomes "[object Object]" + "[object Object]" => "[object Object][object Object]"

// ! Question 2.  Equality Comparison Magic:
// TODO: What’s the output of these lines? Why?

// * Note: Loost equality (==) will try to coerces the variables to validate the value of both.
// * Note: Strict equality (===) won't try to coerces because, it validates both type and value.

console.log(false == "0");
// Here, '0' is a string, gets coerced to number → becomes 0
// false also coerces to number => becomes 0
// So, 0 == 0 → true

console.log(false === "0");
// But here, false is a boolean & '0' is a string
// So false === '0' => false

console.log(null == undefined);
// Here, null and undefined are loosely equal only to each other and to nothing else.
// So, null == undefined => true.
// * Note: null == 0 => false & undefined == 0 => false

console.log(null === undefined);
// But here, null is of type "object" & undefined if of type "undefined"
// So, null === undefined => false.

console.log([] == false);
// [] is an object → gets coerced to a primitive ('')
// false → gets coerced to 0
// Then, '' → coerced to 0
// So, [] == false => true

// console.log([] === false);
// But here, [] is an object & false is a boolean
// So, [] === false => false

// ! Question 3.  Function Scope and Hoisting

// ? What will this log?
// 1?
// 2?
// undefined?
// Or an error?

var a = 1; // This is a global scope and its value will be stored in global execution context's memory
function foo() {
  // when the function gets executed it hoist the variable (var a) inside of this function to the local execution context's memory with undefined.
  console.log(a);
  // when this log line executes, it search for the 'a' inside of this function's  local execution context's memory.
  // It will find variable 'a' with undefined and just prints it out.
  var a = 2;
}
foo();

// * Output: undefined

// ! Question 4: Function & Scope Battle
// ? What will be the output?
var b = 10;
(function () {
  console.log(b);
  var b = 20;
})();

// How codes gets executed in this function:
var b = 10;
(function () {
  var b; // 👈 hoisted, b is declared here inside function, but it's undefined initially
  console.log(b); // 👉 prints undefined, not the outer b = 10
  b = 20;
})();

// ? Here we used (IIFE - Immediate Invoked Function Expression)
// * (function(){...})();
// Wrap up the function(without name) with parenthesis and afterwards call that function using () immediately.

// ! Question 5:
// What will be the output of the following code?

var x = 1;
if (function f() {}) {
  // In JavaScript, functions are always objects and objects are always truthy.
  // So here, (function f() {}) is a object and it is truthy. So the if condition will run.
  x += typeof f;
  // But here, the f can't access the function scope from the condition. So here f is just a undeclared variable.
  // Hence the typeof that undeclared f will be undefined.

  // * So the increment of (x += typeof f) will be look like this: (x = 1 + undefined).
  // * This concatenates and gives "1undefined";
}
console.log(x); // * So here the output is: "1undefined"
