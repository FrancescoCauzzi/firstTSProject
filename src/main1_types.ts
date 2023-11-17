function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Francesco"));

// Variables
var test: string = "this is a string";
var firstNumber: number = 1;
function sum(a: number, b: number): number {
  return a + b;
}

let result: number = sum(1, 2);
console.log(result);

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let name2: string = "bob";
console.log(name2);
name2 = "smith";
console.log(name2);

let name_: string = "Gene";
let age: number = 37;
// alt + 96 to generate backticks
let sentence: string = `Hello, my name is ${name_}, 
  I'll be ${age + 1} years old next month.`;
console.log(sentence);

// Arrays
//The first is to denote the type of array elements before []:
let list1: number[] = [1, 2, 3];
//The second way is to use the generalization Array<elemType>:
let list2: Array<number> = [1, 2, 3];

list2.forEach((element) => {
  console.log(element);
});

// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' doesnot have 'substr'
console.log(`x[0]: ${x[0]}`);
console.log(`x[1]: ${x[1]}`);
//console.log(`x[2]: ${x[2]}`); erro

let y1: string;
let y2: number;
[y1, y2] = x;

console.log(`y1: ${y1}`);
console.log(`y2: ${y2}`);

// Optional tuples
let optionalTuple: [string, boolean?];
optionalTuple = ["test2", true];
console.log(`optionalTuple: ${optionalTuple}`);
optionalTuple = ["test"];
console.log(`optionalTuple: ${optionalTuple}`);

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // This will output '1'
console.log(Color[c]); // This will output 'Green'

// String Enums

enum DoorStateString {
  Open = "open",
  Closed = "closed",
  Ajar = "ajar",
}
var openDoorString = DoorStateString.Open;
console.log(`openDoorString = ${openDoorString}`);

// Any

let notSure: any = 4;
notSure = " maybe a string instead";
notSure = false; // ok, this is definitely boolean

let looselyTyped: any = 4;

console.log(`looselyTyped is of type: ${typeof looselyTyped}`);

// Void
function warnUser(): void {
  alert("This is my warning message");
}
// warnUser();

// Null and Undefined
let n: number | null = null; // Primitive types can be null
let m: number | undefined = undefined; // Primitive types can beundefined
let x_: null = null; // same as x: any = null
let y: undefined = undefined; // same as y: any = undefined
// x_ =1; error
// y = 'hello'; error

// Never
function error(message: string): never {
  throw new Error(message);
}
//error("Error");

// Symbol

// Type assertion
let someValue: any = "this is a string";
// down here we are telling typescript that someValue is a string and not any other type to perform a conversion
let strLength: number = (<string>someValue).length;
console.log(`strLength: ${typeof strLength}`);

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

function f() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;
  return b;
  function g() {
    return a;
  }
}
console.log(f());

// Scoping
// down here is how not to write a function (avoid using the var keyword instead use let)
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

//
let a1: number = 4;
function foo() {
  //okay to capture 'a'
  return a1;
}

console.log(foo());
/*
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
*/

// Destructuring an object
let o = {
  a: "foo",
  b: 12,
  c: "bar",
};
//let { a, b } = o;
//console.log(`a: ${a}, b: ${b}`);

let { a, b }: { a: string; b: number } = o; // Destructuring with types also

function keepWholeObject(wholeObject: { a: string; b?: number }): void {
  let { a, b = 1001 } = wholeObject;
  console.log(`a: ${a}, b: ${b}`);
}

keepWholeObject({ a: "hello" }); // b will be defaulted to 1001
keepWholeObject({ a: "hello", b: 42 }); // b will use the value 42

// Interfaces
interface IServer {
  hostname: string;
  location: string;
  active: boolean;
  public_address: IPublicAddress;
  getPublicAddresInString: () => string; // Methods of the interface
}

interface IPublicAddress {
  netmask: string;
  gateway: string;
  address: string;
}

const server: IServer = {
  hostname: "Pikachu",
  location: "RM1",
  active: true,
  public_address: {
    netmask: "0000000000000",
    gateway: "0000000000000",
    address: "0000000000000",
  },
  getPublicAddresInString: function (): string {
    return `${this.public_address.address}, ${this.public_address.gateway}, ${this.public_address.netmask}`;
  },
};

// Indexed Types
interface ICache {
  size: number;
  first: ICacheItem | null;
  last: ICacheItem | null;
  items: { [item: string]: ICacheItem }; //"dictionary", "map", or "associative array"
}

interface ICacheItem {
  id: string;
  data: any; // Can be more specific depending on the use case
}

class MyCustomCache implements ICache {
  size = 0;
  first: ICacheItem | null = null;
  last: ICacheItem | null = null;
  items: { [item: string]: ICacheItem } = {}; //"dictionary", "map", or "associative array"

  addItem(key: string, item: ICacheItem) {
    if (this.size === 0) {
      this.first = item;
    }
    this.items[key] = item;
    this.last = item;
    this.size++;
  }

  getItem(key: string): ICacheItem {
    return this.items[key];
  }

  // Other cache methods (removeItem, clear, etc.) can be added here
}

// Usage
const cache = new MyCustomCache();
cache.addItem("item1", { id: "1", data: "Data 1" });
cache.addItem("item2", { id: "2", data: "Data 2" });

console.log(cache.getItem("item1")); // Retrieves the first item
console.log(cache.items); // show the entire

// Discriminated unions
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

function area(s: Square | Rectangle | Circle): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

class MyCircle implements Circle {
  kind: "circle" = "circle";
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

let circle1 = new MyCircle(10);

console.log(area(circle1));
// Working with interfaces
/* 
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
*/

interface ILabelledValue {
  label: string;
}
function printLabel(labelledObj: ILabelledValue) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });

/*
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    // Ошибка: Property ’collor’ does not exist on  type ’SquareConfig’
    newSquare.color = config.collor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });
*/

// Readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// Readonly arrays
// (arrays with from which all methods that modify it are removed)
let readOnlyArr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = readOnlyArr;
ro.forEach((el) => console.log(el));
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// this restriction can still be circumvented by using typecasting
let typeCasting = ro as number[];

interface SquareConfig {
  color?: string;
  width?: number;
}

let squareOptions = { colour: "red", width: 100 }; // No error on this line
let mySquareh: SquareConfig = squareOptions; // Error if 'colour' is not allowed in SquareConfig

// Function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, subStr: string) {
  let result = src.search(subStr);
  if (result == -1) {
    return false;
  } else {
    return true;
  }
};
// The search method used in these functions is a JavaScript string method that searches for a match using a string or a regular expression, returning the position of the match or -1 if no match is found.

// this down here is also valid
let mySearch2: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub);
  if (result == -1) {
    return false;
  } else {
    return true;
  }
};

// Indexed types

// array of strings
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Josh"];
let myStr: string = myArray[0];

// array of numbers
interface NumberArray {
  [index: number]: number;
}

let myNumberArray: NumberArray;
myNumberArray = [1, 2, 3, 6];

// Dictionary of numbers
interface INumberDictionary {
  [index: string]: number;
  length: number; //
  width: number; // ошибка, the type of ’name’  is not a subtype of the indexer
}

let myDict: INumberDictionary;
myDict = {
  length: 10,
  width: 15,
};

console.log(myDict.width);
