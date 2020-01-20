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

const countryName = prompt("enter your country for delivery");

if (countryName === null) {
  alert("Canceled by user");
} else {
  switch (countryName.toLowerCase()) {
    case "china":
      deliveryCost = 100;
      break;

    case "chilli":
      deliveryCost = 250;
      break;

    case "australian":
      deliveryCost = 170;
      break;

    case "india":
      deliveryCost = 80;
      break;

    case "jamaica":
      deliveryCost = 120;
      break;
  }
}
if (deliveryCost === undefined) {
  alert("We have not our department in your country");
} else {
  alert(
    `Delivery to ${countryName.toUpperCase()}, will be cost ${deliveryCost}`
  );
}
