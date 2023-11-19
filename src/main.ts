// FUNCTIONS
console.log("Functions!!");

// Named function
function add(x: number, y: number) {
  return x + y;
}
// Anonymous function
let myAdd = function (x: number, y: number) {
  return x + y;
};

console.log(add(19, 2));

let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

let myAdd3 = function (x: number, y: number): number {
  return x + y;
};

// Inferring types

// myAdd has the full function type
let myAdd4 = function (x: number, y: number): number {
  return x + y;
};
// Parameters ’x’ and ’y’ — has "number" type
let myAdd5: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

let x = 4;

// Best general type

let xxx = [0, 1, null];

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Rhino extends Animal {}

class Elephant extends Animal {}

class Snake extends Animal {}
let zoo1 = [new Rhino(), new Elephant(), new Snake()];

let zoo2: Animal[] = [new Rhino(), new Elephant(), new Snake()];

// Context type

// window.onmousedown = function (mouseEvent) {
// console.log(mouseEvent.buton); //<- Error
// };

window.onmousedown = function (MouseEvent: any) {
  console.log(MouseEvent.buton); // < - No error is    shown now
};

// Anonymous Functions
let addVar = function (a: number, b: number) {
  return a + b;
};
var addVarResult = addVar(2, 3);
console.log("addVarResult: " + addVarResult);

// Type compatibility
interface Named {
  name: string;
}
class Person {
  name: string = "";
}
let p: Named;
// Everything fits, since the structural type system  p = new Person is used();

let x_new: Named;
// the output type for y is {name: string; location: string;}
let y = { name: "Jannet", location: "Boston" };
x_new = y; // OK because y has a property 'name'

function greeting(n: Named) {
  alert("Hello," + n.name);
}
// greeting(y); // OK

// Optional Parameters and Default Parameters

function buildName(firstName: string, lastName: string) {
  return firstName + "" + lastName;
}
// let result1 = buildName("Sam"); // error, too few parameters

/*
function buildName2(firstName?: string, lastName: string) { // A required parameter cannot follow an optional parameter.
  return firstName + "" + lastName;
}
*/

// let result2 = buildName("Sam", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Sam", "Adams"); // correct

function buildName3(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
let result4 = buildName3("Sam"); // all is correct now
// let result5 = buildName3("Sam", "Adams", "Sr."); // error, too many parameters
let result6 = buildName3("Sam", "Adams"); // correct

// default parameters
function buildName4(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
let result7 = buildName4("Sam"); // now all is correct, returns "Sam Smith"
let result8 = buildName4("Sam", undefined); // also works and returns "Sam Smith"
// let result9 = buildName4("Sam", "Adams", "Sr."); // error, too many parameters
let result10 = buildName4("Sam", "Adams"); // correct

function buildName5(firstName = "Will", lastName: string) {
  return `${firstName} ${lastName}`;
}
//let result11 = buildName5("Sam"); // error, too few parameters
//let result12 = buildName("Sam", "Adams", "Sr."); // error, too many parameters
let result13 = buildName5("Bob", "Adams"); // works and returns "Bob Adams"
let result14 = buildName5(undefined, "Adams"); // works and returns "Will Adams"

console.log(`result13: ${result13}, result14: ${result14}`);

// REST PARAMETERS

function buildName6(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName6("Jonas", "Pitt", "Lucas", "Samuel");

function buildName7(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

// this KEYWORD

let user = {
  name: "John",
  age: 30,
  SayHi() {
    // this is the " current object"
    console.log(this.name);
  },
};
user.SayHi(); // John

// Keyword “this” and Arrow Functions

// declaring an object deck without creating a specific class for it. This is an example of an object literal in JavaScript (or TypeScript), where you directly define the object's properties and methods within curly braces {}.
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// this PARAMETERS
