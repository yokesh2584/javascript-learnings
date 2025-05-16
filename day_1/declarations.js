// console.log(`Name: ${name}`); // 'var' keyword takes the variable name and store 'undefined' value before the variable's value executed in the code.
// console.log(`Age: ${age}`); // We cannot access variable with 'let' keyword before initialization
// console.log(`Gender: ${gender}`); // We cannot access variable with 'const' keyword before initialization


var name = "Yokesh"; // Now variable will store "Yokesh" as value for this line of code get executed.
console.log(`Name: ${name}`);

let age = 20; // Now we can access variable with 'let' keyword after it get initialized.
console.log(`Age: ${age}`);

age = 21; // We can also re-initialize the variable that declared using 'let' with the new value.
console.log(`Age: ${age}`);

const gender = "male"; // We can now access the variable declared using 'const', but cannot change it's value like 'let' keyword does!
console.log(`Gender: ${gender}`);

gender = "female"; // We cannot assign new value to the variable with 'const' keyword.
console.log(`Gender: ${gender}`);