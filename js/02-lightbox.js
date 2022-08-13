// Создание и рендер разметки по массиву данных 
// galleryItems и предоставленному шаблону элемента
// галереи.Используй готовый код из первого задания.

// Подключение скрипта и стилей библиотеки используя
//  CDN сервис cdnjs.Необходимо добавить ссылки на 
//  два файла: simple - lightbox.min.js и simple
//     - lightbox.min.css.

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

    const urlOfBigImage = event.target.dataset.source;
}
//     const instance = basicLightbox.create(`
//        <div class="modal">
//           <img src="${urlOfBigImage}" width="800" height="600">

//       </div>
// `)

//     instance.show()
    
// }
