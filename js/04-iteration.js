/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);

//!=========================================
// const objA = {
//   x1: 10,
//   x2: 20,
// };

// const objB = {
//   y1: 50,
//   y2$: 60,
//   __proto__: objA,
//   k_ey: 'hello',
// };

// for (const key in objB) {
//   console.log(key);
// }

// console.log(objB);
//!=========================================
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);

//!=========================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// const arr = Object.values(feedback);
// //arr = [5, 10, 3]

// for (const item of arr) {
//   totalFeedback += item;
// }

// console.log(totalFeedback);

// Object.keys(feedback); // ['good', 'neutral', 'bad']
// Object.values(feedback); // [5,10,3]
// Object.entries();
/* 
[
  ['good', 5],
  ['neutral', 10],
  ['bad', 3],
]
*/

// Object.fromEntries([
//   ['test', 'Hello'],
//   ['age', 25],
// ]);
