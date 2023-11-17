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
