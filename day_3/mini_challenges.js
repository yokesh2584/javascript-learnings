// TODO: Closure

function findMyVault(name) {
  const owner = "Yokesh";
  let balance = 0;
  const minBalance = 50;

  if (owner !== name) {
    console.log("\n=> You are not the owner, you can't access this vault.\n");
    return;
  }

  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
      console.log(`\n=> Hi ${name}! You have deposited ${amount} gold coins.`);
      console.log(`=> Your current balance is ${balance} gold coins.\n`);
    } else {
      console.log(
        `=> Hi ${name}! Please enter correct amount for to deposit.\n`
      );
    }
  }

  function withdraw(amount) {
    if (balance > minBalance && amount < balance) {
      balance -= amount;
      console.log(`=> Hi ${name}! You have withdrawn ${amount} gold coins.`);
      console.log(`=> Your current balance is ${balance} gold coins.\n`);
      if (balance < minBalance) {
        console.log(
          `!Note => You must maintain your balance above the ${minBalance}.`
        );
      }
    } else if (balance < minBalance) {
      console.log(
        `=> Hi ${name}! You must maintain your balance above the ${minBalance}.\n`
      );
    } else if (amount > balance) {
      console.log(
        `=> Hi ${name}! Your balance is insufficient for to withdraw.\n`
      );
    }
  }

  function checkBalance() {
    console.log(
      `=> Hi ${name}! Your current balance is ${balance} gold coins.\n`
    );
    let isMin = balance < minBalance;
    if (isMin) {
      console.log(
        `=> Hi ${name}! You must maintain your balance above the ${minBalance}.\n`
      );
    }
  }
  return { deposit, withdraw, checkBalance };
}

const myVault = findMyVault("Yokesh");
myVault.deposit(10000);
myVault.withdraw(500);
myVault.checkBalance();

// TODO: 'this' & call, apply and bind methods
// ! call
// * Question 1:

const hero = {
  name: "Yokesh",
  weapon: "JavaScript Sword",
  introduce: function () {
    console.log(`I am ${this.name}, wielding my ${this.weapon}.`);
  },
};

const villain = {
  name: "Shadow Bug",
  weapon: "Dark Loop",
};

hero.introduce();
hero.introduce.call(villain);

// * Question 2:
const dragon = {
  name: "FlameWyrm",
  roar(element) {
    console.log(`${this.name} breathes a furious ${element} roar.`);
  },
};

const phoenix = {
  name: "AshWing",
};

dragon.roar.call(phoenix, "fire");

// ! apply
// * Question 1:
function skillUp(skill1, skill2, skill3) {
  console.log(
    `${this.name} leveled up with: ${skill1}, ${skill2} and ${skill3}.`
  );
}
const person = { name: "Yokesh" };
const skills = ["Closures", "Arrow Functions", "Async Magic"];
skillUp.apply(person, ["Closures", "Arrow Functions", "Async Magic"]);

// * Question 2:
function tellTale(day, weather, encounter) {
  console.log(
    `${this.name} journeyed through the ${weather} day ${day}, encountering ${encounter}`
  );
}
const adventurer = { name: "Yokesh" };
const journeyDetails = ["Sunday", "storm winds", "a pack of wild bugs"];

tellTale.apply(adventurer, journeyDetails);

// ! bind
// * Question 1:
function spellCast(spell) {
  console.log(`${this.name} casts the mighty ${spell}.`);
}

const wizard = { name: "Yokesh the wise" };
const spell = "Closure Storm";

const newSpellCast = spellCast.bind(wizard, spell);
newSpellCast();

// * Question 2:
const hacker = {
  name: "CodeNinja",
  debug(tool) {
    console.log(`${this.name} is debugging with ${tool}.`);
  },
};
const tool = "Chrome Devtools";

const startDebugging = hacker.debug.bind(hacker, tool);
startDebugging();

// ! Fix 'this'
const beast = {
  name: "Rex",
  roar() {
    console.log(`${this.name} roars mightly!`);
  },
};
const unleash = beast.roar.bind(beast);
unleash();

// ! Method borrowing
const knight = {
  name: "Yokesh",
  greet(place) {
    console.log(`Greething from ${this.name} of ${place}.`);
  },
};

const traveler = { name: "CodeWanderer" };
const travelerPlace = { place: "ReactLand" };

knight.greet.call(traveler, travelerPlace.place);
knight.greet.apply(traveler, [travelerPlace.place]);
const travelerGreet = knight.greet.bind(traveler, travelerPlace.place);
travelerGreet();

// TODO: Object Methods:
// * Question 1: You’ve been given an artifact object. Extract all the keys, values, and entries using the sacred object methods.
const artifact = {
  name: "Blade of Eternity",
  type: "Sword",
  power: 999,
};
console.log(Object.keys(artifact));
console.log(Object.values(artifact));
console.log(Object.entries(artifact));

// * Question 2: Merge two objects into one — the base weapon and its enchantments — using Object.assign
const baseWeapon = { name: "Doombringer" };
const enchantment = { element: "Fire", damage: 1000 };
const ultimateWeapon = Object.assign({}, baseWeapon, enchantment);
console.log(ultimateWeapon);

// * Question 3: Freeze a powerful ally object and try to alter its destiny. Observe what happens.
const ally = {
  name: "Luna",
  class: "Mage",
  level: 88,
};
Object.freeze(ally);
ally.level = 99;
ally.mana = 2000;
console.log(ally);

// TODO: Destructuring:
// * Question 1. Destructure to get first two items and store the rest in `bag`
const loot = ["Gold", "Potion", "Shield", "Key"];
const [item1, item2, ...rest] = loot;
const bag = rest;
console.log(item1, item2);
console.log(bag);

// * Question 2: Destructure and print class and rank
const character = {
  name: "Ezra",
  class: "Archer",
  rank: "Elite",
};
const { class: characterClass, rank } = character;
console.log(characterClass, rank);

// * Question 3: Destructure `title` as `enemyTitle` and set a default for `power = 1000`
const enemy = {
  title: "Warlord",
};
const { title: enemyTitle, power = 1000 } = enemy;
console.log(enemyTitle, power);

// TODO: Spread & Rest Operator:
// * Question 1: Combine these two arrays of elemental rings using the spread operator:
const fireRings = ["Ember", "Inferno"];
const iceRings = ["Frost", "Glacier"];
const elementalRings = [...fireRings, ...iceRings];
console.log(elementalRings);

// * Question 2: You have this character object: Clone it and add a new element property using the spread operator.
const heroObj = { name: "Kael", class: "Mage", power: 9000 };
const newHeroObj = { ...heroObj, element: "ice" };
console.log(newHeroObj);

// * Question 3: Use the rest operator to gather remaining potions: Print each separately.
const [health, mana, ...extras] = [
  "Healing Potion",
  "Mana Potion",
  "Stamina",
  "Speed",
];
const restPotions = extras;
restPotions.forEach((restPotion) => console.log(restPotion));

// * Question 4: Create a function powerSum that accepts any number of power levels using the rest operator, and returns their total.
function powerSum([...powerLevels]) {
  return powerLevels.reduce((acc, curr) => acc + curr, 0);
}
const powerLevels = [10000, 5000, 3000, 6000, 2000];
console.log(powerSum(powerLevels));
