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

eval("\n// FUNCTIONS\nconsole.log(\"Functions!!\");\n// Named function\nfunction add(x, y) {\n    return x + y;\n}\n// Anonymous function\nlet myAdd = function (x, y) {\n    return x + y;\n};\nconsole.log(add(19, 2));\nlet myAdd2 = function (x, y) {\n    return x + y;\n};\nlet myAdd3 = function (x, y) {\n    return x + y;\n};\n// Inferring types\n// myAdd has the full function type\nlet myAdd4 = function (x, y) {\n    return x + y;\n};\n// Parameters ’x’ and ’y’ — has \"number\" type\nlet myAdd5 = function (x, y) {\n    return x + y;\n};\nlet x = 4;\n// Best general type\nlet xxx = [0, 1, null];\nclass Animal {\n    move() {\n        console.log(\"Moving along!\");\n    }\n}\nclass Rhino extends Animal {\n}\nclass Elephant extends Animal {\n}\nclass Snake extends Animal {\n}\nlet zoo1 = [new Rhino(), new Elephant(), new Snake()];\nlet zoo2 = [new Rhino(), new Elephant(), new Snake()];\n// Context type\n// window.onmousedown = function (mouseEvent) {\n// console.log(mouseEvent.buton); //<- Error\n// };\nwindow.onmousedown = function (MouseEvent) {\n    console.log(MouseEvent.buton); // < - No error is    shown now\n};\n// Anonymous Functions\nlet addVar = function (a, b) {\n    return a + b;\n};\nvar addVarResult = addVar(2, 3);\nconsole.log(\"addVarResult: \" + addVarResult);\nclass Person {\n    constructor() {\n        this.name = \"\";\n    }\n}\nlet p;\n// Everything fits, since the structural type system  p = new Person is used();\nlet x_new;\n// the output type for y is {name: string; location: string;}\nlet y = { name: \"Jannet\", location: \"Boston\" };\nx_new = y; // OK because y has a property 'name'\nfunction greeting(n) {\n    alert(\"Hello,\" + n.name);\n}\n// greeting(y); // OK\n// Optional Parameters and Default Parameters\nfunction buildName(firstName, lastName) {\n    return firstName + \"\" + lastName;\n}\n// let result1 = buildName(\"Sam\"); // error, too few parameters\n/*\nfunction buildName2(firstName?: string, lastName: string) { // A required parameter cannot follow an optional parameter.\n  return firstName + \"\" + lastName;\n}\n*/\n// let result2 = buildName(\"Sam\", \"Adams\", \"Sr.\"); // error, too many parameters\nlet result3 = buildName(\"Sam\", \"Adams\"); // correct\nfunction buildName3(firstName, lastName) {\n    if (lastName)\n        return firstName + \" \" + lastName;\n    else\n        return firstName;\n}\nlet result4 = buildName3(\"Sam\"); // all is correct now\n// let result5 = buildName3(\"Sam\", \"Adams\", \"Sr.\"); // error, too many parameters\nlet result6 = buildName3(\"Sam\", \"Adams\"); // correct\n// default parameters\nfunction buildName4(firstName, lastName = \"Smith\") {\n    return firstName + \" \" + lastName;\n}\nlet result7 = buildName4(\"Sam\"); // now all is correct, returns \"Sam Smith\"\nlet result8 = buildName4(\"Sam\", undefined); // also works and returns \"Sam Smith\"\n// let result9 = buildName4(\"Sam\", \"Adams\", \"Sr.\"); // error, too many parameters\nlet result10 = buildName4(\"Sam\", \"Adams\"); // correct\nfunction buildName5(firstName = \"Will\", lastName) {\n    return `${firstName} ${lastName}`;\n}\n//let result11 = buildName5(\"Sam\"); // error, too few parameters\n//let result12 = buildName(\"Sam\", \"Adams\", \"Sr.\"); // error, too many parameters\nlet result13 = buildName5(\"Bob\", \"Adams\"); // works and returns \"Bob Adams\"\nlet result14 = buildName5(undefined, \"Adams\"); // works and returns \"Will Adams\"\nconsole.log(`result13: ${result13}, result14: ${result14}`);\n// REST PARAMETERS\nfunction buildName6(firstName, ...restOfName) {\n    return firstName + \" \" + restOfName.join(\" \");\n}\nlet employeeName = buildName6(\"Jonas\", \"Pitt\", \"Lucas\", \"Samuel\");\nfunction buildName7(firstName, ...restOfName) {\n    return firstName + \" \" + restOfName.join(\" \");\n}\nlet buildNameFun = buildName;\n// this KEYWORD\nlet user = {\n    name: \"John\",\n    age: 30,\n    SayHi() {\n        // this is the \" current object\"\n        console.log(this.name);\n    },\n};\nuser.SayHi(); // John\n// Keyword “this” and Arrow Functions\n// declaring an object deck without creating a specific class for it. This is an example of an object literal in JavaScript (or TypeScript), where you directly define the object's properties and methods within curly braces {}.\nlet deck = {\n    suits: [\"hearts\", \"spades\", \"clubs\", \"diamonds\"],\n    cards: Array(52),\n    createCardPicker: function () {\n        return () => {\n            let pickedCard = Math.floor(Math.random() * 52);\n            let pickedSuit = Math.floor(pickedCard / 13);\n            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };\n        };\n    },\n};\nlet cardPicker = deck.createCardPicker();\nlet pickedCard = cardPicker();\nconsole.log(\"card: \" + pickedCard.card + \" of \" + pickedCard.suit);\n// this PARAMETERS\n\n\n//# sourceURL=webpack://firsttsproject/./src/main.ts?");

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