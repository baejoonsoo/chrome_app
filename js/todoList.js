const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];

const TODOS_KEY = 'todos';
const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const delToDo = (event) => {
  const li = event.target.parentElement;

  li.remove();

  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  console.log(toDos);
  saveToDos();
};

const printToDo = (newToDo) => {
  const li = document.createElement('li');
  li.id = newToDo.id;

  const span = document.createElement('span');
  span.innerText = newToDo.text;

  const button = document.createElement('button');
  button.innerText = '❌';

  button.addEventListener('click', delToDo);

  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
  console.log(newToDo);
};

const toDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  console.log('submit');
  toDos.push(newToDoObj);
  printToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener('submit', toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  console.log('dfsja');
  console.log(savedToDos);
  const parsed = JSON.parse(savedToDos);

  toDos = parsed;
  parsed.forEach(printToDo);
} else {
  console.log('null');
  localStorage.setItem(TODOS_KEY, '');
}
