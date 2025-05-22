// TODO: Challenge #1:
// * Create your own mini hierarchy:
// A base class called Appliance.
// Subclasses: WashingMachine, Microwave, AirConditioner.
// Each should override a turnOn() method with super.turnOn() and custom log.

class Appliance {
  constructor(name) {
    this.name = name;
  }

  turnOn() {
    console.log(`${this.name} is turned on.`);
  }
}

class WashingMachine extends Appliance {
  constructor(name) {
    super(name);
  }

  turnOn() {
    super.turnOn();
    console.log(`${this.name} is now washing all clothes... 🧺💦`);
  }
}

class Microwave extends Appliance {
  constructor(name) {
    super(name);
  }

  turnOn() {
    super.turnOn();
    console.log(`${this.name} is baking a cake now... 🎂🔥`);
  }
}

class AirConditioner extends Appliance {
  constructor(name) {
    super(name);
  }

  turnOn() {
    super.turnOn();
    console.log(`${this.name} is running on 24°C right now... ❄️🌬️`);
  }
}

const washingMachine = new WashingMachine("WashingMachine");
const microwave = new Microwave("Microwave");
const airConditioner = new AirConditioner("AirConditioner");

washingMachine.turnOn();
microwave.turnOn();
airConditioner.turnOn();

// TODO: Challenge #2: User & PremiumUser with Encapsulation & Inheritance
// * Scenario:
// You’re building a system where regular users can sign up and view their profile,
// but PremiumUsers get extra perks—like coins, badges, and a special greeting.
// We’ll use #privateFields to protect sensitive data like coins and implement behavior through method overriding.

class User {
  #name;
  #email;

  constructor(name, email) {
    this.#name = name;
    this.#email = email;
  }

  showProfile() {
    console.log(`User: ${this.#name}`);
    console.log(`Email: ${this.#email}`);
  }

  updateEmail(newEmail) {
    if (newEmail !== this.#email) {
      this.#email = newEmail;
      console.log(`Email updated successfully!`);
    } else console.log(`Email already in use`);
  }
}

class PremiumUser extends User {
  constructor(name, email) {
    super(name, email);
  }
  #coins = 100;

  showProfile() {
    super.showProfile();
    console.log(`Coins: ${this.#coins}`);
  }

  addCoins(coins) {
    if (typeof coins === "number") {
      this.#coins += coins;
      console.log(`Added ${coins} coins!`);
    } else {
      console.log("Please provide a valid number of coins to add.");
    }
    console.log(`Coins: ${this.#coins}`);
  }

  spendCoins(coins) {
    if (typeof coins !== "number" || coins <= 0) {
      console.log("Invalid coin amount.");
    } else if (coins > this.#coins) {
      console.log(`Insufficient coins!`);
    } else {
      this.#coins -= coins;
      console.log(`Spent ${coins} coins!`);
    }
    console.log(`Coins: ${this.#coins}`);
  }
}

const yokesh_18 = new PremiumUser("yokesh_18", "yokesh@gmail.com");
yokesh_18.showProfile();
yokesh_18.updateEmail("yokesh18@gmail.com");
yokesh_18.showProfile();
yokesh_18.addCoins(100);
yokesh_18.spendCoins(50);

// TODO: Challenge #3 – Encapsulated Bank Account System
// * Let’s sculpt a BankAccount class with private properties and a child class called SavingsAccount
// * that comes with a bonus interest feature.

// ?BankAccount (Parent Class):
// Private fields: #accountHolder, #balance
// Constructor takes accountHolder (string), optional initialBalance (default 0)
// deposit(amount) – add amount to balance
// withdraw(amount) – subtract if sufficient, else warn
// getBalance() – log current balance
// getAccountHolder() – log account holder name

// ? SavingsAccount (Child Class):
// Inherits from BankAccount
// Private field: #interestRate (as percentage, e.g., 5)
// Constructor takes accountHolder, optional initialBalance, and optional interestRate (default 5%)
// addInterest() – calculates interest and adds it to balance, then logs it

class BankAccount {
  #accountHolder;
  #balance = 0;
  #minBalance = 100;

  constructor(accountHolder, initialBalance) {
    this.#accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  getAccountHolder() {
    console.log(this.#accountHolder);
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Please provide a valid amount to deposit!");
    } else {
      this.#balance += amount;
      console.log(`Deposited ${amount}`);
    }
  }

  withdraw(amount) {
    if (typeof amount !== "number") {
      console.log("Please provide a valid amount to withdraw!");
    } else if (amount > this.#balance || this.#balance < this.#minBalance) {
      console.log("Insufficient funds");
    } else {
      this.#balance -= amount;
      console.log("Withdraws successfully");
    }
  }

  printBalance() {
    console.log(this.#balance);
  }

  getBalance() {
    return this.#balance;
  }

  _incrementBalance(amount) {
    this.#balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  #interestRate = 5;

  constructor(accountHolder, initialBalance, interestRate) {
    super(accountHolder, initialBalance);
    this.#interestRate = interestRate;
  }

  addInterest() {
    const currentBalance = this.getBalance();
    const interest = (currentBalance / 100) * this.#interestRate;
    this._incrementBalance(interest);
    console.log(`Added ${interest} as interest.`);
  }
}

const account = new SavingsAccount("Yokesh", 1000, 10);
account.getAccountHolder();
account.getBalance();
account.deposit(500);
account.withdraw(2000);
account.withdraw(800);
account.printBalance();
account.addInterest();
account.printBalance();
