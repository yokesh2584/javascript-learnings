// TODO => 1. Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  // define i(index) to 1 for start & incrementing i by one for each looping until it reach 10.
  console.log(i); // printing i value in each loop.
}

// TODO => 2. Print even numbers between 1 to 20 using while
let num = 1;
while (num <= 20) {
  // It will loop again & again until num reach 20.
  if (num % 2 === 0) {
    // Checks if the num gives 0 remainder(using "%" operator) when divided by 2.
    console.log(num); // print the num that gives 0 remainder.
  }
  num++; // Incrementing the num value by one in each loop.
}

// TODO => 3. Use forEach to multiply each element in [2, 4, 6, 8] by 2
const elements = [2, 4, 6, 8]; // Defining an array of an elements.
elements.forEach((element) => {
  // Iterating each element of an array using forEach method.
  console.log(element * 2); // Multiplying each element by 2 when printing it.
});

// TODO => 4. Use for to print each character in a string (e.g. "Yokesh")
let string = "Yokesh"; // Intializing a string with the value "Yokesh".
for (i = 0; i <= string.length - 1; i++) {
  // Looping through the string from index 0 to last index of the string.
  console.log(string[i]); // Printing each letter of string using it's index.
}

// TODO => 5. Count down from 10 to 1 with a while loop
let count = 10; // Initializing a count as 10.
while (count >= 1) {
  // This will loop the statement until the count decremented to 1
  console.log(count);
  count--; // Decrementing the count by one in each loop.
}
