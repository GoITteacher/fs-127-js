/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//!=========================================
// const user1 = {
//   name: 'Vasya',
//   age: 25,
//   showThis() {
//     console.log(this);
//   },
// };

// const user2 = {
//   name: 'Borys',
//   age: 27,
// };

// const user3 = {
//   name: 'Roman',
//   age: 27,
// };

//!=========================================

// function setColor(newColor) {
//   this.color = newColor;
// }

// const iphone = {
//   model: 'Iphone 13',
//   color: 'black',
//   price: 15000,
// };

// const user = {};

// setColor.call(iphone, 'red');
// setColor.call(user, 'red');

// console.log(iphone);
// console.log(user);

//!=========================================
// user1.showThis();
// user1.showThis.call(user2);
// user1.showThis();
// user1.showThis.call(user3);
// user1.showThis();

//!=========================================

// function setRgb(red, green, blue) {
//   this.red = red;
//   this.green = green;
//   this.blue = blue;
// }

// const primaryColor = {};

// const red = 10;
// const green = 20;
// const blue = 30;
// setRgb.call(primaryColor, red, green, blue);

//!=========================================
// const rgb = [10, 20, 30];
// setRgb.apply(primaryColor, rgb);
// console.log(primaryColor);

//!=========================================
const myObj = {
  name: 'Vasya',
};

function showThis() {
  //this = myObj
  console.log(this);
}

const copy = showThis.bind(myObj);

//!=========================================

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
//   name: 'Hat',
// };

// const sweater = {
//   color: 'green',
//   name: 'sweater',
// };

// const changeHatColor = changeColor.bind(hat);
// changeHatColor('Red');
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor('black');

//!=========================================
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

//!=========================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//!=========================================

// const store = {
//   productsAmount: 0,
//   price: 1000,
//   incrementProducts() {
//     this.productsAmount += 10;
//   },
// };

// const incProducts = store.incrementProducts.bind(store);

// incProducts();
// incProducts();
// incProducts();
// incProducts();

//!=========================================

//
//
//
//
// 7 - bind
// 5 - call apply
// 3 - контекст обєкту (той обєкт що зліва)
// 1 - глобальний this (undefined)

// const copy = foo.bind(user3);
// copy.call(user2);
