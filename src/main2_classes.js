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
//console.log(cat.getName());
let employee = new Employee("Jack");
animal = cat;
// animal = employee; // error: ’Animal’ and ’Employee’are not compatible Type 'Employee' is not assignable to type 'AnimalTest'. Types have separate declarations of a private property 'name'
// protected
/*
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
*/
class Person {
    constructor(name) {
        this.name = name;
    }
}
class EmployeeProt extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new EmployeeProt("Howard", "Sales");
console.log(howard.getElevatorPitch());
// let john = new Person("John"); // error: The ’Person’constructor is protected
//console.log(howard.name); // error
// Readonly
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let myOctopus = new Octopus("Man with the 8 strong legs");
const car = {
    name: "Mercedes",
    age: 2,
};
const readOnlyCar = {
    name: "BMW",
    age: 5,
    color: "black",
};
car.age = 8;
// readOnlyCar.age = 10; // Cannot assign to ’age’ because it is a read-only property
// Parameter Properties
class OctopusParamProp {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
let myOctopusPar = new OctopusParamProp("Julian");
console.log(myOctopusPar.numberOfLegs);
// Accessors (Getters/Setters)
let passcode = "secret passcode";
class EmployeeGetSet {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee2 = new EmployeeGetSet();
employee2.fullName = "Bob Nylon";
if (employee2.fullName) {
    console.log(employee2.fullName);
}
// Static properties
class Grid {
    calculateDistanceFromOrigin(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(scale) {
        this.scale = scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(Grid.origin);
// Abstract classes
class AnimalNew {
    move() {
        console.log("doing something...");
    }
}
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); //   constructors in derived classes must call super();
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let department; // okaycreated a reference to an abstract class
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // okay, a  non-abstract class was created and assigneddepartment.
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn’t exist on declared abstract type
// Constructors
class Greeter {
    constructor(message) {
        // constructor function
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter;
greeter = new Greeter("world"); // constructor function is called when we create instances of the class using new
console.log(greeter.greet());
class Greeter2 {
    constructor() {
        this.greeting = "";
    }
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}
Greeter2.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter2();
console.log(greeter1.greet());
let greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
// Using a class as an interface
class Point {
    constructor() {
        this.x = null;
        this.y = null;
    }
}
let point3d = { x: 1, y: 2, z: 3 };
