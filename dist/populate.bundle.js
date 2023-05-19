"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["populate"],{

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/addDelete.js":
/*!**************************!*\
  !*** ./src/addDelete.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteAllCompleted": () => (/* binding */ deleteAllCompleted)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");

const deleteAllCompleted = (task) => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const filteredArray = data.filter((element) => element.completed !== true);
  task.splice(0, task.length, ...filteredArray);
};

const addNewTask = (description, newList) => {
      if (description !== '') {
        const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, false, newList.length + 1);
        newList.push(task);
      }
}



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
/* harmony import */ var _addDelete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDelete.js */ "./src/addDelete.js");
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
    (0,_addDelete_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllCompleted)(this);
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
/* eslint-disable import/prefer-default-export */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhDO0FBQ0Q7QUFDSjtBQUNBO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSxzREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVxQjtBQUNUO0FBQ0Y7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFnQjtBQUN0QixLQUFLO0FBQ0wsSUFBSSxzREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ1J6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkRGVsZXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZURhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xyXG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xyXG5jb25zdCBkZWxldGVBbGxDb21wbGV0ZWQgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuY29tcGxldGVkICE9PSB0cnVlKTtcclxuICB0YXNrLnNwbGljZSgwLCB0YXNrLmxlbmd0aCwgLi4uZmlsdGVyZWRBcnJheSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGROZXdUYXNrID0gKGRlc2NyaXB0aW9uLCBuZXdMaXN0KSA9PiB7XHJcbiAgICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gJycpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIGZhbHNlLCBuZXdMaXN0Lmxlbmd0aCArIDEpO1xyXG4gICAgICAgIG5ld0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQge2RlbGV0ZUFsbENvbXBsZXRlZCwgYWRkTmV3VGFza30iLCJpbXBvcnQgZHJhZ0ljb24gZnJvbSAnLi9pbWFnZXMvZHJhZ19pY29uLnN2Zyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vc2F2ZURhdGEuanMnO1xyXG5pbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcblxyXG5jb25zdCBjcmVhdGVDaGVja2JveCA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xyXG4gIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBjaGVja2JveDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGVsZXRlID0gKGkpID0+IHtcclxuICBjb25zdCBkZWxldGVJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgZGVsZXRlSWNvbkltZy5zcmMgPSBkZWxldGVJY29uO1xyXG4gIGRlbGV0ZUljb25JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRubicpO1xyXG4gIGRlbGV0ZUljb25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcbiAgcmV0dXJuIGRlbGV0ZUljb25JbWc7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEcmFnID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRyYWdJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgZHJhZ0ljb25JbWcuc3JjID0gZHJhZ0ljb247XHJcbiAgcmV0dXJuIGRyYWdJY29uSW1nO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29tcGxldGVMaSA9ICh0YXNrLCBpLCBpbml0aWFsKSA9PiB7XHJcbiAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3godGFzayk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbih0YXNrKTtcclxuICBjb25zdCBjaGVja2JveERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZHJhZ0ljb25JbWcgPSBjcmVhdGVEcmFnKCk7XHJcbiAgY29uc3QgZGVsZXRlSWNvbkltZyA9IGNyZWF0ZURlbGV0ZShpKTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94RGVzY3JpcHRpb24nKTtcclxuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoY2hlY2tib3hEZXNjcmlwdGlvbkRpdik7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkltZyk7XHJcbiAgbmV3TGkuYXBwZW5kQ2hpbGQoZHJhZ0ljb25JbWcpO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xyXG4gIGRlbGV0ZUljb25JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVUYXNrKGluaXRpYWwsIGkpO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XHJcbiAgfSk7XHJcbiAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIHNhdmVEYXRhKGluaXRpYWwpO1xyXG4gIH0pO1xyXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wbGV0ZUxpOyIsImltcG9ydCB7IGRlbGV0ZUFsbENvbXBsZXRlZCB9IGZyb20gJy4vYWRkRGVsZXRlLmpzJztcclxuaW1wb3J0IGNyZWF0ZUNvbXBsZXRlTGkgZnJvbSAnLi9saUl0ZW0uanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vc2F2ZURhdGEuanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB0aGlzLnB1c2goLi4udGFza3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gICAgdGhpcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgIGNyZWF0ZUNvbXBsZXRlTGkodGFzaywgaSwgdGhpcyk7XHJcbiAgICB9KTtcclxuICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29tcGxldGVkVGFza3MoKSB7XHJcbiAgICBkZWxldGVBbGxDb21wbGV0ZWQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7IiwiY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrLCBwb3NpdGlvbikgPT4ge1xyXG4gIHRhc2suc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICB0YXNrLmZvckVhY2goKGVsZW1lbnQsIGopID0+IHtcclxuICAgIGVsZW1lbnQuaW5kZXggPSBqICsgMTtcclxuICB9KTtcclxuICB0YXNrLnJlbmRlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlVGFzazsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmNvbnN0IHNhdmVEYXRhID0gKHRhc2tzKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNhdmVEYXRhIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9