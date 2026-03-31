/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const friend = {
//   name: 'Roman',
//   age: 25,
//   city: 'Dnipro',
//   phoneNumber: '+38012312414',
// };

// const product = {
//   title: 'Iphone 13',
//   description: 'The best mobile',
//   price: 600,
//   discount: 5,
//   amount: 3,
//   color: 'black',
//   isNew: true,
// };

// function showProduct(title, description, amount, color, isNews) {}
// showProduct('Iphone 13', 'awdawda', 13, 123);

// function showProduct(product) {
//   console.log(product);
// }

// showProduct(product);
//!=========================================

// const product = ['Iphone', 10, 1000, 10, 14, 16, 2];
//
// const salaries = [100, 20, 10, 12, 45, 2, 3, 6, 78, 1];

//!=========================================

// const user = {
//   name: 'Roman',
//   age: 25,
//   address: {
//     country: 'Ukraine',
//     city: 'Dnipro',
//     street: 'Romanenko',
//     location: {
//       lat: 31.123124124123,
//       lon: 41.124124124312,
//     },
//   },
// };

// const userKey = prompt('Enter obj key'); //'age'
// console.log(user.name);
// console.log(user['name']);
// console.log(user[userKey]);
// console.log(user.lastname);

// console.log(user.name);
// console.log(user['address']['location']['lat']);
// console.log(user['address'].location['lat']);
// console.log(user.address.location.lat);
// console.log(user.name);
// console.log(user.age);
// console.log(user.age);

//!=========================================
// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   isFavourite: true,
// };

// playlist.isFavourite = false;
// playlist.tracks.push('Track-4');
// playlist.lastname = 'Vasylenko';
// delete playlist.lastname;
// console.log(playlist);

//!=========================================

const product = {
  title: 'Ice Tea',
  liters: 1.5,
  price: 30,
  container: 'bottle',
  taste: 'Black tea',
};

console.log(product.price);
console.log(product.taste);
//!=========================================
