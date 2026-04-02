/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

//!=========================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const res = [...arr3, ...arr3, ...arr1];

// console.log(res);

// ...arr1 -> 1, 2, 3,  4, 5, 6,  7, 8, 9

//!=========================================

// const objA = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const objB = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
// };

// const res = {
//   ...objA,
//   ...objB,
// };

// console.log(res);

//!=========================================

// const copy = { ...objA };
// const arr = [1, 5, 41, 3, 5, 6, 1];
// const res = [...arr, 10];
// const copy = [...arr];
//!=========================================

// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));
// Math.min(...temps);

//!=========================================
// /**
//  * Створення масиву і тип за посиланням
//  */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

b[0].x = 225;

console.log('a: ', a);
console.log('b: ', b);

// /*
//  * Поєднуємо кілька масивів в один через spread
//  */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];
// // console.log(allTemps);

// /*
//  * Створення об'єкта
//  */
// // const objA = { x: 1, y: 2 };
// // const objB = { x: 0, z: 3 };
// // const objC = {};

// // console.log(objC);

// /**
//  * Оновлюємо налаштування користувача
//  */
// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {};

// // console.log(finalSettings);

//!=========================================

// function foo(x1, x2, x3, ...arr) {
//   console.log(x1, x2);
//   console.log(arr);
// }

// foo(10, 20, 30, 40, 50, 2, 3, 4, 1, 3, 4, 5, 21, 1, 2, 3, 12, 312, 41, 23);

//!=========================================

// const arr = [1,2,3,4,5]
// ...arr

//!=========================================
// const x1 = 10;
// function foo(x1, x2, x3, ...arr) {}
// function getMax(...values) {}
