import { addNewTask } from "./addDelete";
const eventListeners = (newList) => {
  const newChore = document.querySelector('.addChore');
  const deleteButonn = document.querySelector('.clearBtnn');
  
  newChore.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addNewTask(newChore, newList);
    }
  });
  
  deleteButonn.addEventListener('click', () => {
    newList.deleteCompletedTasks();
  });
}

export default eventListeners;