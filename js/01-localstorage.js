//!=========================================
// JSON - архіватор
// JSON.stringify - заархівувати
// JSON.parse - розархівувати

// const x = {
//   firstname: 'Vasya',
//   lastname: 'Vasylenko',
//   age: undefined,
//   getFullName() {
//     console.log(this.firstname, this.lastname);
//   },
// };
// const jsonData = JSON.stringify(x, null, 2);

// console.log(x);
// console.log(jsonData);

//!=========================================

// const jsonMessage = `{
//  "update_id": 937970246,
//  "message": {
//   "message_id": 2685878,
//   "from": {
//    "id": 433982686,
//    "is_bot": false,
//    "first_name": "Volodymyr",
//    "last_name": "Pashchenko",
//    "username": "pashchenko_v_r",
//    "language_code": "uk",
//    "is_premium": true
//   },
//   "chat": {
//    "id": 433982686,
//    "first_name": "Volodymyr",
//    "last_name": "Pashchenko",
//    "username": "pashchenko_v_r",
//    "type": "private"
//   },
//   "date": 1777999307,
//   "text": "test"
//  }
// }`;

// const objMessage = JSON.parse(jsonMessage);

// console.log(objMessage);

//!=========================================

/**
 * LocalStorage
 */

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];
//!=========================================

// localStorage.setItem('balance', 1000);
// localStorage.setItem('fullname', 'Volodymyr');
// localStorage.setItem('numbers', [1, 2, 3, 4]);
// localStorage.setItem('user', { firstname: 'Vasya', lastname: 'Vasylenko' });

//!=========================================

// const x = {
//   firstname: 'Vasya',
//   lastname: 'Vasylenko',
//   age: undefined,
//   getFullName() {
//     console.log(this.firstname, this.lastname);
//   },
// };
// const jsonData = JSON.stringify(x, null, 2);
// localStorage.setItem('myObj', jsonData);

//!=========================================
// const jsonData = localStorage.getItem('myObj');
// const obj = JSON.parse(jsonData);
// console.log(obj);

// !=========================================

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/**
 * Видалення
 */
// localStorage.removeItem('myObj');

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

//!=========================================

// const userData = prompt('Enter JSON Data');

// const data = JSON.parse(userData);

// console.log(userData);
// console.log(data);

// const x = 10;
// x = 10;

// try {
//   const x = 10;
//   x = 25;
// } catch {}

//!=========================================

function getUserJsonData() {
  const userJson = prompt('Enter json');

  try {
    const data = JSON.parse(userJson);
    return data;
  } catch {
    console.log(`invalid json: ${userJson}`);
    return null;
  }
}

console.log(getUserJsonData());

console.log('The end');
console.log('The end');
console.log('The end');
console.log('The end');
console.log('The end');
