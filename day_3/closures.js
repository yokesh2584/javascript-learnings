// TODO: Closures

// ! 1. Data privacy / Encapsulation
// * Closures let us create a private variables that can't be accessed directly from outside.

function createCounter() {
  let count = 0;
  // "count" is private in this function, only accessible through the returned functions.

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // output: 1
counter.increment(); // output: 2
counter.reset(); // output: 0
counter.decrement(); // output: -1

// ! 2. Factory functions
// * We can also create customized function through closures.
function greetings(name) {
  return function (message) {
    return `Hello ${name}, ${message}`;
  };
}
const greet = greetings("Yokesh"); // Initialize the greetings function with parameter in a variable.
console.log(greet("Happy Coding!")); // Calling the function initialized variable and passing a parameter for returned inner function.

// ! 3. Event Listerners / Asynchronous Logic
// * Closures help keeps the variables alive during asynchronous operations(like setTimeout, setInterval, etc.,).
function delayMsg(name) {
  setTimeout(() => {
    // A function that set to run after certain seconds of delay.
    console.log(`Hello ${name}, this function delayed message delivery`);
    // "name" variable(argument) still referenced in this function even after the delayMsg() function executed.
  }, 3000);
}
delayMsg("Yokesh"); // Passing "Yokesh" as an argument to the "name" parameter.

// ! 4. Basic closure
function outer() {
  let name = "JavaScript";

  return function () {
    // function returned with the 'name' variable.
    return `I love ${name}`;
  };
}
const result = outer();
console.log(result()); // Prints the returned value from the inner function.

// ! 5. Secure password
function securePass() {
  let password = "Pass@321";

  return {
    getPassword: function () {
      // getting password through the getPassword() function.
      console.log(password);
    },
    updatePassword: function (newPass) {
      // Passing "new password" as a parameter to the function.
      password = newPass; // Changing old password with the "new password" from the argument.
      console.log(password);
    },
  };
}
const passFunc = securePass();
passFunc.getPassword();
passFunc.updatePassword("NewPass@000"); // passing new password as an argument.

// ! 6. Multiplier function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}
const multiply = multiplier(5); // Passing argument for 'x'
console.log(multiply(10)); // Passing argument for 'y'

// ! 7. Countdown timer
function timer(time) {
  return function () {
    let i = time;
    const interval = setInterval(() => {
      // Used setInterval method to log the time every 1 second interval.
      console.log(i);
      if (i-- === 0) clearInterval(interval);
      // If the next decrement value of i is zero, it will clear the Interval.
    }, 1000);
  };
}
const countdown = timer(5);
countdown();
