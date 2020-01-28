"use strict";
console.log("-------------------task3-------------------");
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
////////////////////////////////////1-ST VARIANT/////////////////////////////////////////////////
// const findBestEmployee = function(employees) {
//   // твой код
//   const entries = Object.entries(employees);
//   let bestEmployee = entries[0];
//   for (const entrie of entries) {
//     if (entrie[1] > bestEmployee[1]) {
//       bestEmployee = entrie;
//     }
//   }
//   return bestEmployee[0];
// };
///////////////////////////////ANOTHER VARIANT////////////////////////////////////////////////
const findBestEmployee = function(employees){


const keys=Object.keys(employees);
let bestEmploye=keys[0];
for (let i=1; i<=keys.length; i++){
 if(employees[keys[i]]>employees[bestEmploye]){
   bestEmploye=keys[i];
 }
  }
return bestEmploye;
 };


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
