// ! Array Destructuring:
const arr = [100, 200, 300];
const [a, b, c] = arr;
console.log(a, b, c); // 100, 200, 300

// * Skipping values:
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1, 3

// * With rest operator:
const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first, rest); // 10, [20, 30, 40, 50]

// ! Object Destructuring:
// * Basic syntax and renaming when destructuring:
const player = { name: "Yokesh", class: "Soul Reaper" };
const { name: playerName, class: playerClass } = player;
console.log(playerName, playerClass);

// * Default values:
const { weapon = "Zanpakuto" } = player;
console.log(weapon);

// * With rest operator:
const { name, ...other } = player;
console.log(name, other);
