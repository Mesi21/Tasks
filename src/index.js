import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'task1',
    completed: false,
    index: 0
  },
  {
    description: 'task2',
    completed: false,
    index: 1
  },
  {
    description: 'task3',
    completed: false,
    index: 2
  },
]

const displayTasks = () => {
  const listItems = document.getElementById('listItems');
  const list = document.createElement('ul');
  list.className = ('toDos');
  tasks.forEach((task) => {
    const row = document.createElement('li')
    row.innerHTML = `${task.description}`
    list.appendChild(row);
  })
  listItems.appendChild(list);
  return listItems;
};

document.body.appendChild(displayTasks());