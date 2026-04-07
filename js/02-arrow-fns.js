/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!=========================================

// const x = 15 + 15;
// const y = 10 > 25;
// function arrowFn(a,b){return a + b}
// const arrowFn = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;
// const mult = () => {};

//!=========================================

// const pow = a => a ** 2;
// pow(2); //4

//!=========================================

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!=========================================

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA = () => {
//   return {

//   }
// }

// console.log(arrowFnA());

//!=========================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, function (x, y) {
//   return x + y;
// });

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, (x, y) => x - y);

// map, filter,find, findIndex, findLastIndex ,.........
//!=========================================

const x = () => {};
x();

const x1 = a => {};
const x2 = (x, y) => x ** y;
