// ! 1. Write a function "battleCry" that accepts a "name" and a callback.
function battleCry(name, cb) {
  cb(name);
}
function cb(name) {
  console.log(`${name} scouts: "For JavaScript and Glory!"`);
}
battleCry("Yokesh", cb);

// ! 2. Write a function "victoryShout" that accepts a "warriorName" and a callback.
const victoryShout = (warriorName, shout) => shout(warriorName);
const shout = (name) => console.log(`"${name}" yells: "Victory is ours!".`);
victoryShout("Yokesh", shout);

// ! 3. Create a function login that takes a username and a callback.
// ! If the username is "Yokesh", call the callback with "Access granted".
// ! Otherwise, call it with "Access denied".
const login = (user, access) => access(user);
const access = (user) => {
  if (user === "Yokesh") console.log("Access granted.");
  else console.log("Access denied.");
};
login("Yokesh", access);
