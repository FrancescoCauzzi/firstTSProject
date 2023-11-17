// Part two

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
animal = employee; // error: ’Animal’ and ’Employee’are not compatible Type 'Employee' is not assignable to type 'AnimalTest'. Types have separate declarations of a private property 'name'
