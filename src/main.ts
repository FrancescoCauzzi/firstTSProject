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
