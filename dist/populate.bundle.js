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
/* harmony export */   "createCompleteLi": () => (/* binding */ createCompleteLi)
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
    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_3__.removeTask)(initial, i);
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(initial)
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
}



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
      (0,_liItem_js__WEBPACK_IMPORTED_MODULE_1__.createCompleteLi)(task, i, this);
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
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
const removeTask = (task, position) => {
  task.splice(position, 1);
  task.forEach((element, j) => {
    element.index = j + 1;
  });
  task.render();
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ0Q7QUFDSjtBQUNJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFNkQ7QUFHeEM7QUFDbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWdCO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNuQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLWNvbXBsZXRlZC10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmVEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGV0ZUFsbENvbXBsZXRlZCA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gIHRhc2suc3BsaWNlKDAsIHRhc2subGVuZ3RoLCAuLi5maWx0ZXJlZEFycmF5KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUFsbENvbXBsZXRlZDsiLCJpbXBvcnQgZHJhZ0ljb24gZnJvbSAnLi9pbWFnZXMvZHJhZ19pY29uLnN2Zyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vc2F2ZURhdGEuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xyXG5cclxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UnKTtcclxuICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gY2hlY2tib3g7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xyXG4gIHJldHVybiBkZXNjcmlwdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURlbGV0ZSA9IChpKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlbGV0ZUljb25JbWcuc3JjID0gZGVsZXRlSWNvbjtcclxuICBkZWxldGVJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ0bm4nKTtcclxuICBkZWxldGVJY29uSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG4gIHJldHVybiBkZWxldGVJY29uSW1nO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRHJhZyA9ICgpID0+IHtcclxuICBjb25zdCBkcmFnSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGRyYWdJY29uSW1nLnNyYyA9IGRyYWdJY29uO1xyXG4gIHJldHVybiBkcmFnSWNvbkltZztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbXBsZXRlTGkgPSAodGFzaywgaSwgaW5pdGlhbCkgPT4ge1xyXG4gIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRhc2spO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFzayk7XHJcbiAgY29uc3QgY2hlY2tib3hEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRyYWdJY29uSW1nID0gY3JlYXRlRHJhZygpO1xyXG4gIGNvbnN0IGRlbGV0ZUljb25JbWcgPSBjcmVhdGVEZWxldGUoaSk7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveERlc2NyaXB0aW9uJyk7XHJcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGNoZWNrYm94RGVzY3JpcHRpb25EaXYpO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGRlbGV0ZUljb25JbWcpO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGRyYWdJY29uSW1nKTtcclxuICBsaXN0LmFwcGVuZENoaWxkKG5ld0xpKTtcclxuICBkZWxldGVJY29uSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlVGFzayhpbml0aWFsLCBpKTtcclxuICAgIHNhdmVEYXRhKGluaXRpYWwpXHJcbiAgfSk7XHJcbiAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIHNhdmVEYXRhKGluaXRpYWwpO1xyXG4gIH0pO1xyXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQ29tcGxldGVMaVxyXG59OyIsImltcG9ydCBkZWxldGVBbGxDb21wbGV0ZWQgZnJvbSAnLi9kZWxldGUtY29tcGxldGVkLXRhc2tzLmpzJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDb21wbGV0ZUxpXHJcbn0gZnJvbSAnLi9saUl0ZW0uanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YX0gZnJvbSAnLi9zYXZlRGF0YS5qcyc7XHJcblxyXG5cclxuXHJcbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB0aGlzLnB1c2goLi4udGFza3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gICAgdGhpcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgIGNyZWF0ZUNvbXBsZXRlTGkodGFzaywgaSwgdGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29tcGxldGVkVGFza3MoKSB7XHJcbiAgICBkZWxldGVBbGxDb21wbGV0ZWQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7IiwiY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrLCBwb3NpdGlvbikgPT4ge1xyXG4gIHRhc2suc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICB0YXNrLmZvckVhY2goKGVsZW1lbnQsIGopID0+IHtcclxuICAgIGVsZW1lbnQuaW5kZXggPSBqICsgMTtcclxuICB9KTtcclxuICB0YXNrLnJlbmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQge3JlbW92ZVRhc2t9IiwiY29uc3Qgc2F2ZURhdGEgPSAodGFza3MpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7IHNhdmVEYXRhLCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==