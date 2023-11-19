// Part two
// CLASSES

// Inheritance
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Frog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 2) {
    console.log("Jumping...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
let jackTheFrog = new Frog("Froggy the Traveller");
let mrhorse: Animal = new Horse("MrHorse");
jackTheFrog.move();
mrhorse.move(34);

// Interface inheritance

interface IBase {
  id: number | undefined;
}

interface IDerivedFromBase extends IBase {
  name: string | undefined;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
  id: number | undefined;
  name: string | undefined;
}

// Class inheritance
class BaseClass implements IBase {
  id: number | undefined;
}
class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
  name: string | undefined;
}

// implementing multiple interfaces
interface IFirstInterface {
  id: number | undefined;
}
interface ISecondInterface {
  name: string | undefined;
}
class MultipleInterfaces implements IFirstInterface, ISecondInterface {
  public id: number | undefined;
  public name: string | undefined;
}

// Access modifiers

class AnimalPrivate {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  public getName(): string {
    return this.name;
  }
}
// new AnimalPrivate("Cat").name; // erroe\: ’name’ is private;
let catPrivate = new AnimalPrivate("Micio");
console.log(catPrivate.getName());

class AnimalTest {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  // methods
  //   public getName(): string {
  //     return this.name;
  //   }
}
class Cat extends AnimalTest {
  constructor() {
    super("Cat");
  }
}
class Employee {
  private name: string;
  constructor(theName: string) {
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
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class EmployeeProt extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new EmployeeProt("Howard", "Sales");
console.log(howard.getElevatorPitch());
// let john = new Person("John"); // error: The ’Person’constructor is protected
//console.log(howard.name); // error

// Readonly
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let myOctopus = new Octopus("Man with the 8 strong legs");
// myOctopus.name = "Man with the 3-piece suit"; // error! Cannot assign to 'name' because it is a read-only property.

// Type iterator modifier
interface ICar {
  name: string;
  age: number;
  color?: string;
}

// we take the original ICar interface, remove all optional modifiers -? and add the +readonly flag for all properties
type ReadonlyCar = {
  +readonly [K in keyof ICar]-?: ICar[K] | string;
};

const car: ICar = {
  name: "Mercedes",
  age: 2,
};
const readOnlyCar: ReadonlyCar = {
  name: "BMW",
  age: 5,
  color: "black",
};
car.age = 8;
// readOnlyCar.age = 10; // Cannot assign to ’age’ because it is a read-only property

// Parameter Properties
class OctopusParamProp {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

let myOctopusPar = new OctopusParamProp("Julian");
console.log(myOctopusPar.numberOfLegs);

// Accessors (Getters/Setters)

let passcode = "secret passcode";
class EmployeeGetSet {
  private _fullName!: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
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
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(Grid.origin);

// Abstract classes
abstract class AnimalNew {
  abstract makeSound(): void;
  move(): void {
    console.log("doing something...");
  }
}

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // must be  implemented in a derived class
}
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); //   constructors in derived classes must call super();
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
let department: Department; // okaycreated a reference to an abstract class
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // okay, a  non-abstract class was created and assigneddepartment.
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn’t exist on declared abstract type

// Constructors
class Greeter {
  greeting: string;
  constructor(message: string) {
    // constructor function
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
let greeter: Greeter;
greeter = new Greeter("world"); // constructor function is called when we create instances of the class using new
console.log(greeter.greet());

class Greeter2 {
  static standardGreeting = "Hello, there";
  greeting: string = "";
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter2.standardGreeting;
    }
  }
}
let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());
let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet());

// Using a class as an interface
class Point {
  x: number | null = null;
  y: number | null = null;
}

interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
