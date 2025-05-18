// ! 1. Global scope
// console.log(this); // In browser -> Window object
// * When a script runs globally (not inside any function or object),
// * the engine binds 'this' to the global object (window in browsers, global in Node.js).

// ! 2. Inside a regular function
// function show(){
//     console.log(this); // In browser -> still refers to the window object.
// }
// show();
// * If a function is called without a object context, 'this' points to the global object(in non-strict mode).

// ? In strict mode
// "use strict";
// function show(){
//     console.log(this); // this would be undefined.
// }
// show();

// ! 3. Inside an Object Method
const user = {
  name: "Yokesh",
  greet: function () {
    console.log(`Hello ${this.name}`); // In this context, 'this' keyword refers to the object 'user'.
  },
};
user.greet();

// ! 4. Inside Arrow functions
const team = {
  name: "Code Ninjas",
  members: ["Yokesh", "Chat"],
  intro: function () {
    this.members.forEach((member) => {
      console.log(`${member} is in team ${this.name}`);
    });
  },
};
team.intro();
// This works because arrow function inherits 'this' from 'intro' method.

// ! 5. Manual Binding (call, apply & bind)
function greet(city) {
  console.log(`Hi! I am ${this.name} from ${city}`);
}

const person = { name: "Yokesh" };

greet.call(person, "Kanchipuram"); // invokes immediately with "this = obj"
greet.apply(person, ["Kanchipuram"]); // like 'call', but with array arguments.

const newGreet = greet.bind(person, "Kanchipuram"); // This returns a new function that binds forever with the 'obj'.
newGreet();

// ! 6. Constructor Functions and Classes
// * Functions:
function UserFunc(name) {
  this.name = name;
}
const user1 = new UserFunc("Yokesh");
console.log(user1.name);

// * Classes:
class User {
  constructor(name) {
    this.name = name;
  }
  intro() {
    console.log(`Hi, ${this.name}`);
  }
}
const newUser = new User("Yokesh");
newUser.intro();
