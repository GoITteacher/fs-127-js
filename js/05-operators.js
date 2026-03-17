/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false

// console.log(Boolean(true)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

//!=========================================

// Повертає завжди перше false в іншому випадку повертає останнє значення.

// console.log(5 && 4 && true && '' && false);
// console.log(5 && 'mango');

//!=========================================

// Повертає завжди перше true в іншому випадку повертає останнє значення.

// console.log(false || 5);// 5
// console.log(false || null);

//!=========================================

// console.log(!5);
// console.log(!false);

//!=========================================

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); //k

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3);// t

// console.log(true || 3 || 4);//t

// console.log(true || false || 7);// t

// console.log(null || 2 || undefined);// 2

// console.log((1 && null && 2) > 0); //f

// console.log(null || (2 && 3) || 4); // 3

//!=========================================

// ```
// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```

// function task1(age, balance) {
// const isValidAge = age >= 18;
// const isValidBalance = balance > 100;

// if (isValidAge && isValidBalance) {
//     return 'Wellcome';
// } else {
//     return 'Goodbye';
// }
// }

// console.log(task1(22, 5000));

// function task1(age, balance, isAdmin) {
//   const isValidAge = age >= 18;// t
//   const isValidBalance = 0 >= 100;// false

//   if ((isValidAge && isValidBalance) || isOwner) {
//     return 'Wellcome';
//   } else {
//     return 'Goodbye';
//   }
// }

// task1(27, 0, true)

// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".
// ```

// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```

//!=========================================
// || - +
// && - *
// t = 1;
// f = 0

// (true && false) || true || (false && true) || false;
