// import { createBook, getBooks } from './api/booksAPI';

import { getPokemon } from './api/pokemons';

// document.addEventListener('DOMContentLoaded', async () => {
//   console.log('START');
//   const res = await getBooks();
//   console.log(res);
//   console.log('END');
// });

//!=========================================

// async function foo() {}
// async () => {};
// const user = {
//   name: 'Vasya',
//   async showInfo() {},
// };
// class User {
//   constructor() {}
//   async showInfo() {}
// }
// [].forEach(async () => {});
// const arrowFn = async () => {};

//!=========================================

// document.addEventListener('DOMContentLoaded', async () => {
//   const arr = [];

for (let i = 1; i < 10; i++) {
  const res = getPokemon(i);
  arr.push(res);
}

//   const newArr = await Promise.all(arr);
//   console.log(newArr);
// });
