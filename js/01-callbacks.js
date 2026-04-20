/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!=========================================

// function x(t1,t2){}
// function foo(value){
//   value(10,20)
// }
// foo(x)

//!=========================================
// const x = function(){};

// function foo(value) {
//   console.log(value);
// }

function myDay(money, dayInstruction) {
  console.log('Прокинутись');
  console.log('Зібратись до школи');
  console.log('Піти до школи');
  console.log(`Витратити ${money} на обід`);
  console.log('Повернутись зі школи');
  dayInstruction();
  console.log('Зробити уроки');
  console.log('Відпочивати');
}

function goToMusicSchool() {
  console.log('Піти до муз школи');
  console.log('Повернутись з муз школи');
}

function goToDanceSchool() {
  console.log('Піти до школи танців');
  console.log('Повернутись з школи танців');
}

function goToMusicAndDanceSchool() {
  console.log('Піти до муз школи');
  console.log('Повернутись з муз школи');
  console.log('Піти до школи танців');
  console.log('Повернутись з школи танців');
}

function goToStore() {
  console.log('Піти до магазину');
}

// myDay(200, goToMusicSchool);
// myDay(200, goToDanceSchool);
// myDay(200, goToMusicAndDanceSchool);
// myDay(200, () => {
//   console.log('Їдемо до бабулі');
// });
// myDay(100, ()=>{
//   console.log()
// })

//!=========================================

// function myDay(money, callback) {
//   console.log('Прокинутись');
//   console.log('Зібратись до школи');
//   console.log('Піти до школи');
//   console.log(`Витратити ${money} на обід`);
//   console.log('Повернутись зі школи');
//   console.log('Зробити уроки');
//   console.log('Відпочивати');
// }

// function goToMusicSchool() {
//   console.log('Піти до муз. школи');
//   console.log('Повернутись з муз. школи');
// }

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }
// function goToGrandma() {
//   console.log('Піти до бабусі');
//   console.log('Повернутись від бабусі');
// }
// function goToEnglish() {
//   console.log('Піти на англійську');
//   console.log('Повернутись від бабусі');
// }

// myDay(50, goToMusicSchool);

//!=========================================
// function fnA(message) {
//   console.log(message);
// }

// function fnB(number) {
//   console.log("Log during fnB execution ", number);
// }

// fnA("A message");

//!=========================================

/**
 * Функція calc(a, b, callback)
 */
//!=========================================
// function calc(a, b, callback) {
//   const res = sum(a, b);
//   console.log('Result:', res);
// }

// calc(10, 20, (a, b) => {
//   return a * b - 10;
// });

// calc(5, 5, (x1, x2) => {
//   return x1 * x2;
// });

// function sum(a, b) {
//   return a + b;
// }

// function pow(x1, x2) {
//   return x1 ** x2;
// }

// function test() {
//   return 25;
// }

// calc(10, 20, sum);
// calc(3, 5, pow);
// calc(7, 7, test);

//!=========================================

// calc(2, 3);

// calc(10, 8);

//!=========================================
/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */
//!=========================================

// function each(array, callback) {
//   const newArr = [];

//   for (const item of array) {
//     const res = callback(item);
//     newArr.push(res);
//   }

//   return newArr;
// }

// function mutiply(num) {
//   return num * 2;
// }
// const res1 = each([10, 20, 30, 40, 50], mutiply);

//!=========================================

// function validateString(str) {
//   return str.toLowerCase().slice(0, 10);
// }

// const res1 = each(
//   ['Hello world', 'My test long message', 'Test short message'],
//   validateString,
// );
// console.log(res1);

//!=========================================
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

//!=========================================
// const arr = [10, 2, 4, 5, 1];

// arr.forEach((item, index) => {
//   console.log(index, item);
// });
