/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const arrNames = names.split(',');
//   const arrPhones = phones.split(',');

//   for (let i = 0; i < arrNames.length; i++) {
//     console.log(arrNames[i], arrPhones[i]);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

//!=========================================
function formatTime(minutesValue) {
  const hours = Math.floor(minutesValue / 60); // 1
  const minutes = minutesValue % 60; // 10

  const hoursStr = hours.toString().padStart(2, '0'); // '01'
  const minutesStr = minutes.toString().padStart(2, '0'); // '10'
  return `${hoursStr}:${minutesStr}`;
}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1800)); // "24:01"

//!=========================================

// const mes = message.length;
// if (mes <= maxLength) {
// }

//!=========================================

// if (message.length <= maxLength) {
// }

//!=========================================

// function foo(x1, x2, x3) {}

// foo(10, 20);
