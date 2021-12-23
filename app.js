const title = document.querySelector('#title');

const handleTitleClick = () => {
  title.classList.toggle('clicked');
};

title.addEventListener('click', handleTitleClick);
