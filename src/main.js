"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Francesco"));
// Variables
var test = "this is a string";
var firstNumber = 1;
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let name2 = "bob";
console.log(name2);
name2 = "smith";
console.log(name2);
let name_ = "Gene";
let age = 37;
// alt + 96 to generate backticks
let sentence = `Hello, my name is ${name_}, 
  I'll be ${age + 1} years old next month.`;
console.log(sentence);
// Arrays
//The first is to denote the type of array elements before []:
let list1 = [1, 2, 3];
//The second way is to use the generalization Array<elemType>:
let list2 = [1, 2, 3];
list2.forEach((element) => {
    console.log(element);
});
// Tuple
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
