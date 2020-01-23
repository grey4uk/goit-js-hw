"use strict";
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

console.log("---------task7-----------");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  // твой код
  let isValid;
  login.length >= 4 && login.length <= 16
    ? (isValid = true)
    : (isValid = false);
  return isValid;
};

const isLoginUnique = function(allLogins, login) {
  // твой код
  let isUnique;
  !allLogins.includes(login) ? (isUnique = true) : (isUnique = false);
  return isUnique;
};

const addLogin = function(allLogins, login) {
  // твой код
  let message;
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = "Логин успешно добавлен!";
    } else {
      message = "Такой логин уже используется!";
    }
  } else {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
