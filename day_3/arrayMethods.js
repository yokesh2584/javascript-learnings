// ! 1. forEach Method:
// ? Question 1.
const heroes = ["Thor", "Iron Man", "Hulk"];
heroes.forEach((hero, index) =>
  console.log(`${index + 1}. ${hero} charges into battle!`)
);

// ? Question 2.
const items = ["gold", "elixir", "scroll"];
items.forEach((item, index) => console.log(`${index + 1}. ${item}`));

// ! 2. Map Method:
// ? Question 1.
const levels = [1, 2, 3];
const levelUps = levels.map((level) => level * 2);
console.log(levelUps);

// ? Question 2.
const xps = [10, 20, 30, 40];
const doubledXp = xps.map((xp) => xp * 2);
console.log(doubledXp);

// ? Question 3.
const beasts = ["orc", "troll", "goblin"];
beasts.map((creature, index, fullArray) => {
  console.log(`At index ${index}, we see ${creature}`);
  console.log(`Full army: ${fullArray}`);
});

// ! 3. Filter Method:
// ? Question 1.
const nums = [10, 30, 70, 90, 20, 40];
const greaterNums = nums.filter((num) => num > 30);
console.log(greaterNums);

// ? Question 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = numbers.filter((number) => number % 2 === 0);
console.log(evenNums);

// ! 4. Reduce:
// ? Question 1.
const coins = [100, 200, 300];
const total = coins.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// ? Question 2.
const xpValues = [10, 20, 30, 40];
const sumValue = xpValues.reduce((acc, curr) => acc + curr, 0);
console.log(sumValue);

// ? Question 3.
const runes = [10, 20, 30];
const totalRunes = runes.reduce((acc, curr, index, array) => {
  console.log(`acc: ${acc}, curr: ${curr}, index: ${index}`);
  return acc + curr;
}, 0);
console.log(totalRunes);

// ! 5. Find:
// ? Question 1.
const weapons = ["knife", "axe", "katana", "bow"];
const longBlade = weapons.find((weapon) => weapon.length > 5);
console.log(longBlade);

// ? Question 2.
const characters = ["Neo", "Yokesh", "Trinity", "Morpheus"];
const longChar = characters.find((character) => character.length > 6);
console.log(longChar);

// ! 6. Some:
// ? Question 1.
const healthPoints = [50, 70, 0, 90];
const someOneDown = healthPoints.some((hp) => hp === 0);
console.log(someOneDown);

// ? Question 2.
const quests = ["done", "pending", "done", "failed"];
const isFailed = quests.some((quest) => quest === "failed");
console.log(isFailed);

// ! 7. Every:
// ? Question 1.
const teamHP = [100, 80, 90];
const allAlive = teamHP.every((hp) => hp > 50);
console.log(allAlive);

// ? Question 2.
const skills = [70, 80, 90];
const areAllSkilled = skills.every((skill) => skill > 60);
console.log(areAllSkilled);
