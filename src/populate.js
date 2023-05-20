import { deleteAllCompleted } from './addDelete.js';
import createCompleteLi from './liItem.js';
import { saveData } from './saveData.js';

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
      createCompleteLi(task, i, this);
    });
    saveData(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  deleteCompletedTasks() {
    deleteAllCompleted(this);
    this.render();
  }
}

export {TaskList};