import deleteAllComplete from './modules/delete-complete-tasks.js';
import {
  createCheckbox, createDescription, createDelete, createDrag,
} from './liItem.js';
import { saveData} from './saveData.js';
import { removeTask } from './removeTask.js';

const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    this.push(...tasks);
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
      checkbox.checked = task.completed;
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(dragIconImg);
      list.appendChild(newLi);
      deleteIconImg.addEventListener('click', () => {
        removeTask(this, i);
        saveData(this)
      });
      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        task.description = newDescription;
        saveData(this);
      });
      checkbox.addEventListener('change', () => {
        task.completed = !task.completed;
        saveData(this);
      });
    });
    saveData(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  deleteCompletedTasks() {
    deleteAllComplete(this);
    this.render();
  }
}

export default TaskList;