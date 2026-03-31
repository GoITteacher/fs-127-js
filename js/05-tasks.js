/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на протилежне
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */
//!=========================================
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: false,
};

// user.mood = 'Happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//!=========================================
/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const arr = Object.values(salaries); // [100, 160, 130]
// let sum = 0;

// for (const item of arr) {
//   sum += item;
// }

// console.log(sum);
