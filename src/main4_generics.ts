// GENERICS

// function identity(arg: any): any {
//   return arg;
// }

function identity<T>(arg: T): T {
  // the function will return the result with the same data type as the passed argument
  return arg;
}

console.log(identity(4)); // here TS uses a mechanism called automatic type inference
console.log(identity("Hello"));
console.log(identity<Number>(99));

let numberOutput = identity<Number>(1);
// let wrongOutput = identity<Number>("sdf"); // Compilation error. Invalid data type for the argument
let stringOutput = identity<String>("String");
console.log(numberOutput); // outputs "1"
console.log(stringOutput); // outputs " String"

// Working with Generalized Type Variables

/** 
  function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); // Error: T has no  .length property
    return arg;
  }
  */
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has .length, so there is no error
  return arg;
}

// Generalized Types

function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity: <T>(arg: T) => T = identity2;
console.log(myIdentity("Hello there")); // outputs 4
console.log(identity2("Hello there 2"));
let myVar: number[] = [1, 2, 3, 4, 5];
console.log(identity2(myVar));

let myIdentity2: { <T>(arg: T): T } = identity2;

interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity3: GenericIdentityFn = identity3;

// we can specify a generic type for the entire interface, which will make this parameter available to all its methods
interface GenericIdentityFn2<T> {
  (arg: T): T;
}

// we can usea generalized version of the interface, specifying a specific data type
let myIdentity4: GenericIdentityFn2<number> = identity3;

// Generalized classes

class GenericNumber<T> {
  zeroValue: T; // Property 'zeroValue' has no initializer and is not definitely assigned in the constructor.
  add: (x: T, y: T) => T; // Property 'add' has no initializer and is not definitely assigned in the constructor.
  constructor() {
    this.zeroValue = null as any; // 'null' or a sensible default cast to type T
    this.add = function (x: T, y: T): T {
      // A default implementation, assuming T supports this operation
      return x; // or some other default operation
    };
  }
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// Limitations of Generalizations

interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // No error since T is constrained to types with a .length property
  return arg;
}

// loggingIdentity(3); // Error, the number has no.length property
loggingIdentity2({ length: 10, value: 3 });

// Using Generic Parameters in Generalization Constraints

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let objectX = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(objectX, "a")); // okay
// console.log(getProperty(objectX, "m")); // error: Argument  of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generalizations

function create<T>(c: { new (): T }): T {
  return new c();
}
class SomeClass {}
var obj = create(SomeClass);
console.log(obj.constructor.name);
// shows SomeClass

class Beekeeper {
  hasMask: boolean = false;
}
class Zookeeper {
  nametag: string = "tag";
}
class Animal2 {
  numlegs: number = 0;
  constructor() {
    console.log("Animal2 object created");
  }
}
class Bee extends Animal2 {
  keeper: Beekeeper = new Beekeeper();
}
class Lion extends Animal2 {
  keeper: Zookeeper = new Zookeeper();
}
function createInstance<TAnimal extends Animal2>(
  c: new () => TAnimal
): TAnimal {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag); // shows "tag"
console.log(createInstance(Bee).keeper.hasMask); // shows "false"

// new Keyword

// function UserFactory<T>(): T {
//   return new T(); // compilation error
// }

// Define a generic factory function
function UserFactory<T>(type: { new (): T }): T {
  return new type();
}

// Example class that can be used with the factory
class User {
  constructor() {
    console.log("User object created");
  }
}

// Usage of the UserFactory with the User class
const user2 = UserFactory(User);
const animal44 = UserFactory(Animal2);
