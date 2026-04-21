/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
//!=========================================
const imageEl = document.querySelector('.hero__image');
const imageTitle = imageEl.getAttribute('alt');
console.log(imageTitle);

//!=========================================
// getAttribute - отримати значення атрибуту
// setAttribute
// hasAttribute
// removeAttribute
// toggleAttribute

// imageEl.setAttribute('height', '300');
// imageEl.setAttribute('alt', 'Cat');

//!=========================================

// const imageElems = document.querySelectorAll('ul>li>img');
// for (const imgElem of imageElems) {
//   const url = `https://picsum.photos/1280/720?random=${Math.random() * 100}`;
//   imgElem.setAttribute('src', url);
// }

//!=========================================
// const heroTitleEl = document.querySelector('.hero__title');

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

//!=========================================
/*
 * Data-атрибути
 */
// const actions = document.querySelectorAll('.actions button');
// const firstBtn = actions[0];
// console.log(firstBtn.dataset.action);
// firstBtn.dataset.myText = 'hello world';

//!=========================================
