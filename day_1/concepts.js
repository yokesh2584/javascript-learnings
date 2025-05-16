// Variable declarations using keywords =>
// var:
var myName = "Yokesh";
// 'var' keyword takes the variable to the top of the code and stores value as 'undefined' before the code gets executed.
// After the code executed the real value of the variable replace the 'undefined' value in the memory.

// const:
const myAge = 20;
//'const' keyword only allows to access the variable after it gets declared & initialized.

// let
let AmIDev = true;
// 'let' keyword allows to access the variable after it gets declared.
// 'let' keyword will store 'undefined' as a value until we initialize some value to it.

// Data types =>
// string:
let strData = "This is a string.";
console.log(`Value: ${strData} & The data type: ${typeof strData}`);

// number:
let num = 20;
console.log(`Value: ${num} & The data type: ${typeof num}`);

// boolean:
let isTrue = true;
console.log(`Value: ${isTrue} & The data type: ${typeof isTrue}`);

// null:
let value = null; // We are explicitly setting an empty value to the variable.
console.log(`Value: ${value} & The data type: ${typeof value}`);

// undefined:
let x; // We declared some variable but not initialized some values to it.
let y = undefined; // We can also mention undefined like this to a variable.
console.log(`Value: ${x} & The data type: ${x}`);

// object:
const person = {
  name: "Yokesh", // Here name is a Key, "Yokesh" is a value.
  age: 20, // Here age is a Key, 20 is a value.
  isDev: true, // Here isDev is a Key, true is a value.
}; // Object is a "Key-Value" pair
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isDev);

// array:
const array = [1, 2, 3, 4, 5];
// An array is an object which is a used to store an ordered collection of data.
// In JavaScript, array can hold different types of data such as string, number, boolean, objects, etc.,
console.log(array);
console.log(array.length); // Finding the length of the array using length property of an array.
console.log(array[0]); // Accessing an element using starting index of an array.
console.log(array[2]); // Accessing an element using the specific index of an array.
console.log(array[array.length - 1]); // Accessing an element using last index of an array.
console.log(array.push(6), array); // Adding an element at the end of an array.
console.log(array.unshift(0), array); // Adding an element at the start of an array.
console.log(array.pop(), array); // Removing an element from the end of an array.
console.log(array.shift(), array); // Removing an element from the start of an array.

// Type coercion or Data type conversion =>
// Converting a number into a string.
let numValue = 20; // This is a number type variable.
console.log(numValue, typeof numValue);
let strValue = String(numValue); // This is converted into a string type variable.
console.log(strValue, typeof strValue);

// Operators =>
// Arithmetic:
let a = 1; // Assigning a value to a variable using "=" operator.
let b = 2;
console.log(a + b); // Adding a variables using "+" operator.
console.log(a - b); // Subtracting a variables using "-" operator.
console.log(a * b); // Multiplying a variables using "*" operator.
console.log(b / a); // Dividing a variables using "/" operator.
console.log(b % a); // Getting a remainder from the division of two variables using "%" operator.
console.log(b ** b); // Performing an exponentiation of a variables using "**" operator.
console.log(++a); // Incrementing a variable using "++" operator.
console.log(--b); // Decrementing a variable using "++" operator.

// Comparision:
let v1 = 10;
let v2 = 15;
let v3 = 15;
let v4 = "10";

console.log(v1 == v4); // "=="[loose equality], it only checks values, so both having 10 then it must returns true.
console.log(v1 != v2); // "!="[not equal to], it checks the values, so both v1 & v2 are not equal then it returns true.
console.log(v1 === v4); // "==="[strict equality], it checks both the value and its data type, so v1 is a number & v4 is a string then it must returns false.
console.log(v1 !== v4); // "!=="[strictly not equal to], it checks both the value and its data type are not equal, so v1 is a number & v4 is a string then it must returns true.
console.log(v2 > v1); // ">"[greater than], it checks the value greater than the other, so in this case it returns true.
console.log(v1 < v2); // "<"[smaller than], it checks the value smaller than the other, so in this case it returns true.

// Logical:
let l1 = true;
let l2 = true;
let l3 = false;

console.log(l1 && l2); // "&&" checks both the values are true, if true means return true, if anyone is false, then will return false.
console.log(l1 || l3); // "||" checks if any one of the value is true, if yes then returns true, if both are false then will return false.

// Conditionals =>
// if, else:
let var1 = 5;
let var2 = 10;

if (var1 > var2) {
  // Checks if var1 is greater than var2 or not.
  console.log("Var1 is greater.");
} else if (var1 == var2) {
  // Checks if var1 and var2 are equal.
  console.log("Var1 & var2 are equal.");
} else if (var1 < var2) {
  // Checks if var2 is greater than var1 or not.
  console.log("Var2 is greater.");
} else {
  // Returns value if no if conditions worked with the logics.
  console.log("Variables not defined.");
}

// Ternary:
let tr1 = 50;
let tr2 = 100;

console.log(tr1 > tr2 ? tr1 : tr2); // Checks the condition first, if true returns first value or else returns second one.

// Loops =>
// For loop:
let i;
for (i = 1; i <= 10; i++) {
  // First sets index for to start the loop(i = 1),
  // then provides condition(i <= 10) to run the loop until condition breaks, and
  // (i++) increment the index(i) for the each loop.
  console.log(i);
}

// While:
let w = 1;

while (w <= 5) {
  // Runs the loop until the condition gets true.
  console.log(w);
  w++; // Increment the (w) variable for each loop.
}

// For-each:
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  // This methods only works in arrays.
  // It iterate through the array & return each element for the array.
  console.log(val * 2);
});
