const API_KEY = '827dfb41227de50c8b08527f367939d8';

const onGeoOk = (position) => {
  const { latitude: lat, longitude: lon } = position.coords;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((res) => {
      const weather = document.querySelector('#weather span');

      // city.innerText = res.name;
      weather.innerText = `${res.main.temp}°@${res.name}`;
    });
};

const onGeoError = () => {
  alert(`can't find you. No wheather for you.`);
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
