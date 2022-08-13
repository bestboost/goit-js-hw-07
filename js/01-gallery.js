// Задание 1 - галерея изображений
// // Создай галерею с возможностью клика по её 
// элементам и просмотра полноразмерного изображения 
// в модальном окне.

// // Замена значения атрибута src элемента <img> в 
// модальном окне перед открытием.Используй готовую 
// разметку модального окна с изображением из примеров
//  библиотеки basicLightbox.

// // Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться 
// // в data - атрибуте source на элементе < img >,
// // и указываться в href ссылки.Не добавляй другие
// // HTML теги  или CSS классы кроме тех, что есть в 
// // этом шаблоне.

// // <div class="gallery__item">
// //   <a class="gallery__link" href="large-image.jpg">
// //     <img
// //       class="gallery__image"
// //       src="small-image.jpg"
// //       data-source="large-image.jpg"
// //       alt="Image description"
// //     />
// //   </a>
// // </div>

 

import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = document.querySelector('.gallery');

// Создание и рендер разметки по массиву данных
//  galleryItems и предоставленному шаблону элемента
// галереи.

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

// Реализация делегирования на div.gallery и 
// получение url большого изображения.
refs.addEventListener("click", openBigImage);
 
function openBigImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const urlOfBigImage = event.target.dataset.source;
    console.log(urlOfBigImage);
}


// // Подключение скрипта и стилей библиотеки 
// модального окна basicLightbox.Используй CDN сервис 
// jsdelivr и добавь в проект ссылки на минифицированные
//     (.min) файлы библиотеки.

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
document.body.appendChild(script);

const link = document.createElement('link');
link.rel = "stylesheet";
link.href = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
document.head.appendChild(link);

// Открытие модального окна по клику на элементе 
// галереи.Для этого ознакомься с документацией и
// примерами.
// const basicLightbox = require('basiclightbox')


