import images from "./images.js";
const imagesList = document.querySelector(".gallery");
imagesList.addEventListener("click", onImgClick);
// debugger;
console.log(imagesList);
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
  const clickImg = e.target;
  const sorceImage = clickImg.querySelector("img");
  if (e.target === e.currentTarget) {
    return;
  } else {
    lightBoxFocus.classList.add("is-open");
    lightBoxImgFocus.src = sorceImage.dataset.source;
    closeModal.addEventListener("click", closeModalOnClick);
    window.addEventListener("keydown", closeModalOnEsc);
    closeModalOnBtnClick.addEventListener("click", closeModalOnClick);
  }
}

function closeModalWindow() {
  lightBoxFocus.classList.remove("is-open");
  lightBoxImgFocus.src = "";
  closeModal.removeEventListener("click", closeModalOnClick);
  window.removeEventListener("keydown", closeModalOnEsc);
  closeModalOnBtnClick.removeEventListener("click", closeModalOnClick);
}

function closeModalOnClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModalWindow();
}

function closeModalOnEsc(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModalWindow();
}
