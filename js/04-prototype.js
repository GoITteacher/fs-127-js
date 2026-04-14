/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

//!=========================================

// const objA = {
//   x: 10,
//   y: 20,
// };

// const objB = Object.create(objA);

// console.log(objB);

//!=========================================

// const obj = {
//   name: 'Vasya',
//   age: 25,
// };

// console.log(obj.toString());
// console.log(obj.toString());

//!=========================================

// const x = 20;

// console.log(x);
// console.log(x.toString());

//!=========================================
// const arr1 = [10, 20, 30, 40];
// const arr2 = [10, 20, 30, 40];
// const arr3 = [10, 20, 30, 40];
// const arr4 = [10, 20, 30, 40];
// const arr5 = [10, 20, 30, 40];
// const arr6 = [10, 20, 30, 40];
// const arr7 = [10, 20, 30, 40];
// console.log(arr1);

//!=========================================

// const arr = [];

// const objA = {
//   x: 10,
//   y: 20,
// };

// const objB = {
//   y1: 'Hello',
//   y2: 'World',
//   __proto__: objA,
// };

// const objC = {
//   x: 300,
//   q1: 'Hello',
//   q2: 'World',
//   __proto__: objB,
// };

// const objD = {
//   p1: 'Hello',
//   p2: 'World',
//   __proto__: objC,
// };

// console.log(objD.x);

// console.log(objB.t1);
// console.log(objB.t2);

// console.log(objB.x);
// console.log(objB.y);

// console.log(objB.x);
// console.log(objB.toString());

// for (const key in objB) {
//   console.log(key);
// }

//!=========================================

// console.log(objB.hasOwnProperty('t1'));
// console.log(objB.hasOwnProperty('t2'));
// console.log(objB.hasOwnProperty('x'));

//!=========================================

//!=========================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

//!=========================================
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

//!=========================================

// const userProto = {
//   showName() {
//     console.log('Name:', this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// const user1 = {
//   name: 'Vasya',
//   age: 25,
//   __proto__: userProto,
// };

// const user2 = {
//   name: 'Vasya',
//   age: 25,
//   __proto__: userProto,
// };

// const user3 = {
//   name: 'Vasya',
//   age: 25,
//   __proto__: userProto,
// };

// console.log(user1);

// user1.showName();

//!=========================================

// const arr1 = [];
// const arr2 = [];
// const arr3 = [];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// arr1.map()

//!=========================================

//!=========================================

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min(). це завдання

// function getExtremeScores(scores) {
//   const maxx = Math.max(...scores);
//   const minn = Math.min(...scores);

//   const obj = {
//     best: maxx,
//     worst: minn,
//   };
//   return obj;
// }
