"use strict";
// Part two
// Inheritance
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 2) {
        console.log("Jumping...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let jackTheFrog = new Frog("Froggy the Traveller");
let mrhorse = new Horse("MrHorse");
jackTheFrog.move();
mrhorse.move(34);
class InterfaceInheritanceClass {
}
// Class inheritance
class BaseClass {
}
class DerivedFromBaseClass extends BaseClass {
}
class MultipleInterfaces {
}
// Access modifiers
class AnimalPrivate {
    constructor(theName) {
        this.name = theName;
    }
    getName() {
        return this.name;
    }
}
// new AnimalPrivate("Cat").name; // erroe\: ’name’ is private;
let catPrivate = new AnimalPrivate("Micio");
console.log(catPrivate.getName());
class AnimalTest {
    constructor(theName) {
        this.name = theName;
    }
    // methods
    getName() {
        return this.name;
    }
}
class Cat extends AnimalTest {
    constructor() {
        super("Cat");
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new AnimalTest("Goat");
let cat = new Cat();
console.log(cat.getName());
let employee = new Employee("Jack");
animal = cat;
// animal = employee; // error: ’Animal’ and ’Employee’are not compatible
