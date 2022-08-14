import { galleryItems } from './gallery-items.js';

const refs = document.querySelector('.gallery');

const containerForImages = [];

const listItemsImages = createListItemsImages( galleryItems );

function createListItemsImages(items) {
   
    return items
        .map(item => `<li>
        <a class="gallery__item" href="${item.original}">
         <img class="gallery__image"
           src="${item.preview}"
           alt="${item.description}" />
        </a>
      </li >`)
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
    
    const div = document.createElement('div.gallery');

    div.class = "gallery";
    div.href = "${item.original}";
    div.alt="${item.description}";
    document.body.appendChild(div);
  
    
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });
   
}
