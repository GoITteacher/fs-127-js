const STORAGE_KEY = 'form-data';

const formEl = document.querySelector('.feedback-form');
const textarea = formEl.querySelector('textarea');

formEl.addEventListener('input', e => {
  const obj = {
    name: formEl.elements.name.value,
    message: formEl.elements.message.value,
  };

  const json = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, json);
});

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(STORAGE_KEY);
  if (!data) return;

  formEl.elements.name.value = data.name;
  formEl.elements.message.value = data.message;
});

//!=========================================

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const obj = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  console.log(obj);

  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
});
//!=========================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, value);
}

function loadFromLS(key) {
  const jsonData = localStorage.getItem(key);
  try {
    const result = JSON.parse(jsonData);
    return result;
  } catch (error) {
    console.log(error);
    return jsonData;
  }
}

//!=========================================
