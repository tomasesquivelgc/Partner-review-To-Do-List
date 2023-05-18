/* eslint-disable import/prefer-default-export */
const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { saveData };