import toggleCompleted from './complete-task.js';
import deleteAllComplete from './modules/delete-complete-tasks.js';
import {
  createCheckbox, createDescription, createDelete, createDrag,
} from './liItem.js';
import { saveData } from './saveData.js';

const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    this.forEach((task, i) => {
      const newLi = document.createElement('li');
      const checkbox = createCheckbox(task);
      const description = createDescription(task);
      const checkboxDescriptionDiv = document.createElement('div');
      const dragIconImg = createDrag();
      const deleteIconImg = createDelete(i);
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      checkboxDescriptionDiv.classList.add('checkboxDescription');
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(dragIconImg);
      list.appendChild(newLi);
      deleteIconImg.addEventListener('click', () => {
        this.removeTask(i);
      });
      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        task.description = newDescription;
        saveData(this);
      });
      checkbox.addEventListener('change', () => {
        this.toggleCompleted(i);
        saveData(this);
      });
    });
    saveData(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    this.forEach((task, i) => {
      task.index = i + 1;
    });
    this.render();
  }

  loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach((task) => {
        this.push(task);
      });
      this.render();
    }
  }

  toggleCompleted(index) {
    const task = this[index];
    toggleCompleted(task);
    saveData(this);
  }

  deleteCompletedTasks() {
    deleteAllComplete(this);
    this.render();
  }
}

export default TaskList;