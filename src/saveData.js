const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadData = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks ? tasks : [];
};

export { saveData, loadData };