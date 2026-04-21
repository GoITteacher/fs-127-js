/*
 * Створюємо та додаємо колекцію
 */

const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

// const markup = options
//   .map(el => {
//     return `<div class="color-picker__option" style="background-color: ${el.color}">${el.label}</div>`;
//   })
//   .join('');

// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// // colorPickerContainerEl.innerHTML = markup;
// colorPickerContainerEl.insertAdjacentHTML('afterbegin', markup);

//!=========================================

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

//!=========================================
function colorTemplate(elem) {
  return `<div class="color-picker__option" style="background-color: ${elem.color}">${elem.label}</div>`;
}

function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('\n\n');
}
const colorPickerContainerEl = document.querySelector('.js-color-picker');
const markup = colorsTemplate(options);

colorPickerContainerEl.insertAdjacentHTML('beforeend', markup);

//!=========================================

function userTemplate(user) {}
function usersTemplate(users) {}

function carTemplate(car) {}
function carsTemplate(cars) {}
