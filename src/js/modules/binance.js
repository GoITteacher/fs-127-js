const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};
//!=========================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const query = formData.get('query');

  fetchTickerPrice(query).then(result => {
    const markup = symbolTemplate(result);
    refs.infoEl.innerHTML = markup;
  });

  e.target.reset();
});

//!=========================================
function fetchTickerPrice(query) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';

  const params = new URLSearchParams({
    symbol: query,
  });

  const url = BASE_URL + END_POINT + '?' + params;

  const options = {
    headers: {
      'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'x-rapidapi-host': 'binance43.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, options).then(res => res.json());
}

//!=========================================

function symbolTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}
