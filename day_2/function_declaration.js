// TODO: Function Declarations.

// ! 1. Write a function welcome() that prints "Welcome to JavaScript!".
function welcome() {
  // Function named welcome prints console message.
  console.log("Welcome to JavaScript!");
}
welcome(); // Function gets called when we using its name with paranthesis.

// ! 2. Write a function double(x) that returns x * 2.
function double(x) {
  // Function taking parameter as x for to calculate the value.
  return x * 2; // returns the double of x by multiplying with 2.
}
console.log(double(10)); // prints the returned value from the function double.
console.log(double(20));

// ! 3. Write a function isEven(num) that returns true if num is even.
function isEven(num) {
  // Function taking parameter as num for to check the number is even or not.
  return num % 2 === 0; // This checks the remainder of num divided by 2 is equal to zero or not.
}
console.log(isEven(2)); // 2 divided by 2 will gives remainder as 0, so it returns true.
console.log(isEven(3)); // 3 divided by 2 will gives remainder as 1, so it returns false.

// ! 4. Write a function calculateAge(yearOfBirth, monthOfBirth, dayOfBirth) that returns the age.
function calculateAge(yearOfBirth, monthOfBirth, dayOfBirth) {
  // Taking parameters for year, month & day of the birth date.
  let today = new Date(); // For to get current time.
  let birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth); // For to get birth date.
  // (monthOfBirth - 1) this is because months are 0 indexed in the in Date object.

  let age = today.getFullYear() - birthDate.getFullYear(); // This is for to get the age based on the year.

  const hasBirthPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  // This condition checks whether the birthday is passes or not for the current year.

  if (!hasBirthPassed) {
    // if the birthday hasn't passed yet, we will reduce the age by 1.
    age -= 1;
  }

  return age; // Then we will return the correct age.
}
console.log(calculateAge(2000, 1, 1)); // Prints the calculated age.

// ! 5. Write a function areaOfSquare(side) that returns area.
function areaOfSquare(side) {
  // function taking parameter as side for to calculate the area of the square.
  return side ** 2; // This returns the square value of the side that is area of the square.
}
console.log(areaOfSquare(10)); // This prints the output value of the function.
