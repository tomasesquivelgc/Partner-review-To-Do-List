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
};



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
/* harmony export */   "TaskList": () => (/* binding */ TaskList)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEM7QUFDRDtBQUNKO0FBQ0E7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZCxJQUFJLHNEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXFCO0FBQ1Q7QUFDRjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQWdCO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNSekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZERlbGV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmVEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcblxuY29uc3QgZGVsZXRlQWxsQ29tcGxldGVkID0gKHRhc2spID0+IHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuY29tcGxldGVkICE9PSB0cnVlKTtcbiAgdGFzay5zcGxpY2UoMCwgdGFzay5sZW5ndGgsIC4uLmZpbHRlcmVkQXJyYXkpO1xufTtcblxuY29uc3QgYWRkTmV3VGFzayA9IChkZXNjcmlwdGlvbiwgbmV3TGlzdCkgPT4ge1xuICBpZiAoZGVzY3JpcHRpb24gIT09ICcnKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBmYWxzZSwgbmV3TGlzdC5sZW5ndGggKyAxKTtcbiAgICBuZXdMaXN0LnB1c2godGFzayk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGRlbGV0ZUFsbENvbXBsZXRlZCwgYWRkTmV3VGFzayB9OyIsImltcG9ydCBkcmFnSWNvbiBmcm9tICcuL2ltYWdlcy9kcmFnX2ljb24uc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSAnLi9zYXZlRGF0YS5qcyc7XHJcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKHRhc2spID0+IHtcclxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hhbmdlJyk7XHJcbiAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGNoZWNrYm94O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGVzY3JpcHRpb24gPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb24nKTtcclxuICByZXR1cm4gZGVzY3JpcHRpb247XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEZWxldGUgPSAoaSkgPT4ge1xyXG4gIGNvbnN0IGRlbGV0ZUljb25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWxldGVJY29uSW1nLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgZGVsZXRlSWNvbkltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG5uJyk7XHJcbiAgZGVsZXRlSWNvbkltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcclxuICByZXR1cm4gZGVsZXRlSWNvbkltZztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURyYWcgPSAoKSA9PiB7XHJcbiAgY29uc3QgZHJhZ0ljb25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBkcmFnSWNvbkltZy5zcmMgPSBkcmFnSWNvbjtcclxuICByZXR1cm4gZHJhZ0ljb25JbWc7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDb21wbGV0ZUxpID0gKHRhc2ssIGksIGluaXRpYWwpID0+IHtcclxuICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCh0YXNrKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2spO1xyXG4gIGNvbnN0IGNoZWNrYm94RGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkcmFnSWNvbkltZyA9IGNyZWF0ZURyYWcoKTtcclxuICBjb25zdCBkZWxldGVJY29uSW1nID0gY3JlYXRlRGVsZXRlKGkpO1xyXG4gIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hEZXNjcmlwdGlvbicpO1xyXG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcclxuICBuZXdMaS5hcHBlbmRDaGlsZChjaGVja2JveERlc2NyaXB0aW9uRGl2KTtcclxuICBuZXdMaS5hcHBlbmRDaGlsZChkZWxldGVJY29uSW1nKTtcclxuICBuZXdMaS5hcHBlbmRDaGlsZChkcmFnSWNvbkltZyk7XHJcbiAgbGlzdC5hcHBlbmRDaGlsZChuZXdMaSk7XHJcbiAgZGVsZXRlSWNvbkltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbW92ZVRhc2soaW5pdGlhbCwgaSk7XHJcbiAgICBzYXZlRGF0YShpbml0aWFsKTtcclxuICB9KTtcclxuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgc2F2ZURhdGEoaW5pdGlhbCk7XHJcbiAgfSk7XHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XHJcbiAgICBzYXZlRGF0YShpbml0aWFsKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBsZXRlTGk7IiwiaW1wb3J0IHsgZGVsZXRlQWxsQ29tcGxldGVkIH0gZnJvbSAnLi9hZGREZWxldGUuanMnO1xyXG5pbXBvcnQgY3JlYXRlQ29tcGxldGVMaSBmcm9tICcuL2xpSXRlbS5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSAnLi9zYXZlRGF0YS5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuY2xhc3MgVGFza0xpc3QgZXh0ZW5kcyBBcnJheSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIHRoaXMucHVzaCguLi50YXNrcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XHJcbiAgICB0aGlzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgICAgY3JlYXRlQ29tcGxldGVMaSh0YXNrLCBpLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgc2F2ZURhdGEodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMucHVzaCh0YXNrKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgIGRlbGV0ZUFsbENvbXBsZXRlZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1Rhc2tMaXN0fTsiLCJjb25zdCByZW1vdmVUYXNrID0gKHRhc2ssIHBvc2l0aW9uKSA9PiB7XHJcbiAgdGFzay5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gIHRhc2suZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xyXG4gICAgZWxlbWVudC5pbmRleCA9IGogKyAxO1xyXG4gIH0pO1xyXG4gIHRhc2sucmVuZGVyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuY29uc3Qgc2F2ZURhdGEgPSAodGFza3MpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2F2ZURhdGEgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=