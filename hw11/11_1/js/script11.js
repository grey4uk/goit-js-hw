const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function randomColor() {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}
//////////////////////variant1///////////////////////////////////////////////
let timerId = null;

const focusOnStartBtn=document.querySelector('button[data-action="start"]');
const focusOnStopBtn=document.querySelector('button[data-action="stop"]');
focusOnStartBtn.addEventListener("click", onStartBtnClick);

function onStartBtnClick(e){
  timerId = setInterval(() => {
    e.target.parentNode.style.backgroundColor = randomColor();
  }, 1000);
  focusOnStopBtn.addEventListener("click", onStopBtnClick);
  focusOnStartBtn.removeEventListener("click", onStartBtnClick);
}
function onStopBtnClick(e){
  clearInterval(timerId);
  focusOnStartBtn.addEventListener("click", onStartBtnClick);
  focusOnStopBtn.removeEventListener("click", onStopBtnClick);
}
///////////////////////////////variant2////////////////////////////////////////////////
// let timerId = null;
// let start;
// document.addEventListener("click", onBtnClick);
// function onBtnClick(e) {
//   if (e.target.dataset.action === "start") {
//     start = e.target;
//     timerId = setInterval(() => {
//       start.parentNode.style.backgroundColor = randomColor();
//     }, 1000);
//     start.setAttribute("disabled", "true");
//   } else {
//     if (e.target.dataset.action === "stop") {
//       clearInterval(timerId);
//       if (!start) {
//         return;
//       }
//       start.removeAttribute("disabled");
//     }
//   }
// }
//////////////////////////////////variant3/////////////////////////////////////
// let timerId = null;
// const focusOnBody = document.querySelector("body");
// focusOnBody.addEventListener("click", onBtnClick);

// let start;
// let stop;
// function onBtnClick(e) {
//   if (e.target.dataset.action === "start") {
//     start = e.target;
//     timerId = setInterval(() => {
//       focusOnBody.style.backgroundColor =
//         colors[randomIntegerFromInterval(0, colors.length - 1)];
//       console.log(randomIntegerFromInterval(0, colors.length - 1));
//     }, 1000);
//     start.setAttribute("disabled", "true");
//     if (stop) {
//       stop.removeAttribute("disabled");
//     }
//   } else if (e.target.dataset.action === "stop") {
//     if (!start || !timerId) {
//       return;
//     }
//     stop = e.target;
//     clearInterval(timerId);
//     start.removeAttribute("disabled");
//     stop.setAttribute("disabled", "true");
//   }
// }
