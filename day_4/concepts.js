// ! Template Literals
// ? What are they?
// *A cleaner, more expressive way to create strings — especially when combining variables or writing multi-line strings.

// * Features:
// Use backticks(``) instead of quotes.
// Use ${...} to inject variables or even expressions directly.
// Supports multi-line strings without "\n".
const name = "Yokesh";
const greet = () =>
  console.log(`Hi, I am ${name}. Welcome to the World of JavaScript`);
greet();

const multiLines = `This is line one,
this is line two,
this is line three.`;
console.log(multiLines);

// ! Default Parameters
// ? What are they?
// *They allow you to set default values for function parameters if none are provided.

// without default parameters:
function greets(name) {
  const name = name || "guest";
  console.log(`Hi, ${name}`);
}
greets(); // Hi, guest.
greets("Yokesh"); // Hi, Yokesh.

// with default parameters:
function greetings(name = "Guest") {
  console.log(`Hey there, hello ${name}!`);
}
greetings(); // Hey there, hello Guest!
greetings("Yokesh"); // Hey there, hello Yokesh!

// ! ES6 Modules
// ? What Are ES6 Modules?
// Modules in JavaScript let you split your code into multiple files.
// Each file can export what it wants to share and import what it needs.

// * This helps with:
//      Organizing code better
//      Avoiding repetition
//      Sharing logic across files

// ! Set
// ? What is a Set?
// A Set is like a magical bag that only holds unique values. If you try to add a duplicate, it’ll smile sweetly and ignore you.

// * Features:
// Only stores unique values.
// Values can be of any type.
// Maintains insertion order.

// * Common Methods:
// => add(value): Adds a value
// => has(value): if the value exists
// => delete(value):	Removes a value
// => clear(): Removes all values
// => size: Number of values in the set

const fruits = new Set();
fruits.add("apple"); // add
fruits.add("banana"); // add
fruits.add("mango"); // add
console.log(fruits);
fruits.delete("banana"); // delete
console.log(fruits);
fruits.forEach((fruit) => console.log(`${fruit}`)); // forEach method but different from array method.
console.log(`Does fruits has a mango? ${fruits.has("mango")}`); // has
console.log("Fruits set's size:", fruits.size); // size

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.clear(); // clear
console.log(fruits);

// ! Map
// A Map is like a poetic ledger, storing key-value pairs—but unlike objects,
// any type can be a key: strings, numbers, objects, functions!

// * Features:
// Keys can be any type.
// Maintains insertion order.
// Easy to iterate and manage.

// * Common Methods:
// => set(key, value): Adds or updates a key-value pair
// => get(key): Retrieves the value by key
// => has(key): Checks if a key exists
// => delete(key): Deletes a key-value pair
// => clear(): Removes all entries
// => size: Number of entries in the map

const user = new Map();
user.set("name", "Yokesh"); // add
user.set("age", 20); // adding key-value pair
user.set(1, "one"); // add key-value pair
console.log(user);
console.log(user.get("name")); // get value of key "name"
console.log(user.has("age")); // checks, does user has "age" key
console.log(user.size); // user's size
user.delete(1); // delete key 1 and its value
console.log(user);

for (const [key] of user) {
  console.log(`${user.get(key)}`);
}

// ! Try, Catch, Finally and Throw
// => try:	Test a block of code for errors
// => catch:	Handle errors that occur in the try block
// => finally:	Execute code after try/catch, regardless of outcome
// => throw:	Create your own error when something goes wrong

// ? Common Real-Life Scenarios:
// => Parsing API responses (where data might be malformed)
// => Working with user input (which might be unexpected)
// => File or network operations
// => Custom errors in functions

try {
  const add = 10 + unknownValue;
  console.log(add);
} catch (error) {
  console.error("Error caught:", error.message);
}

// ! Asynchronous JavaScript
// ? Promises
// A Promise is like a sealed scroll: it promises to deliver something in the future.
const promise = new Promise((resolve, reject) => {
  let isOkay = false; // Usually an async task runs here
  if (isOkay) {
    resolve("Fetched date from an API");
  } else {
    reject("Couldn't fetch date from an API");
  }
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));

// ? Async/await
// When a function is marked async, it returns a promise automatically.
// Inside an async function, you can pause time using await.
// Sometimes an async task may fail and to overcome that issue use "try-catch" method to stop the code break.
async function getUser(userId = 1) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
getUser(1);
