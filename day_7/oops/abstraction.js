// ! Abstraction (Hiding Complexity):
// Think of it as: "Show only what's needed, hide the rest."
// You create an interface or abstract class with shared structure, and let subclasses fill in the blanks. JavaScript doesn't have true abstract classes natively, but we mimic them.

// * Vehicle -> parent class :
class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract class can't be instantiated");
    }
  }

  startEngine() {
    // You must override this method in child classes.
    throw new Error("Method 'startEngine()' must be implemented.");
  }
}
const vehicle = new Vehicle();
vehicle.startEngine(); // output: "Error: Abstract class can't be instantiated";

// * Bike -> Child class :
class Bike extends Vehicle {
  // Now it doesn't override Vehicle class's method.
}
const bike = new Bike();
bike.startEngine(); // output: "Error: Method 'startEngine()' must be implemented."

// * Car -> Child class :
class Car extends Vehicle {
  startEngine() {
    // Overrides Vehicle class's method.
    console.log("Car engine started 🚗");
  }
}

const car = new Car();
car.startEngine(); // output: "Car engine started 🚗"

// ! Challenge: Abstract Payment System
// ? Create a PaymentMethod base class with process() that throws an error (acting as abstract).
// ? Extend it into UPIPayment, CardPayment, CashPayment, and override process() in each.

class PaymentMethod {
  constructor() {
    if (this.constructor === PaymentMethod) {
      throw new Error("Abstract can't be instantiated");
    }
  }
  process() {
    throw new Error("You must use any implemented payment method");
  }
}
new PaymentMethod().process(); // Output: "Error: Abstract can't be instantiated"

class UPIPayment extends PaymentMethod {
  process() {
    console.log("UPI Payment successful!");
  }
}
new UPIPayment().process(); // Output: "UPI Payment successful!"

class CardPayment extends PaymentMethod {
  process() {
    console.log("Card Payment successful!");
  }
}
new CardPayment().process(); // Output: "Card Payment successful!"

class CashPayment extends PaymentMethod {
  process() {
    console.log("Cash Payment successful!");
  }
}
new CashPayment().process(); // Outpu: "Cash Payment successful!"
