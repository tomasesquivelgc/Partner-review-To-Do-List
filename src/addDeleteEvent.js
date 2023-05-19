import { addNewTask } from "./addDelete";
const eventListeners = (newList) => {
  const newChore = document.querySelector('.addChore');
  const deleteButonn = document.querySelector('.clearBtnn');
  
  newChore.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const description = newChore.value.trim();
      addNewTask(description, newList);
      newChore.value = '';
      newList.render();
    }
  });
  
  deleteButonn.addEventListener('click', () => {
    newList.deleteCompletedTasks();
  });
}

export default eventListeners;