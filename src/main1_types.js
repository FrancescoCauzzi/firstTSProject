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
// Scoping
// down here is how not to write a function (avoid using the var keyword instead use let)
function sumMatrix(matrix) {
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
let a1 = 4;
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
let { a, b } = o; // Destructuring with types also
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
    console.log(`a: ${a}, b: ${b}`);
}
keepWholeObject({ a: "hello" }); // b will be defaulted to 1001
keepWholeObject({ a: "hello", b: 42 }); // b will use the value 42
const server = {
    hostname: "Pikachu",
    location: "RM1",
    active: true,
    public_address: {
        netmask: "0000000000000",
        gateway: "0000000000000",
        address: "0000000000000",
    },
    getPublicAddresInString: function () {
        return `${this.public_address.address}, ${this.public_address.gateway}, ${this.public_address.netmask}`;
    },
};
class MyCustomCache {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
        this.items = {}; //"dictionary", "map", or "associative array"
        // Other cache methods (removeItem, clear, etc.) can be added here
    }
    addItem(key, item) {
        if (this.size === 0) {
            this.first = item;
        }
        this.items[key] = item;
        this.last = item;
        this.size++;
    }
    getItem(key) {
        return this.items[key];
    }
}
// Usage
const cache = new MyCustomCache();
cache.addItem("item1", { id: "1", data: "Data 1" });
cache.addItem("item2", { id: "2", data: "Data 2" });
console.log(cache.getItem("item1")); // Retrieves the first item
console.log(cache.items); // show the entire
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
    }
}
class MyCircle {
    constructor(radius) {
        this.kind = "circle";
        this.radius = radius;
    }
}
let circle1 = new MyCircle(10);
console.log(area(circle1));
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
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
let p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
// Readonly arrays
// (arrays with from which all methods that modify it are removed)
let readOnlyArr = [1, 2, 3, 4];
let ro = readOnlyArr;
ro.forEach((el) => console.log(el));
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// this restriction can still be circumvented by using typecasting
let typeCasting = ro;
let squareOptions = { colour: "red", width: 100 }; // No error on this line
let mySquareh = squareOptions; // Error if 'colour' is not allowed in SquareConfig
let mySearch;
mySearch = function (src, subStr) {
    let result = src.search(subStr);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
// The search method used in these functions is a JavaScript string method that searches for a match using a string or a regular expression, returning the position of the match or -1 if no match is found.
// this down here is also valid
let mySearch2;
mySearch = function (src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
let myArray;
myArray = ["Bob", "Josh"];
let myStr = myArray[0];
let myNumberArray;
myNumberArray = [1, 2, 3, 6];
let myDict;
myDict = {
    length: 10,
    width: 15,
};
console.log(myDict.width);
