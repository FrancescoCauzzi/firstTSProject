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
console.log(x[0].substring(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' doesnot have 'substr'
console.log(`x[0]: ${x[0]}`);
console.log(`x[1]: ${x[1]}`);
//console.log(`x[2]: ${x[2]}`); erro
let y1;
let y2;
[y1, y2] = x;
console.log(`y1: ${y1}`);
console.log(`y2: ${y2}`);
// Optional tuples
let optionalTuple;
optionalTuple = ["test2", true];
console.log(`optionalTuple: ${optionalTuple}`);
optionalTuple = ["test"];
console.log(`optionalTuple: ${optionalTuple}`);
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c); // This will output '1'
console.log(Color[c]); // This will output 'Green'
// String Enums
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["Open"] = "open";
    DoorStateString["Closed"] = "closed";
    DoorStateString["Ajar"] = "ajar";
})(DoorStateString || (DoorStateString = {}));
var openDoorString = DoorStateString.Open;
console.log(`openDoorString = ${openDoorString}`);
// Any
let notSure = 4;
notSure = " maybe a string instead";
notSure = false; // ok, this is definitely boolean
let looselyTyped = 4;
console.log(`looselyTyped is of type: ${typeof looselyTyped}`);
// Void
function warnUser() {
    alert("This is my warning message");
}
// warnUser();
// Null and Undefined
let n = null; // Primitive types can be null
let m = undefined; // Primitive types can beundefined
let x_ = null; // same as x: any = null
let y = undefined; // same as y: any = undefined
// x_ =1; error
// y = 'hello'; error
// Never
function error(message) {
    throw new Error(message);
}
//error("Error");
// Symbol
// Type assertion
let someValue = "this is a string";
// down here we are telling typescript that someValue is a string and not any other type to perform a conversion
let strLength = someValue.length;
console.log(`strLength: ${typeof strLength}`);
let someValue2 = "this is a string";
let strLength2 = someValue.length;
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
