import { galleryItems } from './gallery-items.js';

const refs = document.querySelector('.gallery');

const containerForImages = [];

const listItemsImages = createListItemsImages( galleryItems );

function createListItemsImages(items) {
   
    return items
        .map(item => `<li>
      <a class="gallery__link" href="${item.original}">
         <img  class="gallery__image"
              src="${item.preview} "
              data-source="${item.original}"
              alt="${item.description}"
         />
      </a></li >`)
    .join('');
   
};

containerForImages.push(listItemsImages); 

refs.insertAdjacentHTML("afterbegin", containerForImages);

refs.addEventListener("click", openBigImage);
 
function openBigImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const urlOfBigImage = event.target.dataset.source;
   
    const instance = basicLightbox.create(`
       <div class="modal">
          <img src="${urlOfBigImage}" width="800" height="600">

      </div>
`)

    instance.show()
    
}















