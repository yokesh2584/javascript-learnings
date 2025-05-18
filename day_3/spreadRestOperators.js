// ! Spread Operator:
// * Spread in Array:
const squadA = ["Naruto", "Sasuke"];
const squadB = ["Sakura", "Kakashi"];
const fullSquad = [...squadA, ...squadB];
console.log(fullSquad); // Output: ['Naruto', 'Sasuke', 'Sakura', 'Kakashi']

// * Spread in Object:
const baseStats = { hp: 100, attack: 50 };
const bonusStats = { magic: 80, attack: 70 }; // This 'attack' will override!
const finalStats = { ...baseStats, ...bonusStats };
console.log(finalStats); // Output: { hp: 100, attack: 70, magic: 80 }

// ! Rest Operator:
// * Rest in Array:
const [first, ...others] = ["Blade", "Bow", "Staff", "Dagger"];
console.log(first);
console.log(others);

// * Rest in Object:
function summon(...heroes) {
  console.log(`Summoning ${heroes.length} heroes:`, heroes);
}
summon("Ezra", "Leona", "Kai");
// Output: Summoning 3 heroes: ['Ezra', 'Leona', 'Kai']
