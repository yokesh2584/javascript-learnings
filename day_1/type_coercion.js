// ! => Basic string, number type conversions:
let number1 = 100; // This is now a number data type.
console.log(number1, typeof number1);

let number2 = String(number1); // This is now converted into a string data type.
console.log(number2, typeof number2);

let number3 = 100.50
let intNum2 = parseInt(number3); // This will convert the data type into an Integer(without decimal values).
console.log(intNum2, typeof intNum2);

let floatNum2 = parseFloat(number3); // This will convert the data type into an float(with decimal values).
console.log(floatNum2, typeof floatNum2);

// ! => ["5" + 2] & ["5" - 2] :
console.log("5" + 2); 
// The value will be "52". In JavaScript "+" operator also used to concat the strings.
// So, JavaScript identifies any string it will convert other data types into strings and concat all of them.
// By that, "5" is a string, so it converts 2 into a string and concat both of them and gives "52" a string value.

console.log("5" - 2);
// The value will be 3. Because, in JavaScript "-" operator only used to subtract the numbers.
// So, JavaScript will convert the "5"(string value) into 5(number value) and subtract [5 - 2].
// This will gives us with the value of 3.

// ! => boolean:
let isDev = true;
// As for the boolean, it holds only two values true or false.
// As for the true, it has a value of 1 -> which means true in binary.
// As for the false, it has a value of 0 -> which means false in binary.

let numDevValue = Number(isDev);
// We are converting the boolean into the Number.
// This will get the binary value of true that is 1 and store it in the variable.

console.log(`${numDevValue}, ${typeof numDevValue}`);

// * Converting string into Boolean value:
console.log(Boolean("")); // This is an empty string, so it will return false.
console.log(Boolean("0")); // This one is non-empty string, so it will return true.
console.log(Boolean("hello")); // This one is non-empty string as well, so it will also return true.