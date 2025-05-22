// ! Polymorphism — One Method, Many Masks
// Imagine a method speak() that behaves differently in Dog, Cat, and Human—but all classes are tied together by a shared parent.
// Same method name, different behavior.

class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

const pets = [new Dog(), new Cat()];
pets.forEach((pet) => pet.speak()); // bark, meow — different forms of speak

// !Polymorphism Challenge 1: Talking Beings
// ? Create a Being class with a talk() method.
// ?Then extend it into Human, Robot, and Alien, each with its own version of talk().

class Being {
  talk() {
    console.log("This being can talk.");
  }
}

class Human extends Being {
  talk() {
    console.log("Humans talk in human languages.");
  }
}

class Robot extends Being {
  talk() {
    console.log("Robots talk in machine language.");
  }
}

class Alien extends Being {
  talk() {
    console.log("Aliens talk in alien language.");
  }
}

new Human().talk();
new Robot().talk();
new Alien().talk();
