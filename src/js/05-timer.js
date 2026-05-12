const clockFaceElem = document.querySelector('.js-clockface');
const startBtnElem = document.querySelector('button[data-action-start]');
const stopBtnElem = document.querySelector('button[data-action-stop]');
let intervalId;
//!=========================================

startBtnElem.addEventListener('click', () => {
  startBtnElem.disabled = true;
  const initTime = new Date('2026-05-12 21:32');

  intervalId = setInterval(() => {
    const currentTime = new Date();
    const diff = initTime - currentTime;
    const timeStr = msToTime(diff);
    clockFaceElem.textContent = timeStr;

    if (diff < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
});

stopBtnElem.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtnElem.disabled = false;
});
//!=========================================

function msToTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
