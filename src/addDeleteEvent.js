import Task from './Task.js';
const eventListeners = (newList) => {
  const newChore = document.querySelector('.addChore');
  const deleteButonn = document.querySelector('.clearBtnn');
  
  newChore.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const description = newChore.value.trim();
      if (description !== '') {
        const task = new Task(description, false, newList.length + 1);
        newList.addTask(task);
        newChore.value = '';
      }
    }
  });
  
  deleteButonn.addEventListener('click', () => {
    newList.deleteCompletedTasks();
  });
}

export default eventListeners;