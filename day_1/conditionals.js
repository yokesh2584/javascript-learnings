// ! => 1. Create a number and write an if-else to check if it’s positive or negative.
let num = 10;

if (num > 0) {
  // Checks the number is positive by using condition that num is greater than 0.
  console.log("Number is positive");
} else if (num < 0) {
  // Checks the number is negative by using condition that num is smaller than 0.
  console.log("Number is negative.");
} else {
  // Or else the num will be zero.
  console.log("Number is zero.");
}

// ! => 2. Write an if-else-if ladder to check for grade categories based on marks.
let marks = 100;

if (marks >= 90 && marks <= 100) {
  // Checks the marks if it in between 90 and 100
  console.log("A+ - Grade");
} else if (marks >= 80 && marks < 90) {
  // Checks the marks if it in between 80 and 89
  console.log("A - Grade");
} else if (marks >= 70 && marks < 80) {
  // Checks the marks if it in between 70 and 79
  console.log("B+ - Grade");
} else if (marks >= 60 && marks < 70) {
  // Checks the marks if it in between 60 and 69
  console.log("B -Grade");
} else if (marks >= 50 && marks < 60) {
  // Checks the marks if it in between 50 and 59
  console.log("C+ - Grade");
} else if (marks >= 40 && marks < 50) {
  // Checks the marks if it in between 40 and 49
  console.log("C - Grade");
} else if (marks >= 0 && marks < 40) {
  // Checks the marks if it in between 0 and 39
  console.log("D - Grade");
} else {
  // If the mark doesn't match with any conditions, the marks must be incorrect.
  console.log("Mark is incorrect.");
}

// * Writing this using switch statement:
switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("A+ - Grade");
    break;
  case marks >= 80 && marks < 90:
    console.log("A - Grade");
    break;
  case marks >= 70 && marks < 80:
    console.log("B+ - Grade");
    break;
  case marks >= 60 && marks < 70:
    console.log("B - Grade");
    break;
  case marks >= 50 && marks < 60:
    console.log("C+ - Grade");
    break;
  case marks >= 40 && marks < 50:
    console.log("C - Grade");
    break;
  case marks >= 0 && marks < 40:
    console.log("D - Grade");
    break;
  default:
    console.log("Mark is incorrect.");
    break;
}

// ! => 3. Use a ternary operator to find the bigger of two numbers.
let num1 = 5;
let num2 = 10;
console.log(
  num1 > num2 ? `Number1 (${num1}) is bigger` : `Number2 (${num2}) is bigger`
);
// Checks num1 is greater than num2,
// if it is true then it will return first condition, or it will return second condition.

// ! => 4. Ternary to check if a user is logged in (isLoggedIn) or not.
let isLoggedIn = true;
console.log(isLoggedIn ? "User is logged in" : "User is not logged in");
// Checks isLoggedIn is true or false.
// If it is true, it will return user logged in or else it will return user not logged in.

// ! => 5. Create a temperature value and log a message:
let temp = 32;

if (temp > 30) {
  // Checks if the temperature is higher than 30.
  console.log("Its hot!");
} else if (temp < 10) {
  // Checks if the temperature is lower than 10.
  console.log("Its cold.");
} else {
  // Or else it will return this.
  console.log("Its a pleasant whether.");
}
