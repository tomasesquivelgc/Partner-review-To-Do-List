import './style.css';
import TaskList from './populate.js';
import eventListeners from './addDeleteEvent';

const newList = new TaskList();

newList.render();
eventListeners(newList);
