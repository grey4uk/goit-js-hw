"use strict";
import users from "./users.js";
console.log("---------------------------task2-----------------------------");
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(user => user.eyeColor.includes(color));
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
