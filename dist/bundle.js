/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Francesco\"));\n// Variables\nvar test = \"this is a string\";\nvar firstNumber = 1;\nfunction sum(a, b) {\n    return a + b;\n}\nlet result = sum(1, 2);\nconsole.log(result);\nlet decimal = 6;\nlet hex = 0xf00d;\nlet binary = 0b1010;\nlet octal = 0o744;\nlet name2 = \"bob\";\nconsole.log(name2);\nname2 = \"smith\";\nconsole.log(name2);\nlet name_ = \"Gene\";\nlet age = 37;\n// alt + 96 to generate backticks\nlet sentence = `Hello, my name is ${name_}, \r\n  I'll be ${age + 1} years old next month.`;\nconsole.log(sentence);\n// Arrays\n//The first is to denote the type of array elements before []:\nlet list1 = [1, 2, 3];\n//The second way is to use the generalization Array<elemType>:\nlet list2 = [1, 2, 3];\nlist2.forEach((element) => {\n    console.log(element);\n});\n// Tuple\n// Declare a tuple type\nlet x;\n// Initialize it\nx = [\"hello\", 10]; // OK\n// Initialize it incorrectly\n//x = [10, \"hello\"]; // Error\nconsole.log(x[0].substring(1)); // OK\n//console.log(x[1].substr(1)); // Error, 'number' doesnot have 'substr'\nconsole.log(`x[0]: ${x[0]}`);\nconsole.log(`x[1]: ${x[1]}`);\n//console.log(`x[2]: ${x[2]}`); erro\nlet y1;\nlet y2;\n[y1, y2] = x;\nconsole.log(`y1: ${y1}`);\nconsole.log(`y2: ${y2}`);\n// Optional tuples\nlet optionalTuple;\noptionalTuple = [\"test2\", true];\nconsole.log(`optionalTuple: ${optionalTuple}`);\noptionalTuple = [\"test\"];\nconsole.log(`optionalTuple: ${optionalTuple}`);\n// Enums\nvar Color;\n(function (Color) {\n    Color[Color[\"Red\"] = 0] = \"Red\";\n    Color[Color[\"Green\"] = 1] = \"Green\";\n    Color[Color[\"Blue\"] = 2] = \"Blue\";\n})(Color || (Color = {}));\nlet c = Color.Green;\nconsole.log(c); // This will output '1'\nconsole.log(Color[c]); // This will output 'Green'\n// String Enums\nvar DoorStateString;\n(function (DoorStateString) {\n    DoorStateString[\"Open\"] = \"open\";\n    DoorStateString[\"Closed\"] = \"closed\";\n    DoorStateString[\"Ajar\"] = \"ajar\";\n})(DoorStateString || (DoorStateString = {}));\nvar openDoorString = DoorStateString.Open;\nconsole.log(`openDoorString = ${openDoorString}`);\n// Any\nlet notSure = 4;\nnotSure = \" maybe a string instead\";\nnotSure = false; // ok, this is definitely boolean\nlet looselyTyped = 4;\nconsole.log(`looselyTyped is of type: ${typeof looselyTyped}`);\n// Void\nfunction warnUser() {\n    alert(\"This is my warning message\");\n}\n// warnUser();\n// Null and Undefined\nlet n = null; // Primitive types can be null\nlet m = undefined; // Primitive types can beundefined\nlet x_ = null; // same as x: any = null\nlet y = undefined; // same as y: any = undefined\n// x_ =1; error\n// y = 'hello'; error\n// Never\nfunction error(message) {\n    throw new Error(message);\n}\n//error(\"Error\");\n// Symbol\n// Type assertion\nlet someValue = \"this is a string\";\n// down here we are telling typescript that someValue is a string and not any other type to perform a conversion\nlet strLength = someValue.length;\nconsole.log(`strLength: ${typeof strLength}`);\nlet someValue2 = \"this is a string\";\nlet strLength2 = someValue.length;\nfunction f() {\n    var a = 1;\n    a = 2;\n    var b = g();\n    a = 3;\n    return b;\n    function g() {\n        return a;\n    }\n}\nconsole.log(f());\n\n\n//# sourceURL=webpack://firsttsproject/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;