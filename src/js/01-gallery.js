// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const renderGallery = () => {
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
              </a>
            </li>`;
});

gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
};

renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});

console.log(galleryItems);

