"use strict";

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
//  Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
//  Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let deliveryCost;

const countryName = prompt("Введите страну доставки");

if (countryName === null) {
  alert("Отменено пользователем");
} else {
  switch (countryName.toLowerCase()) {
    case "китай":
      deliveryCost = 100;
      break;

    case "чили":
      deliveryCost = 250;
      break;

    case "австралия":
      deliveryCost = 170;
      break;

    case "індія":
      deliveryCost = 80;
      break;

    case "ямайка":
      deliveryCost = 120;
      break;
    default:
      break;
  }
}
if (deliveryCost === undefined) {
  alert("Нет доставки в вашу страну");
} else {
  alert(
    `Доставка в ${countryName.}, будет стоить ${deliveryCost}`
  );
}
