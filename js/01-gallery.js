import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector(".gallery");
const galleryList = createGalleryList(galleryItems);

divGallery.insertAdjacentHTML('beforeend', galleryList);
divGallery.addEventListener('click', onImage);

function createGalleryList(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
      
      return  `
                <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    })
    .join("")
}

function onImage(e){
   const zoomImage = e.target.classList.contains('gallery__image')
   if(!zoomImage){
    return
   }

   bigImage(e);

}

function bigImage(e){
    e.preventDefault();
    const bigImageLink = e.target.dataset.source;
      const instance = basicLightbox.create(
        `
            <img src="${bigImageLink}" width="1280">
        `,
        {
          onClose: () => {
            window.removeEventListener("keydown", closeBigImageClick);
          },
        }
      );
    
      window.addEventListener("keydown", closeBigImageClick);
    
      instance.show();

      function closeBigImageClick(event) {
        console.log(event.code);
        if (event.code == "Escape") {
          instance.close();
        }
      }
}



console.log(galleryItems);
