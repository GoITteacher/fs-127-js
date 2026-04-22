/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

//!=========================================
// MAP - коли хочемо змінити кожен елемент
// FILTER - коли треба ЗНАЙТИ БАГАТО елементів
// FIND - коли треба ЗНАЙТИ ОДИН елемент
// SOME - коли треба ПЕРЕВІРИТИ ОДИН елемент (відповіють так або ні)
// EVERY - коли треба ПЕРЕВІРИТИ КОЖЕН елемент (відповіють так або ні)

// users.filter(item => item.age > 10);
// users.filter(user => user.balance > 100);

// arr.map((item, idx) => {});
// arr.filter((item, idx) => {});
// arr.filter((item, idx) => {});
// arr.filter((item, idx) => {});
// arr.filter((item, idx) => {});

//!=========================================
// const users = [];
// const names = [];

// users.map((user, i) => {});
// names.map((name, i) => {});
// users.filter((user, i) => {});
// user.findIndex((user, i) => {});

// arr.forEach(() => {});
// arr.map(() => {});
// arr.filter(() => {});
// arr.find(callback);
// arr.findIndex(callback);
// arr.some(callback);
// arr.every(callback);
// arr.reduce(callback);
// arr.sort(callback);

//!=========================================

// const numbers = [3, 9, 2, 8, 5];

// const res = numbers.map(item => {
//   return `Item: ${item}`;
// });

// const res = numbers.map(item => item * 2);
// console.log(res);

// const res = numbers.map(function mult(item, i) {
//   return item * 2;
// });

// [true, true, true,true, true]

// console.log(res);

/* 
const res = numbers.map(function mult(item, i) {
  return item * 2;
});

const res = [6, 18, 4, 16, 10];
res.push(mult(3))
res.push(mult(9))
res.push(mult(2))
res.push(mult(8))
res.push(mult(5))
*/

//!=========================================

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

const getModels = cars => {
  const res = cars.map(car => car.model);
  return res;
};

console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {});

// console.log(updatedPlayers);

//!=========================================
