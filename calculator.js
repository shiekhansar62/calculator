"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
let n1 = parseInt(prompt('please enter your first number'));
let n2 = parseInt(prompt('please enter your second number'));
let operator = prompt('please enter your operator (+, -, *, /): ');
if (operator == '+') {
    console.log(`the answer of ${n1} ${operator}  ${n2} = ${n1 + n2}`);
}
else if (operator == '-') {
    console.log(`the answer of ${n1} ${operator}  ${n2} = ${n1 - n2}`);
}
else if (operator == '*') {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 * n2}`);
}
else if (operator == '/') {
    console.log(`the answer of ${n1}  ${operator} ${n2} = ${n1 / n2}`);
}
else {
    console.log("please select the correct operator");
}
// for the sake of github desktop
