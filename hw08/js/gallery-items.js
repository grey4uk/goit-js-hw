'use strict'
import images from "./images.js";
const imagesList = document.querySelector(".gallery");
imagesList.addEventListener("click", onImgClick);
// debugger;
// console.log(imagesList);
function createImagesList(imagesObj) {
  return imagesObj.reduce((acc, image) => {
    return (acc = acc.concat(
      `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`
    ));
  }, "");
}
imagesList.insertAdjacentHTML("afterbegin", createImagesList(images));

const lightBoxFocus = document.querySelector(".lightbox");
const lightBoxImgFocus = document.querySelector(".lightbox__image");
const closeModal = document.querySelector(".lightbox__content");
const closeModalOnBtnClick = document.querySelector(".lightbox__button");

// debugger;
function onImgClick(e) {
  // console.log('-->',e.target !== e.currentTarget);
  const clickImg = e.target;
//  if (clickImg.tagName === "A"){return;}
  if (e.target !== e.currentTarget) {
  lightBoxFocus.classList.add("is-open");
  lightBoxImgFocus.src = clickImg.dataset.source;
  window.addEventListener("keydown", closeModalOnEsc);
  closeModal.addEventListener("click", closeModalOnClick);
  closeModalOnBtnClick.addEventListener("click", closeModalOnClick);}
  return;
}

function closeModalWindow() {
  lightBoxFocus.classList.remove("is-open");
  lightBoxImgFocus.src = "";
  window.removeEventListener("keydown", closeModalOnEsc);
  closeModal.removeEventListener("click", closeModalOnClick);
  closeModalOnBtnClick.removeEventListener("click", closeModalOnClick);
}

function closeModalOnClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModalWindow();
}

function closeModalOnEsc(e) {
  //  console.log(e);
  e.preventDefault();
  if (e.code !== "Escape") {
    return;
  }
  closeModalWindow();
}
