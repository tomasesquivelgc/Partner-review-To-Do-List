import dragIcon from './images/drag_icon.svg';
import deleteIcon from './images/delete.svg';

const createCheckbox =(task) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('change');
  if (task.completed === true) {
    checkbox.checked = true;
  }
  return checkbox;
}

const createDescription = (task) => {
  const description = document.createElement('input');
  description.type = 'text';
  description.value = task.description;
  description.classList.add('taskDescription');
  return description;
}


const createDelete=(i)=>{
  const deleteIconImg = new Image();
  deleteIconImg.src = deleteIcon;
  deleteIconImg.classList.add('deleteBtnn');
  deleteIconImg.setAttribute('data-id', i);
  return deleteIconImg;
}

const createDrag =() => {
  const dragIconImg = new Image();
  dragIconImg.src = dragIcon;
  return dragIconImg;
}

export {createCheckbox, createDescription, createDelete, createDrag};