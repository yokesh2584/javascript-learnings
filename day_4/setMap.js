// TODO: Set
const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Output: { 1, 2, 3, 4 }
numbers.add(5);
console.log(numbers); // Output: { 1, 2, 3, 4, 5 }
numbers.delete(3);
console.log(numbers); // Output: { 1, 2, 4, 5 }
console.log(numbers.has(1)); // Output: true
console.log(numbers.size); // Output: 4

// TODO: Map
const userMap = new Map();
userMap.set("username", "coderYokesh");
userMap.set("loggedIn", true);

console.log(userMap.get("username")); // Output: coderYokesh
console.log(userMap.has("loggedIn")); // Output: true

userMap.delete("loggedIn");
console.log(userMap.size); // Output: 1

for (const [key, value] of userMap) {
  console.log(`${key} is ${value}`); // Output: username is coderYokesh
}
