"use strict";
console.log("-----------------------task4--------------------------");

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// debugger;
class StringBuilder {
  constructor(message) {
    this._message = message;
  };
  get message() {
    return this._message;
  };

  append(symbol){
    this._message = this._message.concat(symbol);
  }
  prepend(symbol){
    this._message = symbol.concat(this._message);
  }
  pad(symbol){
      this._message = (symbol.concat(this._message)).concat(symbol);
  }

}
const builder = new StringBuilder(".");
console.log(builder.message);

builder.append("^");
console.log(builder.message); // '.^'

builder.prepend("^");
console.log(builder.message); // '^.^'

builder.pad("=");
console.log(builder.message); // '=^.^='
