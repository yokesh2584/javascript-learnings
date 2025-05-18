const hero = {
  name: "Yokesh",
  level: 99,
  class: "Shadow-Monarch",
  mana: "Infinity",
};

// * Object.keys(obj):
// ? Returns an array of keys from the object.
console.log(Object.keys(hero)); // ["name", "level", "class"]

// * Object.values(obj):
// ? Returns an array of values from the object.
console.log(Object.values(hero)); // ["Yokesh", 99, "Warrior"]

// * Object.entries(obj):
// ? Return an array of key-value pair from the object (as array).
console.log(Object.entries(hero)); // [["name", "Yokesh"], ["level", 99], ["class", "Warrior"]]

// * Object.assing(target, ...sources):
// ? Copies properties from source objects to a target object.
const weapon = { type: "Sword" };
const power = { damage: 500 };
const enhancedWeapon = Object.assign({}, weapon, power);
console.log(enhancedWeapon); // { type: "Sword", damage: 500 }

// * Object.freeze(obj):
// ? Freezes an object - making it immutable.
Object.freeze(hero);
hero.class = "S-Rank"; // ❌ Won't change
console.log(hero.class); // Still "Shadow-Monarch"

// * Object.seal(obj):
// ? Seals an object - you can update properties, but not add/remove them.
const shield = { durability: 80 };
Object.seal(shield);
shield.durability = 100;
console.log(shield.durability); // ✅ Works
shield.color = "Gold"; // ❌ Won’t be added
console.log(shield);

// * hasOwnProperty(key):
// ? Checks if a property exists directly on the object (not inherited).
console.log(hero.hasOwnProperty("level")); // true
console.log(hero.hasOwnProperty("mana")); // true
