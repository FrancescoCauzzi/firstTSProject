"use strict";
// FUNCTIONS
console.log("Functions!!");
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
let myAdd = function (x, y) {
    return x + y;
};
console.log(add(19, 2));
let myAdd2 = function (x, y) {
    return x + y;
};
let myAdd3 = function (x, y) {
    return x + y;
};
// Inferring types
// myAdd has the full function type
let myAdd4 = function (x, y) {
    return x + y;
};
// Parameters ’x’ and ’y’ — has "number" type
let myAdd5 = function (x, y) {
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
class Rhino extends Animal {
}
class Elephant extends Animal {
}
class Snake extends Animal {
}
let zoo1 = [new Rhino(), new Elephant(), new Snake()];
let zoo2 = [new Rhino(), new Elephant(), new Snake()];
// Context type
// window.onmousedown = function (mouseEvent) {
// console.log(mouseEvent.buton); //<- Error
// };
window.onmousedown = function (MouseEvent) {
    console.log(MouseEvent.buton); // < - No error is    shown now
};
// Anonymous Functions
let addVar = function (a, b) {
    return a + b;
};
var addVarResult = addVar(2, 3);
console.log("addVarResult: " + addVarResult);
