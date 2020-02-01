"use strict";
import users from "./users.js";
console.log("---------------------------task1-----------------------------");
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  // твой код
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
