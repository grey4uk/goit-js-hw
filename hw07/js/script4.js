"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */
// debugger;
let counterValue = 0;
const butt = document.querySelector("#counter");
butt.addEventListener("click", onButtPress); 
// butt.addEventListener("decrement", onButtPress);
function onButtPress(e) {
console.log(e);
  let incrementPress = e.target.dataset.action;
  // let decrementPress = butt.querySelector("decrement"); 
    if (incrementPress==="increment") {
    incrementJob();
  } else if (incrementPress==="decrement") {
    decrementJob();
  }
  document.querySelector("#value").textContent=counterValue;
}
function incrementJob(){
  counterValue+=1;
  // document.querySelector("#value").textContent=counterValue;
};
function decrementJob(){
  counterValue-=1;
  // document.querySelector("#value").textContent=counterValue;
};