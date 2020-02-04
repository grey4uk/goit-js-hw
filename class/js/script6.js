"use strict";
import users from "./users.js";
const usersList = document.querySelector(".users");
const fragment = document.createDocumentFragment();
users.forEach(userElement => {
  const liGlobalLi = document.createElement("li");
  liGlobalLi.textContent = userElement.name;
  fragment.appendChild(liGlobalLi);
  const listOfFriends = document.createElement("ul");
  liGlobalLi.appendChild(listOfFriends);
  userElement.friends.forEach(addFriend => {
    const friend = document.createElement("li");
    friend.textContent = addFriend;
    listOfFriends.appendChild(friend);
  });
  listOfFriends.classList.add("closedList");
});
usersList.addEventListener("click", onClick);
let userLi;
let userUl;
function onClick(e) {
  console.log(e);
  clearList(userLi, userUl, e.target.querySelector("ul"));
  userLi = e.target;
  userUl = userLi.querySelector("ul");
  if (userUl) {
    userLi.classList.add("selectedUser");
    userUl.classList.remove("closedList");
    userUl.classList.add("openedList");
  } else {
    document.querySelector("#input").value = e.target.textContent;
  }
}
usersList.appendChild(fragment);
function clearList(a, b, needWork) {
  if (!needWork) {
    return;
  }
  if (a) {
    a.classList.remove("selectedUser");
  }
  if (b) {
    b.classList.remove("openedList");
    b.classList.add("closedList");
  }
}
///////////////////////////////add user to list with click on button//////////////////////////////////
// const inp = document.querySelector("#input");//for input
const but = document.querySelector("#but");
but.addEventListener("click", onButPress);
function onButPress(e) {
  const li = document.createElement("li");
  li.textContent = prompt("input new user");
  // li.textContent = inp;//for input
  usersList.appendChild(li);
}
