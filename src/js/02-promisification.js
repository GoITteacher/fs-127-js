/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

//!=========================================

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// function createPromise(data, delay, isFulfilled) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         resolve(data);
//       } else {
//         reject(data);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('p1 (3000)', 3000, true);
// const p2 = createPromise('p2 (1000)', 1000, false);
// const p3 = createPromise('p3 (8000)', 8000, true);
// const p4 = createPromise('p4 (2000)', 2000, false);

// p1.then(onFulfilled).catch(onRejected);
// p2.then(onFulfilled).catch(onRejected);
// p3.then(onFulfilled).catch(onRejected);
// p4.then(onFulfilled).catch(onRejected);

// createPromise().then().catch();

//!=========================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr() {
//   const arr = [1, 2, 3, 45, 4, 1, 24];
//   return Promise.resolve(arr);
// }
// const res = getArr();
// res.then(data => {
//   console.log(data);
// });

//!=========================================

// Promise.all
// Promise.allSettled
// Promise.race

// function createPromise(data, delay, isFulfilled) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         resolve(data);
//       } else {
//         reject(data);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('p1 (3000)', 3000, true);
// const p2 = createPromise('p2 (1000)', 1000, true);
// const p3 = createPromise('p3 (8000)', 8000, true);
// const p4 = createPromise('p4 (2000)', 2000, false);
// const p5 = createPromise('p5 (6000)', 6000, true);
// const p6 = createPromise('p6 (4000)', 4000, false);

// const resultPromise = Promise.race([p1, p2, p3, p4, p5, p6]);
// const resultPromise = Promise.allSettled([p1, p2, p3, p4, p5, p6]);
// const resultPromise = Promise.all([p1, p2, p3, p4, p5, p6]);

// resultPromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log('ERROR', err);
//   });
