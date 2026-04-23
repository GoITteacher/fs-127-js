/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(formElem);

  //   const email = borys.get('email');
  //   const password = borys.get('password');
  //   const comment = borys.get('comment');
  //   const testValue = borys.get('test');

  const values = {
    email: borys.get('email'),
    password: borys.get('password'),
    comment: borys.get('comment'),
    testValue: borys.get('test'),
  };

  formElem.reset();
});
