import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function galleryItemsMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
    `).join('')
};

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup(galleryItems));
galleryEl.addEventListener('click', onGalleryclick);

function onGalleryclick(evt) {
  evt.preventDefault();
  
  instance.element().querySelector("img").src = evt.target.dataset.source;
  if (!evt.target.dataset.source) return;
  instance.show();
};

const instance = basicLightbox.create(`<img src="" />`, {
    onShow: () => {
      window.addEventListener("keydown", keydownEscape);
    },
    onClose: () => {
      window.removeEventListener("keydown", keydownEscape);
    },
  });
 
function keydownEscape(evt) {
  if (evt.key === "Escape") {
    instance.close();
    return;
  }
}


console.log(galleryItems);
