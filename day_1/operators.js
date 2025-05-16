// ! => 1. Compare two numbers using == and ===
let num1 = 10;
let num2 = 10;
console.log(num1 == num2);
// It only checks value not the data type, so it will return true.
console.log(num1 === num2);
// It checks both value and data type, num1 & num2 is number, so it will return true.

// ! => 2. Compare a number and a string that look alike (10 and "10")
let number = 10;
let string = "10";
console.log(number == string);
// It only checks value not the data type, so it will return true.
console.log(number === string);
// It checks both value and data type, number is number type & string is a string type, so it will return false.

// ! => 3. Use != and !== to understand their difference.
console.log(number != string);
// This will only checks the values are not equal, not the data type,
// so both number & string have 10, so it returns false.
console.log(number !== string);
// This will only checks both the values & data types are not equal,
// so both number & string have 10 but different data types, so it returns true.

// ! => 4. Create three boolean variables and use &&, ||, ! operators on them.
let bool1 = true;
let bool2 = true;
let bool3 = false;
let bool4 = false;

// * &&
console.log(bool1 && bool2);
// This checks both values are true, so in this both are true that returns true.
console.log(bool1 && bool3);
// This checks both values are true, so in this bool1 is true but bool3 is false that returns false.

// * ||
console.log(bool1 || bool3);
// This checks at least any one value is true, if yes means it will return true.
console.log(bool3 || bool4);
// In this condition both values are false, so it will return false.

// * !
console.log(!bool1);
console.log(!bool4);
// This operator will flip the value between true or false. If value is true then it will change it into false.

// ! => 5. Use logical operators in an if-statement (e.g., age eligibility check).
let age = 20;

if (age > 60) {
  // Condition to check the age is greater then 60.
  console.log("You are too old for this criteria.");
} else if (age >= 18 && age <= 60) {
  // Condition to check the age is in between 18 and 60.
  console.log("You are eligible for this criteria.");
} else if (age < 18 && age >= 0) {
  // Condition to check the age is less then 18 and greater than 0.
  console.log("You are too young for this criteria.");
} else {
  // Or else the age must be incorrect, so this will work in that case.
  console.log("Please enter your correct age.");
}
