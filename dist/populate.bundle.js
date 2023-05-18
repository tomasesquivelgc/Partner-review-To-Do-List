"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["populate"],{

/***/ "./src/delete-completed-tasks.js":
/*!***************************************!*\
  !*** ./src/delete-completed-tasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteAllCompleted = (task) => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const filteredArray = data.filter((element) => element.completed !== true);
  task.splice(0, task.length, ...filteredArray);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAllCompleted);

/***/ }),

/***/ "./src/liItem.js":
/*!***********************!*\
  !*** ./src/liItem.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/drag_icon.svg */ "./src/images/drag_icon.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveData.js */ "./src/saveData.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask.js */ "./src/removeTask.js");





const list = document.getElementById('list');

const createCheckbox = (task) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('change');
  if (task.completed === true) {
    checkbox.checked = true;
  }
  return checkbox;
};

const createDescription = (task) => {
  const description = document.createElement('input');
  description.type = 'text';
  description.value = task.description;
  description.classList.add('taskDescription');
  return description;
};

const createDelete = (i) => {
  const deleteIconImg = new Image();
  deleteIconImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteIconImg.classList.add('deleteBtnn');
  deleteIconImg.setAttribute('data-id', i);
  return deleteIconImg;
};

const createDrag = () => {
  const dragIconImg = new Image();
  dragIconImg.src = _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  return dragIconImg;
};

const createCompleteLi = (task, i, initial) => {
  const newLi = document.createElement('li');
  const checkbox = createCheckbox(task);
  const description = createDescription(task);
  const checkboxDescriptionDiv = document.createElement('div');
  const dragIconImg = createDrag();
  const deleteIconImg = createDelete(i);
  checkboxDescriptionDiv.appendChild(checkbox);
  checkboxDescriptionDiv.appendChild(description);
  checkboxDescriptionDiv.classList.add('checkboxDescription');
  checkbox.checked = task.completed;
  newLi.appendChild(checkboxDescriptionDiv);
  newLi.appendChild(deleteIconImg);
  newLi.appendChild(dragIconImg);
  list.appendChild(newLi);
  deleteIconImg.addEventListener('click', () => {
    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_3__["default"])(initial, i);
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(initial);
  });
  description.addEventListener('change', (event) => {
    const newDescription = event.target.value;
    task.description = newDescription;
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(initial);
  });
  checkbox.addEventListener('change', () => {
    task.completed = !task.completed;
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(initial);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCompleteLi);

/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_completed_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-completed-tasks.js */ "./src/delete-completed-tasks.js");
/* harmony import */ var _liItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liItem.js */ "./src/liItem.js");
/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveData.js */ "./src/saveData.js");




const list = document.getElementById('list');
class TaskList extends Array {
  constructor() {
    super();
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    this.push(...tasks);
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    this.forEach((task, i) => {
      (0,_liItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task, i, this);
    });
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  deleteCompletedTasks() {
    (0,_delete_completed_tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.render();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeTask = (task, position) => {
  task.splice(position, 1);
  task.forEach((element, j) => {
    element.index = j + 1;
  });
  task.render();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

/***/ }),

/***/ "./src/saveData.js":
/*!*************************!*\
  !*** ./src/saveData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveData": () => (/* binding */ saveData)
/* harmony export */ });
const saveData = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};



/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24315ab37634d58b5ce3.svg";

/***/ }),

/***/ "./src/images/drag_icon.svg":
/*!**********************************!*\
  !*** ./src/images/drag_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26b9018385c98f0f4edb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/populate.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ0Q7QUFDSjtBQUNBOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRThCO0FBQ2xCO0FBQ0o7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBZ0I7QUFDdEIsS0FBSztBQUNMLElBQUksc0RBQVE7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ2hDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ1J6QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS1jb21wbGV0ZWQtdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxldGVBbGxDb21wbGV0ZWQgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuY29tcGxldGVkICE9PSB0cnVlKTtcclxuICB0YXNrLnNwbGljZSgwLCB0YXNrLmxlbmd0aCwgLi4uZmlsdGVyZWRBcnJheSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVBbGxDb21wbGV0ZWQ7IiwiaW1wb3J0IGRyYWdJY29uIGZyb20gJy4vaW1hZ2VzL2RyYWdfaWNvbi5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vc2F2ZURhdGEuanMnO1xuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5cbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKHRhc2spID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hhbmdlJyk7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBjaGVja2JveDtcbn07XG5cbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVEZWxldGUgPSAoaSkgPT4ge1xuICBjb25zdCBkZWxldGVJY29uSW1nID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0ZUljb25JbWcuc3JjID0gZGVsZXRlSWNvbjtcbiAgZGVsZXRlSWNvbkltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG5uJyk7XG4gIGRlbGV0ZUljb25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gIHJldHVybiBkZWxldGVJY29uSW1nO1xufTtcblxuY29uc3QgY3JlYXRlRHJhZyA9ICgpID0+IHtcbiAgY29uc3QgZHJhZ0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZHJhZ0ljb25JbWcuc3JjID0gZHJhZ0ljb247XG4gIHJldHVybiBkcmFnSWNvbkltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbXBsZXRlTGkgPSAodGFzaywgaSwgaW5pdGlhbCkgPT4ge1xuICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3godGFzayk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFzayk7XG4gIGNvbnN0IGNoZWNrYm94RGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZHJhZ0ljb25JbWcgPSBjcmVhdGVEcmFnKCk7XG4gIGNvbnN0IGRlbGV0ZUljb25JbWcgPSBjcmVhdGVEZWxldGUoaSk7XG4gIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveERlc2NyaXB0aW9uJyk7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoY2hlY2tib3hEZXNjcmlwdGlvbkRpdik7XG4gIG5ld0xpLmFwcGVuZENoaWxkKGRlbGV0ZUljb25JbWcpO1xuICBuZXdMaS5hcHBlbmRDaGlsZChkcmFnSWNvbkltZyk7XG4gIGxpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICBkZWxldGVJY29uSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZVRhc2soaW5pdGlhbCwgaSk7XG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XG4gIH0pO1xuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XG4gIH0pO1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcGxldGVMaTsiLCJpbXBvcnQgZGVsZXRlQWxsQ29tcGxldGVkIGZyb20gJy4vZGVsZXRlLWNvbXBsZXRlZC10YXNrcy5qcyc7XG5pbXBvcnQgY3JlYXRlQ29tcGxldGVMaSBmcm9tICcuL2xpSXRlbS5qcyc7XG5pbXBvcnQge3NhdmVEYXRhfSBmcm9tICcuL3NhdmVEYXRhLmpzJztcblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5jbGFzcyBUYXNrTGlzdCBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIHRoaXMucHVzaCguLi50YXNrcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICB0aGlzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgIGNyZWF0ZUNvbXBsZXRlTGkodGFzaywgaSwgdGhpcyk7XG4gICAgfSk7XG4gICAgc2F2ZURhdGEodGhpcyk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnB1c2godGFzayk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRlbGV0ZUNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGRlbGV0ZUFsbENvbXBsZXRlZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0OyIsImNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaywgcG9zaXRpb24pID0+IHtcbiAgdGFzay5zcGxpY2UocG9zaXRpb24sIDEpO1xuICB0YXNrLmZvckVhY2goKGVsZW1lbnQsIGopID0+IHtcbiAgICBlbGVtZW50LmluZGV4ID0gaiArIDE7XG4gIH0pO1xuICB0YXNrLnJlbmRlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFzazsiLCJjb25zdCBzYXZlRGF0YSA9ICh0YXNrcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufTtcblxuZXhwb3J0IHtzYXZlRGF0YX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9