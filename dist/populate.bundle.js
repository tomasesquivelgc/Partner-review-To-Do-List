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
        newList.addTask(task);
        newChore.value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkOEM7QUFDRDtBQUNKO0FBQ0E7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZCxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXFCO0FBQ1Q7QUFDRjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQWdCO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNoQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDUnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGREZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7XHJcbiIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XHJcbmNvbnN0IGRlbGV0ZUFsbENvbXBsZXRlZCA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gIHRhc2suc3BsaWNlKDAsIHRhc2subGVuZ3RoLCAuLi5maWx0ZXJlZEFycmF5KTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE5ld1Rhc2sgPSAoZGVzY3JpcHRpb24sIG5ld0xpc3QpID0+IHtcclxuICAgICAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgZmFsc2UsIG5ld0xpc3QubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgbmV3TGlzdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIG5ld0Nob3JlLnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtkZWxldGVBbGxDb21wbGV0ZWQsIGFkZE5ld1Rhc2t9IiwiaW1wb3J0IGRyYWdJY29uIGZyb20gJy4vaW1hZ2VzL2RyYWdfaWNvbi5zdmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltYWdlcy9kZWxldGUuc3ZnJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL3NhdmVEYXRhLmpzJztcclxuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xyXG5cclxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UnKTtcclxuICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gY2hlY2tib3g7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xyXG4gIHJldHVybiBkZXNjcmlwdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURlbGV0ZSA9IChpKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlbGV0ZUljb25JbWcuc3JjID0gZGVsZXRlSWNvbjtcclxuICBkZWxldGVJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ0bm4nKTtcclxuICBkZWxldGVJY29uSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG4gIHJldHVybiBkZWxldGVJY29uSW1nO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRHJhZyA9ICgpID0+IHtcclxuICBjb25zdCBkcmFnSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGRyYWdJY29uSW1nLnNyYyA9IGRyYWdJY29uO1xyXG4gIHJldHVybiBkcmFnSWNvbkltZztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbXBsZXRlTGkgPSAodGFzaywgaSwgaW5pdGlhbCkgPT4ge1xyXG4gIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRhc2spO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFzayk7XHJcbiAgY29uc3QgY2hlY2tib3hEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRyYWdJY29uSW1nID0gY3JlYXRlRHJhZygpO1xyXG4gIGNvbnN0IGRlbGV0ZUljb25JbWcgPSBjcmVhdGVEZWxldGUoaSk7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveERlc2NyaXB0aW9uJyk7XHJcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGNoZWNrYm94RGVzY3JpcHRpb25EaXYpO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGRlbGV0ZUljb25JbWcpO1xyXG4gIG5ld0xpLmFwcGVuZENoaWxkKGRyYWdJY29uSW1nKTtcclxuICBsaXN0LmFwcGVuZENoaWxkKG5ld0xpKTtcclxuICBkZWxldGVJY29uSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlVGFzayhpbml0aWFsLCBpKTtcclxuICAgIHNhdmVEYXRhKGluaXRpYWwpO1xyXG4gIH0pO1xyXG4gIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICBzYXZlRGF0YShpbml0aWFsKTtcclxuICB9KTtcclxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcclxuICAgIHNhdmVEYXRhKGluaXRpYWwpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcGxldGVMaTsiLCJpbXBvcnQgeyBkZWxldGVBbGxDb21wbGV0ZWQgfSBmcm9tICcuL2FkZERlbGV0ZS5qcyc7XHJcbmltcG9ydCBjcmVhdGVDb21wbGV0ZUxpIGZyb20gJy4vbGlJdGVtLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL3NhdmVEYXRhLmpzJztcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xyXG5jbGFzcyBUYXNrTGlzdCBleHRlbmRzIEFycmF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgdGhpcy5wdXNoKC4uLnRhc2tzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICAgIHRoaXMuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xyXG4gICAgICBjcmVhdGVDb21wbGV0ZUxpKHRhc2ssIGksIHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICBzYXZlRGF0YSh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy5wdXNoKHRhc2spO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgZGVsZXRlQWxsQ29tcGxldGVkKHRoaXMpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0OyIsImNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaywgcG9zaXRpb24pID0+IHtcclxuICB0YXNrLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgdGFzay5mb3JFYWNoKChlbGVtZW50LCBqKSA9PiB7XHJcbiAgICBlbGVtZW50LmluZGV4ID0gaiArIDE7XHJcbiAgfSk7XHJcbiAgdGFzay5yZW5kZXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRhc2s7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5jb25zdCBzYXZlRGF0YSA9ICh0YXNrcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBzYXZlRGF0YSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==