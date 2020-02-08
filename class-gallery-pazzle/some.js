"use strict";
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg",
    description: "Hokkaido Flower"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
    description: "Aerial Beach View"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea"
  }
];
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
  console.log("-->", e.target !== e.currentTarget);
  // e.preventDefault();
  const clickImg = e.target;
  if (clickImg.tagName === "A") {
    return;
  }
  if (e.target !== e.currentTarget) {
    lightBoxFocus.classList.add("is-open");
    lightBoxImgFocus.src = clickImg.dataset.source;
    window.addEventListener("keydown", closeModalOnEsc);
    closeModal.addEventListener("click", closeModalOnClick);
    closeModalOnBtnClick.addEventListener("click", closeModalOnClick);
  }
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
  console.log(e);
  // e.preventDefault();
  // if (e.code === "Escape") {
  //   return;
  // }
  closeModalWindow();
}
