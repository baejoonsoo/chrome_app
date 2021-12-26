const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const delToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
};

const printToDO = (newToDo) => {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = newToDo;
  const button = document.createElement('button');
  button.innerText = '❌';

  button.addEventListener('click', delToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
};

const toDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';

  printToDO(newToDo);
};

toDoForm.addEventListener('submit', toDoSubmit);
