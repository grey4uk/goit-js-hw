"use strict";
// все числа целые.
// [+,-,*,/]
// 2+2
// 2 +  2
// 2+ 2
// 2+     2
// Введите пример


const opePlus = function(a, b) {
  return a + b;
};
const opeMinus = function(a, b) {
  return a - b;
};
const opeDiv = function(a, b) {
  return a / b;
};
const opeMult = function(a, b) {
  return a * b;
};
const operations = { '+': opePlus,'-': opeMinus, '/': opeDiv, '*': opeMult };
function parseInput(message) {
  const messageArr = message.split('');
  while (message.includes(' ')) {
    // message = message.substr(0, message.indexOf(' '));
    const prefix = message.substr(0, message.indexOf(' '));
    const sufix = message.substr(message.indexOf(' ') + 1);
    message = prefix + sufix;
  }
  let symbol;
  let operation;
  for (const cSymbol of message) {
    if (Number.isNaN(Number(cSymbol))) {
      operation = operations[cSymbol];
      symbol = cSymbol;
      break;
    }
  }
  const [par1, par2] = message.split(symbol);
  return `${message} : ${calcRezult(par1, par2, operation)}`;
}
function calcRezult(a, b, ope) {
  a = Number(a);
  b = Number(b);
  //ЭТУ ФУНКЦИЮ ТЕ ТРОГАТЬ!
  return ope(a, b);
}
console.log(parseInput(' 2+3 '));
console.log(parseInput('2+3')); //5
console.log(parseInput('2 +3')); //5
console.log(parseInput('2+   3')); //5
console.log(parseInput('3   +   13')); //16
console.log(parseInput('3   -   3')); //0
console.log(parseInput('3   *   1')); //3
console.log(parseInput('6   /   2')); //3