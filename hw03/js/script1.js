"use strict";

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user["hobby"] = "skydiving";

user.premium = false;

const entries = Object.entries(user);

for(const entrie of entries){
    const key=entrie[0];
    const value=entrie[1];
    console.log(`${key} : ${value}`);
}

console.table(user);
