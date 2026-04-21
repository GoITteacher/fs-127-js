/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */
//!=========================================

// const dom = {
//   html: {
//     head: {},
//     body: {
//       p: {
//         a: {},
//       },
//       button: {
//         textContent: 'Magic button ...',
//       },
//       ul: {
//         li: {},
//         li: {},
//         li: {},
//       },
//     },
//   },
// };

// dom.html.body.button.textContent = 'Test Button';

//!=========================================

// const btnElem = document.querySelector('button.js-magic-btn > span');
// const ulElem = document.querySelector('.js-user-list');
// console.log(ulElem);

// const firstLiElem = ulElem.querySelector('li:nth-child(3)');

// firstLiElem.remove();
// console.log(btnElem);
// console.dir(btnElem);

// btnElem.textContent = 'Test Button';
// btnElem.style.border = '1px solid black';
//!=========================================

// const linkElems = document.querySelectorAll('li>a');
// for (const elem of linkElems) {
//   elem.textContent += ' HELLO';
// }

//!=========================================

/*
 * Властивості «навігації» по DOM-вузлах
 * firstElementChild
 * lastElementChild
 * parentElement
 * previousElementSibling
 * nextElementSibling
 */

// const ulElem = document.querySelector('.js-user-list');
// console.log(ulElem.children[1]);

// for (let i = 0; i < ulElem.children.length; i++) {
//   const liElem = ulElem.children[i];
//   liElem.textContent = `${i + 1}) ${liElem.textContent}`;
// }

//!=========================================
