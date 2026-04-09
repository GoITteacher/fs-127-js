/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
//!=========================================
// const numbers = [1, 9, 25, 6, 2, 113, 3];
// const sorted = numbers.toSorted();
// console.log('sorted ', sorted);

// const letters = ['b', 'B', 'a', 'A', 'F', 'D', 'm', 'k', 'C'];
// const sortedLetter = letters.toSorted();
// console.log('letters', sortedLetter);
//!=========================================

// const numbers = [4, 1, 12, 345, 6, 1, 34, 134, 5];
// const res = numbers.toSorted((a, b) => {
//   return a - b;
// });
// console.log(res);

//!=========================================
/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   }),
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const res = players.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.table(res);

//!=========================================
// const res = players.toSorted((a, b) => {
//   return a.timePlayed - b.timePlayed;
// });
// const res = players.toSorted((a, b) => {
//   return a.name.length - b.name.length;
// });

// const res = players.toSorted((b, a) => {
//   return a.online - b.online;
// });

// console.table(res);

//!=========================================
// // За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!=========================================

// const numbers = [0.5, 1, 1, 4, 5, 6, 12, 34, 134, 345];
