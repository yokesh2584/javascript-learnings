// TODO: Scope.

// !: 1. Create a global variable and access it from a function.
let global = "This is a global variable"; // Global variable.
function globalVariable() {
  console.log(global); // Accessed global variable inside of a function.
}
globalVariable();

// !: 2. Create a local variable inside a function and try to access it outside.
function localVariable() {
  let local = "This is a local variable"; // Local variable.
  return;
}
localVariable();
console.log(local); // Can't access local variable outside of that function.

// !: 3. Use let inside an if block and test it outside.
if (true) {
  let ifBlockVariable = "Variable from if block"; // Local scoped variable declared inside of an if block.
}
console.log(ifBlockVariable); // Can't access outside of that if block.

// !: 4. Use var inside a for loop — does it leak?
for (let i = 1; i < 2; i++) {
  var forLoopVar = "Variable from for loop."; // Variable declared with var keyword can be accessed anywhere.
}
console.log(forLoopVar); // Can access it, even outside the for loop.

// !: 5. Write a function with a block inside it (like an if) — declare variables using all three (var, let, const) and observe their visibility.
function observe() {
  if (true) {
    let varOne = "Variable with let keyword";
    const varTwo = "Variable with const keyword";
    var varThree = "Variable with var keyword"; 
    // This variable is functional-scoped but can access only inside this observe() function.
    // This tricks lies in the execution context of the javascript.
    // When the observe() executed, JS creates a execution context separately for this function 
    // So the 'varThree' variable will only stored inside of that execution context memory.
    // After the function get executed that execution context will be removed from the call stack.
    // So we cannot access this 'varThree' variable outside of this function.
    // * Understand the execution context of JS to get the better point of view of this trick.

    console.log(varOne); // Can be accessed here.
    console.log(varTwo); // Can be accessed here.
    console.log(varThree); // Can be accessed here.
  }
  console.log(varOne); // Can't be accessed outside if block.
  console.log(varTwo); // Can't be accessed outside if block.
  console.log(varThree); // Can be accessed here too.
}
console.log(varOne); // Can't be accessed outside if block.
console.log(varTwo); // Can't be accessed outside if block.
console.log(varThree); // Can't be accessed outside that function.

observe();
