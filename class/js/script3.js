"use strict";

///count number of letter in sentence//////////////
////////variant of Serhiy Andreev//////////////////

const mesagge = "Thios   iis coii   ii ss op ooooll";
let number = 1;
const counter = function(mesagge) {
  let newMassage = mesagge.toLowerCase();
  newMassage = newMassage.split("");
  while( newMassage.includes(' ')){
  for (let i = 1; i < newMassage.length; i++) {
    if (newMassage[i] === " ") {
      newMassage.splice(i, 1); // Убрали пробелы
    }
  }
}
  for (let j = 0; j < newMassage.length; j++) {
    for (let i = j; i < newMassage.length; i++) {
      if (newMassage[j] === newMassage[i + 1]) {
        newMassage.splice(i + 1, 1);
        i = i - 1;
        number++;
      }
    }
    console.log(`${newMassage[j]}--${number}`);
    number = 1;
  }
  return newMassage;
};
console.log(counter(mesagge));



////////////////////////another variant//////////////////////////////////
'use strict';
const string = 'Подсчет кол-ва вхождений каждого символа в строке',
    sums = {};
string.split('').map(function (e) {
    e = e.toLowerCase();
    sums[e] = !sums[e] ? 1 : sums[e] + 1;
});
console.log(sums);