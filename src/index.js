import _ from 'lodash';
import './style.css';
import navBar from './nav.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const tasks = [
  {
    description: 'task1',
    completed: false,
    index: 0,
  },
  {
    description: 'task2',
    completed: false,
    index: 1,
  },
  {
    description: 'task3',
    completed: false,
    index: 2,
  },
];

const displayTasks = () => {
  const listItems = document.getElementById('listItems');
  const header = document.createElement('div');
  const add = document.createElement('div');
  const addNewTodo = document.createElement('input');
  const newBtn = document.createElement('button');
  const clearAllFinished = document.createElement('div');
  header.setAttribute('id', 'header-ele');
  header.innerHTML = 'Today\'s todos';
  add.setAttribute('id', 'add-new');
  addNewTodo.setAttribute('type', 'text');
  addNewTodo.setAttribute('placeholder', 'Add to your list');
  newBtn.setAttribute('type', 'submit');
  newBtn.setAttribute('id', 'submit');
  newBtn.innerHTML = 'Add';
  add.appendChild(addNewTodo);
  add.appendChild(newBtn);
  listItems.appendChild(header);
  listItems.appendChild(add);
  const list = document.createElement('ul');
  list.className = ('toDos');
  tasks.forEach((task) => {
    const row = document.createElement('li');
    const input = document.createElement('input');
    const dots = document.createElement('i');
    const label = document.createElement('label');
    dots.setAttribute('class', 'fas fa-ellipsis-v');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', task.description);
    input.setAttribute('id', task.index);
    label.htmlFor = `${task.index}`; 
    label.innerText = `Task ${task.index + 1}`;
    row.appendChild(label);
    row.appendChild(input);
    row.appendChild(dots);
    list.appendChild(row);
  })
  clearAllFinished.setAttribute('id', 'clear');
  clearAllFinished.innerHTML = 'Clear all completed';
  listItems.appendChild(list);
  listItems.appendChild(clearAllFinished);
  return listItems;
};

document.body.appendChild(navBar());
document.body.appendChild(displayTasks());