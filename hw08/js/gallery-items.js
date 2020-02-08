"use strict";
import images from "./images.js";
const imagesList = document.querySelector(".js-gallery");
imagesList.addEventListener("click", onImgClick);
let arrayOfImgSorces = [];

// debugger;
// console.log(imagesList);
function createImagesList(imagesObj) {
  return imagesObj.reduce((acc, image) => {
    arrayOfImgSorces.push(`${image.original}`);
    return (acc = acc.concat(
      `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></li>`
    ));
  }, "");
}
console.log(arrayOfImgSorces);
imagesList.insertAdjacentHTML("afterbegin", createImagesList(images));

const lightBoxFocus = document.querySelector(".js-lightbox");
const lightBoxImgFocus = document.querySelector(".lightbox__image");
const closeModal = document.querySelector(".lightbox__content");
const closeModalOnBtnClick = document.querySelector(".lightbox__button");

// debugger;
function onImgClick(e) {
  // console.log('-->',e.target !== e.currentTarget);
  const clickImg = e.target;
  if (clickImg.tagName === "A") {
    return;
  }
  if (e.target !== e.currentTarget) {
    lightBoxFocus.classList.add("is-open");
    lightBoxImgFocus.setAttribute("src", clickImg.dataset.source);
    window.addEventListener("keydown", pressButton);
    closeModal.addEventListener("click", closeModalOnClick);
    closeModalOnBtnClick.addEventListener("click", closeModalOnClick);
  }
}

function closeModalWindow() {
  lightBoxFocus.classList.remove("is-open");
  lightBoxImgFocus.removeAttribute("src");
  window.removeEventListener("keydown", pressButton);
  closeModal.removeEventListener("click", closeModalOnClick);
  closeModalOnBtnClick.removeEventListener("click", closeModalOnClick);
}

function closeModalOnClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModalWindow();
}
function pressButton(e) {
  let indexInArrayOfImgSorces;
  if (!indexInArrayOfImgSorces) {
    indexInArrayOfImgSorces = arrayOfImgSorces.indexOf(lightBoxImgFocus.src);
  }
  // console.log(counter);
  if (e.code === "Escape") {
    closeModalWindow();
  } else if (e.code === "ArrowRight") {
    if (indexInArrayOfImgSorces < arrayOfImgSorces.length - 1) {
      lightBoxImgFocus.setAttribute(
        "src",
        arrayOfImgSorces[indexInArrayOfImgSorces + 1]
      );
    } else {
      indexInArrayOfImgSorces = 0;
      lightBoxImgFocus.setAttribute(
        "src",
        arrayOfImgSorces[indexInArrayOfImgSorces]
      );
    }
    // console.log(counter);
  } else if (e.code === "ArrowLeft") {
    if (indexInArrayOfImgSorces >= 1) {
      lightBoxImgFocus.setAttribute(
        "src",
        arrayOfImgSorces[indexInArrayOfImgSorces - 1]
      );
    } else {
      indexInArrayOfImgSorces = arrayOfImgSorces.length - 1;
      lightBoxImgFocus.setAttribute(
        "src",
        arrayOfImgSorces[indexInArrayOfImgSorces]
      );
    }
    // console.log(counter);
  }
}
