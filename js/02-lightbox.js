import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");
const galleryList = createGalleryList(galleryItems);

divGallery.insertAdjacentHTML('beforeend', galleryList);

function createGalleryList(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
      
      return  `
      <a class="gallery__item" href='${original}'>
      <img class="gallery__image" src='${preview}' alt='${description}' />
    </a>
        `
    })
    .join("")
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
