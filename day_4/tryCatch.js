// ! Try, Catch
// ? 1. Safe Division Function
// Write a function safeDivide(a, b) that:
// Divides a by b.
// If b is 0, it should throw an error: "Cannot divide by zero!"
// Use try...catch to call the function and log either the result or the error message.

function safeDivide(a, b = 1) {
  if (b === 0) throw new Error("Error: You can't divide by zero.");
  return a / b;
}

function callDivide(x, y) {
  try {
    console.log(safeDivide(x, y));
  } catch (err) {
    console.error(err.message);
  }
}
callDivide(5, 1);
callDivide(5, 0);

// ? 2. You have a string in JSON format. Write a function parseJSON(str) that:
// Tries to parse the string using JSON.parse.
// If parsing is successful, logs the value of name.
// If parsing fails, catches the error and logs "Invalid JSON format".

function parseJSON(str) {
  const parseObj = JSON.parse(str);
  return parseObj;
}
const str1 = `{"name": "Yokesh"}`;
const str2 = `{name: "Yokesh"}`;
const str3 = `{"age": 50}`;

function callParse(str) {
  try {
    const data = parseJSON(str);
    if ("name" in data) console.log(`Name: ${data.name}`);
    else console.error(`Key "name" not found in data`);
  } catch (e) {
    console.error("Invalid JSON Format");
  }
}

callParse(str1);
callParse(str2);
callParse(str3);
