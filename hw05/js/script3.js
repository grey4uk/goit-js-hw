"use strict";
console.log("-----------------------task3--------------------------");

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(arrayItems) {
    this.arrayItems = arrayItems;
  }
  getItems(arrayItems) {
    return this.arrayItems;
  }
  addItem(item) {
    return this.arrayItems.push(item);
  }
  removeItem(item){
      for(this.arrayItem of this.arrayItems){
          if(this.arrayItem===item){
              this.arrayItems.splice(this.arrayItems.indexOf(this.arrayItem),1)
          }
      }
      return this.arrayItems;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);
storage.getItems();
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид"); 
console.table(storage.arrayItems); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.arrayItems); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
