"use strict";

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const ADMIN_PASSWORD = "jqueryismyjam";
const PASSWORD2 = "aaa";

const name1 = "Alen";
const name2 = "Alex";

const userInput = prompt("Input password");
let message;

console.log(userInput);

if (userInput === ADMIN_PASSWORD) {
  message = `Добро пожаловать -- ${name1}`;
} else if (userInput === PASSWORD2) {
  message = `Добро пожаловать -- ${name2}`;
} else if (userInput === null) {
  message = `Отменнено пользователем`;
} else {
  message = `Доступ запрещен, неверный пароль!`;
}
alert(message);
