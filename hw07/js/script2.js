"use strict";

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
////////////////////////////version 1////////////////////////////////////////////////////
// function addList(arrayOfIngredients) {
//   const ingredientsList = arrayOfIngredients.reduce(
//     (acc, ingredient) => (acc = acc + `<li>${ingredient}</li>`),
//     ""
//   );
//   return ingredientsList;
// }

// const list = document.querySelector("#ingredients");
// list.insertAdjacentHTML("afterbegin", addList(ingredients));

///////////////////////////version 2//////////////////////////////////////////////////////
const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient=>{
  const ingredientLi=document.createElement("li");
  ingredientLi.textContent = ingredient;
  fragment.appendChild(ingredientLi);
});
list.appendChild(fragment);