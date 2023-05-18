const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadData = (initial) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach((task) => {
        initial.push(task);
      });
    }
};

export { saveData, loadData };