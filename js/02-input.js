/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!=========================================
// const inputNameElem = document.querySelector('.js-user-name');
// const userNameSpan = document.querySelector('.js-username');

// inputNameElem.addEventListener('input', e => {
//   userNameSpan.textContent = e.currentTarget.value;
// });

//!=========================================

const inputNameElem = document.querySelector('.js-user-name');

inputNameElem.addEventListener('blur', e => {
  const value = inputNameElem.value;

  if (value.length < 6) {
    inputNameElem.classList.add('invalid-input');
  }
});

inputNameElem.addEventListener('focus', e => {
  console.log('REMOVE Classs');
  inputNameElem.classList.remove('invalid-input');
});
