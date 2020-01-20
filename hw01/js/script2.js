"use strict";

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;

const total = 100;

const ordered = prompt("Enter your order");
if (ordered > total) {
  console.log("Wrong count of order, we haven`t enough");
} else if (ordered === null) {
  console.log("Canceled by user");
} else {
  console.log("Order recieved, manager call you");
}
