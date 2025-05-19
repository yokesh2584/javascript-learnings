// * Note: File extensions (.js) are needed when using modules in ES6,
// * especially in Vite, React, or modern JS environments.

import { add, square } from "./namedExport.js";
import welcome from "./defaultExport.js";

console.log(add(2, 3));
console.log(square(4));
console.log(welcome("Thorfin"));
