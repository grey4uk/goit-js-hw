import images from "./images.js";
const imagesList = document.querySelector(".gallery");
console.log(imagesList);
function createImagesList(imagesObj) {
  const photoList = imagesObj.reduce((acc, image) => {
    console.log(image.preview);
    console.log(image.original);
    console.log(image.description);
    console.log(acc);
    acc =
      acc +
      `<li class="gallery__item">
        <a
          class="gallery__link"
          href="#"
        >
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>`;
  }, ``);
  console.log(photoList);
  return photoList;
}

imagesList.insertAdjacentHTML("afterbegin", createImagesList(images));
