/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', e => {
//   console.log('KEYDOWN', e.code);
// });

// document.addEventListener('keyup', e => {
//   console.log('KEYUP', e.code);
// });

// document.addEventListener('keypress', e => {
//   console.log('KEYPRESS', e.code);
// });
//!=========================================
/**
 * Обробка комбінацій клавіш
 */

document.addEventListener('keypress', e => {
  console.log(e.code);
  console.log(e.key);
  //   if (e.shiftKey && e.code === 'KeyQ') {
  //     console.log('Відкрити головне меню');
  //   }
});
