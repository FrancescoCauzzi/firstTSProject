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
