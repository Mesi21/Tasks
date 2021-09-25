import './style.css';
import navBar from './nav.js';
import createEle from './helpers/createEle.js';
import createTask from './helpers/createTasks.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

class Todo {
  constructor() {
    this.tasks = [];
  }

  localSave() {
    localStorage.setItem('AllTasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    const listItems = document.getElementById('listItems');
    if (localStorage.getItem('AllTasks') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('AllTasks'));
    }
    const header = createEle('div', null, 'header-ele', 'Today\'s todos');
    const add = createEle('div', null, 'add-new', null);
    const newTodo = createEle('input', 'newToAdd', 'to-add', null);
    const newBtn = createEle('button', 'submit', 'submit', 'Add');
    const clearAllFinished = createEle('div', null, 'clear', 'Clear all completed');
    newTodo.setAttribute('type', 'text');
    newTodo.setAttribute('placeholder', 'Add to your list');
    newBtn.setAttribute('type', 'submit');
    add.appendChild(newTodo);
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
    newBtn.addEventListener('click', () => {
      createTask(this.tasks, newTodo.value);
      this.localSave();
      window.onload = () => this.displayTasks;
      window.location.reload();
    });
    clearAllFinished.setAttribute('id', 'clear');
    listItems.appendChild(list);
    listItems.appendChild(clearAllFinished);
    return listItems;
  }
}
document.body.appendChild(navBar());
const newTodo = new Todo();
newTodo.displayTasks();