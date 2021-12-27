const onGeoOk = (position) => {
  const { latitude, longitude } = position.coords;
  console.log('you live in ', latitude, longitude);
};

const onGeoError = () => {
  alert(`can't find you. No wheather for you.`);
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
