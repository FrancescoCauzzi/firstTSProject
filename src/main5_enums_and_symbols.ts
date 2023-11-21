// ENUMS

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum FileAccess {
  // constant elements
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // evaluated elements
  G = "123".length,
}

enum Enum {
  A,
}
let a = Enum.A; // a is 0
console.log(a);
let nameOfA = Enum[Enum.A]; // nameOfA is "A"
console.log(nameOfA);

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

function someFunc(op: Directions) {
  switch (op) {
    case Directions.Up:
      // some action…
      break;
    case Directions.Down:
      // some action…
      break;
    case Directions.Left:
      // some action…
      break;
    case Directions.Right:
      // some action…
      break;
    default:
      // optional: handle unexpected cases
      break;
  }
}

// Declare Enums

declare enum Enum2 {
  A = 1,
  B,
  C = 2,
}

// SYMBOLS (a primitive data type similar to number and string)

let sym1 = Symbol();
let sym2 = Symbol("key"); // Optional string key

let sym3 = Symbol("key");
console.log(sym2 === sym3); // false, symbols are unique

let sym = Symbol();
let obj = {
  [sym]: "value",
};
console.log(obj[sym]); // "value"

const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol]() {
    return "C";
  }
}
let c = new C();
let className = c[getClassNameSymbol](); // "C"
