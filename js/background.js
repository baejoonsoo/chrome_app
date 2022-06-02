const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];

const getBackground = () => {
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  const bgImg = document.createElement('img');
  bgImg.src = `img/${chosenImage}`;
  bgImg.className = 'background-img';

  document.body.appendChild(bgImg);
};

getBackground();
