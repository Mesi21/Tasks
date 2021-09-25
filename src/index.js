import './style.css';
import navBar from './nav.js';
import createEle from './helpers/createEle.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

class Todo {
  constructor() {
    this.tasks = [
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
}

  localSave() {
    localStorage.setItem('AllTasks', JSON.stringify(this.tasks));
  }

  toggleState(checkBox, item) {
    if (checkBox.checked) {
      this.item.completed = true;
    } else {
      this.item.completed = false;
    }
    return item;
  }

  displayTasks() {
    const listItems = document.getElementById('listItems');
    if (localStorage.getItem('AllTasks') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('AllTasks'));
    }
    const header = createEle('div', null, 'header-ele', 'Today\'s todos');
    const add = createEle('div', null, 'add-new', null);
    const addNewTodo = createEle('input', null, 'to-add', null, null);
    const newBtn = createEle('button', null, 'submit', 'Add');
    const clearAllFinished = createEle('div', null, 'clear', 'Clear all completed');
    addNewTodo.setAttribute('type', 'text');
    addNewTodo.setAttribute('placeholder', 'Add to your list');
    newBtn.setAttribute('type', 'submit');
    add.appendChild(addNewTodo);
    add.appendChild(newBtn);
    listItems.appendChild(header);
    listItems.appendChild(add);
    const list = createEle('ul', 'todos', 'list-todos', null);
    this.tasks.forEach((task) => {
      const row = createEle('li', null, null, null);
      const input = createEle('input', null, task.index, null);
      const dots = createEle('i', 'fas fa-ellipsis-v', null, null);
      const label = createEle('label', null, null, `Task ${task.index + 1}`);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('value', task.description);
      input.checked = task.completed;
      input.addEventListener('change', (e) => {
        task.completed = e.target.checked;
        this.localSave();
      });
      label.htmlFor = `${task.index}`;
      row.appendChild(label);
      row.appendChild(input);
      row.appendChild(dots);
      list.appendChild(row);
    });
    clearAllFinished.setAttribute('id', 'clear');
    listItems.appendChild(list);
    listItems.appendChild(clearAllFinished);
    return listItems;
  }
}
document.body.appendChild(navBar());
const newTodo = new Todo();
newTodo.localSave();
newTodo.displayTasks();