/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */
//!=========================================
// let link = 'https://my-site.com/about/';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);
//!=========================================
/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';
// if (url.includes('my-site') && !url.endsWith('/')) {
//   url += '/';
// }
// console.log(url);

//!=========================================
/*
 * Пошук у рядку методом includes()
 */

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not sp@m, I'm offering you a million!";

// const hasFirstWord = string1.toLowerCase().includes(blacklistedWord1);
// const hasSecondWord = string1.toLowerCase().includes(blacklistedWord2);
// const hasBlackWords = hasFirstWord || hasSecondWord;

// if (hasBlackWords) {
//   console.log('Ban');
// }
// //!=========================================
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';
