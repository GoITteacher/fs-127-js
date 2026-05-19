import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Volodka',
    },
  };

  return fetch(url, options).then(res => res.json());
} */

//!=========================================

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// const END_POINT = '/users';
// const url = BASE_URL + END_POINT;
// fetch(url);
// https://linkedin-job-search-api.p.rapidapi.com
// /active-jb-7d

//!=========================================

// function getUsers(x, y) {
//   const BASE_URL = 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';
//   const END_POINT = '/public/students';

//   const params = new URLSearchParams({
//     firstName: x,
//     lastName: y,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

// return fetch(url).then(res=>{
//   console.log(res);
// });
// }

//!=========================================

function fetchData() {
  const BASE_URL = '';
  const END_POINT = '';

  const params = new URLSearchParams({});
  const url = BASE_URL + END_POINT + '?' + params;

  const options = {
    headers: {
      header1: 1,
      header2: 2,
      header3: 3,
    },
  };

  return fetch(url, options).then(res => res.json());
}

// fetch(url, {
//   headers: {
//     'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com',
//     'Content-Type': 'application/json',
//   },
// });
