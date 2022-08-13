// Инициализация библиотеки после того как элементы
//  галереи созданы и добавлены в div.gallery.
//  Для этого ознакомься с документацией
// SimpleLightbox - в первую очередь секции «Usage»
// и «Markup».

// Посмотри в документации секцию «Options» и 
// добавь отображение подписей к изображениям из 
// атрибута alt.Пусть подпись будет снизу и появляется 
// через 250 миллисекунд после открытия изображения.

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

    var lightbox = new SimpleLightbox('.gallery a', {animationSpeed});

}

function animationSpeed(item) {
   console.log(item)

}

   
    

