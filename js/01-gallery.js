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

console.log(galleryItemsMarkup(galleryItems))
console.log(galleryItems);
