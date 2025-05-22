// ! Getters & Setters — The Elegant Doormen
// * They help us:
// Encapsulate logic while accessing or updating private fields
// Add validation or transformation
// Keep the interface clean and intuitive

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name.toUpperCase();
  }

  set name(newName) {
    if (newName.length < 3) console.log("Your name is too short.");
    else this.#name = newName;
  }
}
const user = new User("Aaravi");
console.log(user.name);

user.name = "Yo";
user.name = "Yokesh";
console.log(user.name);

// ! Mini-Challenges
// TODO: Challenge 1: The House of Secrets
// Create a House class that has:
// A private #locked property
// A get status() method that returns "Locked" or "Unlocked"
// A set lockState(state) method that only accepts true or false, rejecting anything else

class House {
  #locked = true;
  #houseOwner = "AARAVI";

  constructor(name) {
    this.person = name;
  }

  get status() {
    return this.#locked ? "Locked" : "Unlocked";
  }

  set lockState(state) {
    if (this.person === this.#houseOwner) {
      if (state === true || state === false) {
        this.#locked = state;
        console.log(
          `Door is ${this.#locked === true ? "locked" : "unlocked"}.`
        );
      } else {
        console.log("Invalid lock state!");
      }
    } else {
      console.log("You don't have access to this house!");
    }
  }
}

const home = new House("YOKESH");
console.log(home.status);
home.lockState = true;

const house = new House("AARAVI");
console.log(house.status);
house.lockState = false;

// TODO: Challenge 2: The Guardian of Age
// Create a Member class with:
// A private #age
// A get age() method that reveals the age
// A set age(value) method that only allows setting age above 13

class Member {
  #name;
  #age;
  #minAge = 13;

  constructor(name) {
    this.#name = name;
  }

  get age() {
    console.log(`Hi ${this.#name}`);
    return this.#age ?? "Not set yet";
  }

  set age(age) {
    if (age > this.#minAge) this.#age = age;
    else console.log("You are too young to be a member!");
  }
}

const member = new Member("Yokesh");
console.log(member.age);
member.age = 20;
console.log(member.age);

// TODO: Challenge 3: Premium Vault Access
// Create a Subscription class with:
// A private #isPremium flag
// A get benefits() method that returns different perks for premium and free users
// A set upgrade(state) method that accepts only boolean values

class Subscription {
  #isPremium = false;
  #user;

  constructor(user) {
    this.#user = user;
  }

  get benefits() {
    return this.#isPremium
      ? `Hi ${this.#user}, You are a premium user!`
      : `Hi ${this.#user}, You are limited to access some features.`;
  }

  set upgrade(state) {
    if (state === true || state === false) {
      this.#isPremium = state;
      console.log(
        this.#isPremium === true
          ? `Hi ${this.#user}, You are subscribed to premium!`
          : `Hi ${this.#user}, You are unsubscribed!`
      );
    } else {
      console.log("Invalid action!");
    }
  }
}
const account = new Subscription("Aaravi");
console.log(account.benefits);
account.upgrade = true;
console.log(account.benefits);
