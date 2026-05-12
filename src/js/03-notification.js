/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

//!=========================================

console.log('START Site');

setTimeout(() => {
  showNotification();

  timeoutId = setTimeout(() => {
    hideNotification();
  }, 5000);
}, NOTIFICATION_DELAY);

//!=========================================

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

//!=========================================
/*
 * Функції
 */

function showNotification() {
  console.log('ПОКАЗАТИ');
  notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('ПРИХОВАТИ');
  notification.classList.remove('is-visible');
}

//!=========================================
