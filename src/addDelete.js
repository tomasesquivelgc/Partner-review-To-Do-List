import Task from './Task.js';

const deleteAllCompleted = (task) => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const filteredArray = data.filter((element) => element.completed !== true);
  task.splice(0, task.length, ...filteredArray);
};

const addNewTask = (description, newList) => {
  if (description !== '') {
    const task = new Task(description, false, newList.length + 1);
    newList.push(task);
  }
};

export { deleteAllCompleted, addNewTask };