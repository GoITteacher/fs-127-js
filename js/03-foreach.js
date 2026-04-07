/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */
//!=========================================

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(item => {
//   console.log('Item:', item);
// });
// numbers.forEach((item, index) => {
//   console.log(x1, x2, x3, x4, x5);
// });

//!=========================================

// forEach, map, filter, find, some, every,
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((item, index) => {});

//!=========================================
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function logItems(items) {
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
// for (let i = 0; i < nameList.length; i += 1) {
//   console.log(`${nameList[i]}: ${phoneList[i]}`);
// }

//   nameList.forEach((item, i) => {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function calculateAverage(...args) {
//   let total = 0;

//   args.forEach(item => {
//     total += item;
//   });

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
