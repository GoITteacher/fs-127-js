/**
 * Псевдомасив arguments и Array.from
 */
//!=========================================
// const arr = [1, 2, 3, 4, 4];
// console.log(arr);
//!=========================================

// function foo() {
//   console.log(arguments);
// }
// foo(1, 2, 3);
// foo('Vasya');

//!=========================================
// const arr = [];

// arr.push('Vasya', 'Ivanenko');
// arr.push('Vasya', 'Ivanenko', 'Ruslanovich');
// arr.push();

// console.log(arr);

//!=========================================

// const max = Math.max(10, 20, 301, 2, 1, 4, 1, 3);
// console.log(max);

//!=========================================
//Напиши функцію яка приймає довільну кількість рядочків і перевіряє чи є серед цих рядків слово "Hello"

//Напиши функцію яка приймає псевдомасив рядочків і перевіряє чи є серед цих рядків слово "Hello"

// function foo() {
//   const args = Array.from(arguments);
//   console.log(args);

//   return args.includes('Hello');
// }

// console.log(foo('Vasya', 'Test'));

//!=========================================

// function foo() {
//   const args = Array.from(arguments);

//   console.log(arguments);
//   console.log(args);
// }

// foo('test', true, 1, 2, 3);
//!=========================================
// function foo() {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//!=========================================
/**
 * Напиши функцію add для складання довільної
 * кількості чисел
 */

// const arr = [];

//!=========================================

// function add() {
//   const arr = Array.from(arguments);
//   let sum = 0;

//   for (const item of arr) {
//     sum += item;
//   }

//   return sum;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//!=========================================

// function getAvg() {
//   const args = Array.from(arguments);
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum / args.length;
// }
// const red = 25;
// const green = 123;
// const blue = 12;
// const rgb = [red, green, blue];
// const greyColor = getAvg(12, 1, 3, 3, 1, 2, 4, 41);

//!=========================================
/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function getAvg() {
//   const args = Array.from(arguments);
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
