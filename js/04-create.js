/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
//!=========================================

const pElem = document.createElement('p');
pElem.textContent = 'Hello';
pElem.classList.add('active-item');
console.log(pElem);
const heroElem = document.querySelector('.hero');
heroElem.append(pElem);
//!=========================================

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
// const imageEl = document.createElement('img');

// const heroEl = document.querySelector('.hero');

/*
 * Створюємо та додаємо новий пункт меню
 */
// const navItemEl = document.createElement('li');

//!=========================================

// const elems = [];

// for (let i = 0; i < 10; i++) {
//   const pElem = document.createElement('p');
//   pElem.textContent = i;
//   elems.push(pElem);
// }

// document.body.append(...elems);
