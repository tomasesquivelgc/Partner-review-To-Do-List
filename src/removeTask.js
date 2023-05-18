const removeTask = (task, position) => {
  task.splice(position, 1);
  task.forEach((element, i) => {
    element.index = i + 1;
  });
  task.render();
}

export {removeTask}