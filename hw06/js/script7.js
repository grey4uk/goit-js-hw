"use strict";
import users from "./users.js";
console.log("---------------------------task7-----------------------------");
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
  return users.reduce((acc, user) => (acc += user.balance), 0);
};

console.log(calculateTotalBalance(users)); // 20916
