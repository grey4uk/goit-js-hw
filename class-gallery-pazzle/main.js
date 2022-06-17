"use strict";

import gallery from "./gallery-items.js";
// import gallery from "./myImages.js";
import PuzzleGame from "./puzzleGame/main1.js";

const letUl = document.querySelector("ul.js-gallery");
const lightbox = document.querySelector(".lightbox");
//const btn = document.querySelector('[data-action="close-lightbox"]');

function insertImages(arr) {
  const arrImg = arr.map(key => {
    const imgEl = document.createElement("li");
    imgEl.classList.add("gallery__item");
    imgEl.insertAdjacentHTML(
      "afterbegin",
      `<a class="gallery__link" href='#'>
      <img class="gallery__image" 
        src='${key.preview}' 
        data-source='${key.original}'
        alt='${key.description}'>
        </a>`
    );
    return imgEl;
  });
  return letUl.prepend(...arrImg);
}

function onClick(e) {
  const gameBox=document.querySelector(".game");
  gameBox.style.display="block",
  new PuzzleGame(
    e.target.dataset.source,
    3,
    3,
    gameBox,
    letUl
  );
  letUl.style.display='none';

return;

}

function onClose(e) {
  if (e.type === "click") {
    if (e.target.tagName === "IMG") {
      return;
    }
    lightbox.classList.remove("is-open");
    document.removeEventListener("keydown", onClose);
    lightbox.removeEventListener("click", onClose);
  } else {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-open");
      document.removeEventListener("keydown", onClose);
      lightbox.removeEventListener("click", onClose);
    }
    if (e.key === "ArrowLeft") {
      lightbox.querySelector(".lightbox__image").src = left(
        lightbox.querySelector(".lightbox__image").src
      );
    } else if (e.key === "ArrowRight") {
      lightbox.querySelector(".lightbox__image").src = right(
        lightbox.querySelector(".lightbox__image").src
      );
    }
  }
}

insertImages(gallery);


letUl.addEventListener("click", onClick);
// btn.addEventListener("click", onClose);



function right(src) {
  let fIndx;
  const arrLe = gallery.length - 1;
  const adrr = gallery.find((key, i) => {
    fIndx = i + 1;
    if (fIndx > arrLe) {
      fIndx = 0;
    }
    return key.original === src;
  });
  const adrrLet = gallery[fIndx].original;
  return adrrLet;
}

function left(src) {
  let fIndx;
  const arrLe = gallery.length - 1;
  const adrr = gallery.find((key, i) => {
    fIndx = i - 1;
    if (fIndx < 0) {
      fIndx = arrLe;
    }
    return key.original === src;
  });
  const adrrLet = gallery[fIndx].original;
  return adrrLet;
}























