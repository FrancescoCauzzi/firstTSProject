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

eval("\n// FUNCTIONS\nconsole.log(\"Functions!!\");\n// Named function\nfunction add(x, y) {\n    return x + y;\n}\n// Anonymous function\nlet myAdd = function (x, y) {\n    return x + y;\n};\nconsole.log(add(19, 2));\nlet myAdd2 = function (x, y) {\n    return x + y;\n};\nlet myAdd3 = function (x, y) {\n    return x + y;\n};\n// Inferring types\n// myAdd has the full function type\nlet myAdd4 = function (x, y) {\n    return x + y;\n};\n// Parameters ’x’ and ’y’ — has \"number\" type\nlet myAdd5 = function (x, y) {\n    return x + y;\n};\nlet x = 4;\n// Best general type\nlet xxx = [0, 1, null];\nclass Animal {\n    move() {\n        console.log(\"Moving along!\");\n    }\n}\nclass Rhino extends Animal {\n}\nclass Elephant extends Animal {\n}\nclass Snake extends Animal {\n}\nlet zoo1 = [new Rhino(), new Elephant(), new Snake()];\nlet zoo2 = [new Rhino(), new Elephant(), new Snake()];\n// Context type\n// window.onmousedown = function (mouseEvent) {\n// console.log(mouseEvent.buton); //<- Error\n// };\nwindow.onmousedown = function (MouseEvent) {\n    console.log(MouseEvent.buton); // < - No error is    shown now\n};\n// Anonymous Functions\nlet addVar = function (a, b) {\n    return a + b;\n};\nvar addVarResult = addVar(2, 3);\nconsole.log(\"addVarResult: \" + addVarResult);\n\n\n//# sourceURL=webpack://firsttsproject/./src/main.ts?");

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