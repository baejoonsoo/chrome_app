const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USER_NAME_KEY = 'userName';
const HIDDEN_CLASSNAME = 'hidden';

const onSubmitBtn = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);

  paintGreetings();
};

const paintGreetings = () => {
  const userName = localStorage.getItem(USER_NAME_KEY);
  greeting.innerHTML = `Hello <b>${userName}</b>!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUserName = localStorage.getItem(USER_NAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onSubmitBtn);
} else {
  paintGreetings();
}
