/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */
//!=========================================

// function foo() {
//     this =
//   console.log(this);
// }
// foo();

//!=========================================
/**
 * Глобальний контекст
 */

// function foo() {
//   console.log(this);
// }

// foo(); // undefined || window

//!=========================================
/**
 * Контекст методу об'єкта
 */

// const user = {
//   name: 'Vasya',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis();

//!=========================================
/**
 * Контекст методу об'єкта, але оголошено як зовнішню функцію.
 */

// function showThis() {
//   console.log(this);
// }

// const user = {
//   name: 'Vasya',
//   foo: showThis,
// };

// user.foo()
// showThis()
//!=========================================

/**
 * Виклик без контексту, але оголошено як метод об'єкта.
 */

// const user = {
//   name: 'Vasya',
//   showThis() {
//     console.log(this);
//   },
// };

// const foo = user.showThis;

// foo();

//!=========================================
/**
 * Контекст у callback-функціях
 */

// function foo(callback) {
//   const obj = {
//     name: 'Vasya',
//     copy: callback,
//   };
//   obj.copy();
// }

// function showThis() {
//   console.log(this);
// }

// foo(showThis);

//!=========================================

// Якщо це звичайна функція, то шукаємо де вона викликається і дивимось на обєкт зліва

//!=========================================
// const user = {
//   name: 'Vasya',
//   age: 25,
//   showProps: () => {
//     this.name;
//     this.age;
//   },
// };

// const user = {
//   name: 'Vasya',
//   age: 25,
//   showProps() {
//     this.name;
//     this.age;
//   },
// };

// user.showProps();
