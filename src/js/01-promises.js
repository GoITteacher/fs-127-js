/**
 * Створення та обробка промісу
 * - Клас Promise
 * - ✅ resolve
 * - ❌ reject
 * - then, catch, finally
 */

//!=========================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve('Смачного');
//     } else {
//       reject('Вибачте. Замовлення скасоване');
//     }
//   }, 300);
// });

// function onFulfilled(result) {
//   console.log(result);
//   console.log('✅ Ням ням яка смачна піца');
// }

// function onRejected(error) {
//   console.log(error);
//   console.log('❌ Шкода вас, я напишу поганий відгук. Поверніть гроші');
// }

// promise.then(onFulfilled, onRejected);

//!=========================================
// promise
//   .then(result => {
//     console.log(result);
//     console.log('✅ Ням ням яка смачна піца');
//   })
//   .catch(error => {
//     console.log(error);
//     console.log('❌ Шкода вас, я напишу поганий відгук. Поверніть гроші');
//   });

//!=========================================

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((resolve, reject) => {
//   reject(200);
// });

// promise
//   .then(data1 => {
//     console.log(data1); // 200
//     return data1 * 2;
//   })
//   .then(data2 => {
//     console.log(data2); //400
//     return data2 * 2;
//   })
//   .catch(error1 => {
//     return 500;
//   })
//   .then(data3 => {
//     console.log(data3); // 800
//     return data3 * 2;
//   })
//   .catch(() => {});

//!=========================================

// promise.then().catch();

//!=========================================

// Promise.then(data1 => {
//   const json = prompt('Enter json');
//   const data2 = JSON.parse(json);
// });

//!=========================================
