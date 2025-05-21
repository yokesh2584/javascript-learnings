// TODO: Classes, Constructors, Super keyword and OOPs

// ? What is OOP in JavaScript?
// Object-Oriented Programming (OOP) is a programming paradigm based on the concept of “objects” that contain data (properties) and behavior (methods).
// JavaScript didn’t originally start as a class-based language, but with ES6, we now have class syntax to mimic classical OOP like in Java, C++, etc.

// ! => Creating classes and constructor

// * Example:
// creating a class:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
}
// creating an instances:
const aaravi = new Person("Aaravi", 20);
const yokesh = new Person("Yokesh", 20);

aaravi.greet();
yokesh.greet();

// TODO:
// ! => "this" keyword: It refers to the current object -> that being created.

// TODO:
// ! => Encapsulation (Organizing Data with methods):

// * Example:
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  isTopper() {
    return this.grade === "A";
  }
}
const student1 = new Student("Yokesh", "D");
console.log(student1.isTopper());

// TODO:
// ! => Inheritance using "extends" and "super" keywords & method override:

// * Example:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Lion extends Animal {
  speak() {
    // This speak() function overrides the one from the parent class constructor.
    console.log(`${this.name} roars!`);
  }
}
const simba = new Lion("Simba");
simba.speak();
// "extends" is used to inherit from a parent class.
// "super()" is used to call the parent’s constructor inside the child class.

// TODO:
// ! => Car and SuperCar class constructor & super.method():

// * Example:
class Car {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `This car ${this.name} is a ${this.year} year's ${this.model} model`;
  }
}

class SportsCar extends Car {
  constructor(name, model, year, speed) {
    super(name, model, year);
    this.speed = speed;
  }
  getDetails() {
    return `${super.getDetails()} and its top speed is ${this.speed}`;
    // Here, we need to add additional info along with the info from the parent class.
    // So, we used "super.method()" that is "super.getDetails()" here, to override the method using the value along with value from parent class.
  }
}

const car1 = new Car("Toyota", "Corolla", 2018);
const car2 = new Car("Honda", "Civic", 2020);
const car3 = new Car("Tata", "Altroz", 2022);

console.log(car1.getDetails()); //This car Toyota is a 2018 year's Corolla model
console.log(car2.getDetails()); // This car Honda is a 2020 year's Civic model
console.log(car3.getDetails()); // This car Tata is a 2022 year's Altroz model

const superCar1 = new SportsCar("Ferrari", "488 Spider", 2023, 330);
const superCar2 = new SportsCar("Lamborghini", "Huracán Evo", 2022, 325);
const superCar3 = new SportsCar("Bugatti", "Chiron", 2021, 420);

console.log(superCar1.getDetails()); // This car Ferrari is a 2023 year's 488 Spider model and its top speed is 330
console.log(superCar2.getDetails()); // This car Lamborghini is a 2022 year's Huracán Evo model and its top speed is 325
console.log(superCar3.getDetails()); // This car Bugatti is a 2021 year's Chiron model and its top speed is 420

// TODO:
// ! => Static Methods & Fields
// "static" methods belong to the class, not instances.
// Used for utility/helper functions, not tied to any specific object.

// ? Using static methods:
// * Example:
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static multiply(a, b = 1) {
    return a * b;
  }

  static divide(a, b = 1) {
    if (a && b !== 0) {
      return a / b;
    } else if (b === 0) {
      return `You mustn't provide zero for divisor`;
    } else {
      return `You must provide values for both divident & divisor`;
    }
  }
}

console.log(MathUtils.add(1, 1));
console.log(MathUtils.sub(5, 1));
console.log(MathUtils.multiply(3, 3));
console.log(MathUtils.divide(10, 10));

// ? Using static field:

class Circle {
  static PI = 3.14;

  static area(radius, unit) {
    const area = (this.PI * radius ** 2).toFixed(2);
    return `${area} ${unit}^2`;
  }

  static circumference(radius, unit) {
    const circumference = (2 * this.PI * radius).toFixed(2);
    return `${circumference} ${unit}`;
  }
}
console.log(Circle.area(10, "cm")); // static fields and methods can be directly accessed through class.
console.log(Circle.area(30, "m"));
console.log(Circle.circumference(50, "cm"));
console.log(Circle.circumference(20, "m"));

// TODO:
// ! Encapsulation with Private Fields
// Private fields protect internal state—no one outside can peek or poke unless allowed.
// Start them with "#".
// Only accessible inside the class.

// * Example:
class BankAccount {
  #balance = 0; // Can't be accessed outside the class. It is private to the class it belongs.
  #minBalance = 100;

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    return;
  }

  withdraw(amount) {
    let message = "";

    switch (true) {
      case this.#balance < amount:
        message = `Withdraw failed! Your balance is insufficient to be drawn`;
        break;

      case this.#balance < this.#minBalance:
        message = `Withdraw failed! Your balance is less than ${
          this.#minBalance
        }`;
        break;

      case this.#balance >= amount && this.#balance >= this.#minBalance:
        this.#balance -= amount;
        message = `Withdraw successful!`;
        break;

      default:
        message = `Server Breakdown, try again later.`;
    }

    console.log(message);
    this.getBalance();
  }

  getBalance() {
    console.log(`Your current bank balance: ₹${this.#balance}`);
    return;
  }
}
const account = new BankAccount();
account.deposit(1000);  
account.getBalance();
account.withdraw(1001);
