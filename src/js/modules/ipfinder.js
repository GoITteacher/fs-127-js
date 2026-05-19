const refs = {
  formEl: document.querySelector('.js-location-form'),
  cardInfo: document.querySelector('.js-ip-form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const ip = e.target.elements.userip.value;

  getInfoByIp(ip).then(data => {
    renderIp(data);
  });
});

function getInfoByIp(ip) {
  const BASE_URL = 'http://ip-api.com/json/';
  const FIELDS =
    '?fields=status,message,country,countryCode,regionName,city,timezone,lat,lon,currency,isp,query';

  const url = BASE_URL + ip + FIELDS;

  return fetch(url).then(res => res.json());
}

function renderIp({
  country,
  countryCode,
  city,
  timezone,
  currency,
  isp,
  lat,
  lon,
  query,
  status,
  message,
}) {
  if (status === 'fail') {
    refs.cardInfo.innerHTML = `
      <p>Помилка: ${message}</p>
    `;
    return;
  }

  const flag = `https://flagsapi.com/${countryCode}/flat/64.png`;

  const markup = `
    <div class="info-item">
      <img
        class="flag"
        src="${flag}"
        alt="Flag of ${country}"
      />
      <span class="info-label">Country:</span>
      <span class="info-value">${country}</span>
    </div>

    <div class="info-item">
      <span class="info-label">IP Address:</span>
      <span class="info-value">${query}</span>
    </div>

    <div class="info-item">
      <span class="info-label">City:</span>
      <span class="info-value">${city}</span>
    </div>

    <div class="info-item">
      <span class="info-label">Timezone:</span>
      <span class="info-value">${timezone}</span>
    </div>

    <div class="info-item">
      <span class="info-label">Currency:</span>
      <span class="info-value">${currency}</span>
    </div>

    <div class="info-item">
      <span class="info-label">ISP:</span>
      <span class="info-value">${isp}</span>
    </div>

    <div class="info-item">
      <span class="info-label">Google Maps:</span>
      <a
        href="https://www.google.com/maps/@${lat},${lon},13z"
        target="_blank"
      >
        <span class="info-value">Тицяй</span>
      </a>
    </div>
  `;

  refs.cardInfo.innerHTML = markup;
}
