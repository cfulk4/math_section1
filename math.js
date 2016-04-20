#!/usr/bin/env node
var n1 = +process.argv[3],   // "+" infront makes adding work
    n2 = +process.argv[4],
    operator = process.argv[2];   //operator for math 
if (operator === 'add' || "+" === operator) {console.log (n1 + n2);}  // === is better than ==
if (operator == 'subtract') {console.log(n1 - n2);}
if (operator == 'multiply') {console.log(n1 * n2);}
if (operator == 'divide') {console.log(n1 / n2);}
//npm "node package manager" to install and uninstall
// "npam install -g (stands for global) jasmine" If doesn't work put "sudo" in front
