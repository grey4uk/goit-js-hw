"use strict";
console.log("-------------------task2-------------------");
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function(obj) {
  // твой код
  let i = 0;
  for (const keys in obj) {
    i++;
  }
  return i;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//////////////another variant////////////////////////////
// const countProp = function(obj) {
//     // твой код
//    return Object.keys(obj).length;
//   };
///////////////////////////////////////////////////////////

/////////////////calling for another variant///////////////////////////////
// console.table(countProp({})); // 0

// console.table(countProp({ name: "Mango", age: 2 })); // 2

// console.table(countProp({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
