import { createUser, getUserById, getUsers } from './api/usersAPI';

//!=========================================

const refs = {
  container: document.querySelector('.js-user-list'),
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  spinner: document.querySelector('.js-spinner'),
};

//!=========================================
refs.createForm.addEventListener('submit', async e => {
  e.preventDefault();

  const borys = new FormData(e.target);

  const data = {
    firstName: borys.get('firstName'),
    lastName: borys.get('lastName'),
    major: borys.get('major'),
    cohortYear: Number(borys.get('cohortYear')),
    gpa: Number(borys.get('gpa')),
    enrolled: Boolean(borys.get('enrolled')),
  };

  try {
    showLoader();
    const res = await createUser(data);
    const markup = userTemplate(res);
    refs.container.insertAdjacentHTML('afterbegin', markup);
  } catch {
    console.log('ERROR');
  }

  hideLoader();
  e.target.reset();
});

//!=========================================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    showLoader();
    const res = await getUsers();
    const markup = usersTemplate(res.items);
    refs.container.innerHTML = markup;
  } catch {
    refs.container.innerHTML = '';
    console.log('ERROR');
  }

  hideLoader();
});

//!=========================================

function userTemplate(user) {
  return `<li class="card user-item" data-id="${user._id}">
        <div class="user-photo-placeholder" aria-label="User photo placeholder">
          <span>${user.firstName[0]}${user.lastName[0]}</span>
        </div>
        <div class="user-card-body">
          <div class="user-card-header">
            <div>
              <h3 class="user-title">${user.firstName} ${user.lastName}</h3>
              <p class="user-major">${user.major}</p>
            </div>
            <span class="user-status">Enrolled: ${user.enrolled}</span>
          </div>

          <div class="user-meta">
            <p>
              <span>Cohort</span>
              <strong>${user.cohortYear}</strong>
            </p>
            <p>
              <span>GPA</span>
              <strong>${user.gpa}</strong>
            </p>
          </div>
          <button class="btn button user-delete-button">Delete</button>
        </div>
      </li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('');
}

//!=========================================

function showLoader() {
  console.log('SHOW');
  refs.spinner.classList.remove('hidden');
}

function hideLoader() {
  console.log('HIDE');
  refs.spinner.classList.add('hidden');
}
