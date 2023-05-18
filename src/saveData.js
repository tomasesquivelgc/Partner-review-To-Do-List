const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {saveData};