clock = document.querySelector('h2#clock');

let m = 0;
let s = 0;

const getClock = () => {
  const date = new Date();
  const house = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${house} : ${minute} : ${second}`;
};

getClock();
setInterval(getClock, 1000);
