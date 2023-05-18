"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["populate"],{

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

/***/ "./src/modules/delete-complete-tasks.js":
/*!**********************************************!*\
  !*** ./src/modules/delete-complete-tasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteAllComplete = (task) => {
  const newArray = [];
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].completed === false) {
      newArray.push(task[i]);
    }
  }
  task.length = 0;
  task.push(...newArray);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAllComplete);

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
/* harmony import */ var _modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/delete-complete-tasks.js */ "./src/modules/delete-complete-tasks.js");
/* harmony import */ var _liItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liItem.js */ "./src/liItem.js");
/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveData.js */ "./src/saveData.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask.js */ "./src/removeTask.js");





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
      (0,_liItem_js__WEBPACK_IMPORTED_MODULE_1__.createCompleteLi)(task, i, this);
    });
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  deleteCompletedTasks() {
    (0,_modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFDSjtBQUNJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYbUM7QUFHOUM7QUFDbUI7QUFDSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBZ0I7QUFDdEIsS0FBSztBQUNMLElBQUksc0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2RUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3BDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZS1jb21wbGV0ZS10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmVEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkcmFnSWNvbiBmcm9tICcuL2ltYWdlcy9kcmFnX2ljb24uc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSAnLi9zYXZlRGF0YS5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcblxyXG5jb25zdCBjcmVhdGVDaGVja2JveCA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xyXG4gIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBjaGVja2JveDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGVsZXRlID0gKGkpID0+IHtcclxuICBjb25zdCBkZWxldGVJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgZGVsZXRlSWNvbkltZy5zcmMgPSBkZWxldGVJY29uO1xyXG4gIGRlbGV0ZUljb25JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRubicpO1xyXG4gIGRlbGV0ZUljb25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcbiAgcmV0dXJuIGRlbGV0ZUljb25JbWc7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEcmFnID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRyYWdJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgZHJhZ0ljb25JbWcuc3JjID0gZHJhZ0ljb247XHJcbiAgcmV0dXJuIGRyYWdJY29uSW1nO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29tcGxldGVMaSA9ICh0YXNrLCBpLCBpbml0aWFsKSA9PiB7XHJcbiAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3godGFzayk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbih0YXNrKTtcclxuICBjb25zdCBjaGVja2JveERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZHJhZ0ljb25JbWcgPSBjcmVhdGVEcmFnKCk7XHJcbiAgY29uc3QgZGVsZXRlSWNvbkltZyA9IGNyZWF0ZURlbGV0ZShpKTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94RGVzY3JpcHRpb24nKTtcclxuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoY2hlY2tib3hEZXNjcmlwdGlvbkRpdik7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkltZyk7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoZHJhZ0ljb25JbWcpO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xyXG4gIGRlbGV0ZUljb25JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVUYXNrKGluaXRpYWwsIGkpO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbClcclxuICB9KTtcclxuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XHJcbiAgfSk7XHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XHJcbiAgICBzYXZlRGF0YShpbml0aWFsKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVDb21wbGV0ZUxpXHJcbn07IiwiY29uc3QgZGVsZXRlQWxsQ29tcGxldGUgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGFza1tpXS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIG5ld0FycmF5LnB1c2godGFza1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhc2subGVuZ3RoID0gMDtcclxuICB0YXNrLnB1c2goLi4ubmV3QXJyYXkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlQWxsQ29tcGxldGU7IiwiaW1wb3J0IGRlbGV0ZUFsbENvbXBsZXRlIGZyb20gJy4vbW9kdWxlcy9kZWxldGUtY29tcGxldGUtdGFza3MuanMnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNvbXBsZXRlTGlcclxufSBmcm9tICcuL2xpSXRlbS5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhfSBmcm9tICcuL3NhdmVEYXRhLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuXHJcbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB0aGlzLnB1c2goLi4udGFza3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gICAgdGhpcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgIGNyZWF0ZUNvbXBsZXRlTGkodGFzaywgaSwgdGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29tcGxldGVkVGFza3MoKSB7XHJcbiAgICBkZWxldGVBbGxDb21wbGV0ZSh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDsiLCJjb25zdCByZW1vdmVUYXNrID0gKHRhc2ssIHBvc2l0aW9uKSA9PiB7XHJcbiAgdGFzay5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gIHRhc2suZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xyXG4gICAgZWxlbWVudC5pbmRleCA9IGogKyAxO1xyXG4gIH0pO1xyXG4gIHRhc2sucmVuZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVtb3ZlVGFza30iLCJjb25zdCBzYXZlRGF0YSA9ICh0YXNrcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgc2F2ZURhdGEsIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9