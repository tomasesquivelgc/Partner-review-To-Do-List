"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["populate"],{

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleCompleted = (task) => {
  task.completed = !task.completed;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleCompleted);

/***/ }),

/***/ "./src/liItem.js":
/*!***********************!*\
  !*** ./src/liItem.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCheckbox": () => (/* binding */ createCheckbox),
/* harmony export */   "createDelete": () => (/* binding */ createDelete),
/* harmony export */   "createDescription": () => (/* binding */ createDescription),
/* harmony export */   "createDrag": () => (/* binding */ createDrag)
/* harmony export */ });
/* harmony import */ var _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/drag_icon.svg */ "./src/images/drag_icon.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");



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
/* harmony import */ var _complete_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-task.js */ "./src/complete-task.js");
/* harmony import */ var _modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/delete-complete-tasks.js */ "./src/modules/delete-complete-tasks.js");
/* harmony import */ var _liItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liItem.js */ "./src/liItem.js");
/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveData.js */ "./src/saveData.js");





const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_3__.loadData)(this);
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    this.forEach((task, i) => {
      const newLi = document.createElement('li');
      const checkbox = (0,_liItem_js__WEBPACK_IMPORTED_MODULE_2__.createCheckbox)(task);
      const description = (0,_liItem_js__WEBPACK_IMPORTED_MODULE_2__.createDescription)(task);
      const checkboxDescriptionDiv = document.createElement('div');
      const dragIconImg = (0,_liItem_js__WEBPACK_IMPORTED_MODULE_2__.createDrag)();
      const deleteIconImg = (0,_liItem_js__WEBPACK_IMPORTED_MODULE_2__.createDelete)(i);
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      checkboxDescriptionDiv.classList.add('checkboxDescription');
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(dragIconImg);
      list.appendChild(newLi);
      deleteIconImg.addEventListener('click', () => {
        this.removeTask(i);
      });
      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        task.description = newDescription;
        (0,_saveData_js__WEBPACK_IMPORTED_MODULE_3__.saveData)(this);
      });
      checkbox.addEventListener('change', () => {
        this.toggleCompleted(i);
        (0,_saveData_js__WEBPACK_IMPORTED_MODULE_3__.saveData)(this);
      });
    });
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_3__.saveData)(this);
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    this.forEach((task, i) => {
      task.index = i + 1;
    });
    this.render();
  }

  loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach((task) => {
        this.push(task);
      });
      this.render();
    }
  }

  toggleCompleted(index) {
    const task = this[index];
    (0,_complete_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_3__.saveData)(this);
  }

  deleteCompletedTasks() {
    (0,_modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
    this.render();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./src/saveData.js":
/*!*************************!*\
  !*** ./src/saveData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "saveData": () => (/* binding */ saveData)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZ0I7QUFDRDs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hpQjtBQUNrQjtBQUc5QztBQUM4QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQWM7QUFDckMsMEJBQTBCLDZEQUFpQjtBQUMzQztBQUNBLDBCQUEwQixzREFBVTtBQUNwQyw0QkFBNEIsd0RBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVE7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQSxRQUFRLHNEQUFRO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxzREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFlO0FBQ25CLElBQUksc0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ25GdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcGxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlLWNvbXBsZXRlLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAodGFzaykgPT4ge1xyXG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29tcGxldGVkOyIsImltcG9ydCBkcmFnSWNvbiBmcm9tICcuL2ltYWdlcy9kcmFnX2ljb24uc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xuXG5jb25zdCBjcmVhdGVDaGVja2JveCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xuICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb24nKTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlRGVsZXRlID0gKGkpID0+IHtcbiAgY29uc3QgZGVsZXRlSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xuICBkZWxldGVJY29uSW1nLnNyYyA9IGRlbGV0ZUljb247XG4gIGRlbGV0ZUljb25JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRubicpO1xuICBkZWxldGVJY29uSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICByZXR1cm4gZGVsZXRlSWNvbkltZztcbn07XG5cbmNvbnN0IGNyZWF0ZURyYWcgPSAoKSA9PiB7XG4gIGNvbnN0IGRyYWdJY29uSW1nID0gbmV3IEltYWdlKCk7XG4gIGRyYWdJY29uSW1nLnNyYyA9IGRyYWdJY29uO1xuICByZXR1cm4gZHJhZ0ljb25JbWc7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVDaGVja2JveCwgY3JlYXRlRGVzY3JpcHRpb24sIGNyZWF0ZURlbGV0ZSwgY3JlYXRlRHJhZyxcbn07IiwiY29uc3QgZGVsZXRlQWxsQ29tcGxldGUgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGFza1tpXS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIG5ld0FycmF5LnB1c2godGFza1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhc2subGVuZ3RoID0gMDtcclxuICB0YXNrLnB1c2goLi4ubmV3QXJyYXkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlQWxsQ29tcGxldGU7IiwiaW1wb3J0IHRvZ2dsZUNvbXBsZXRlZCBmcm9tICcuL2NvbXBsZXRlLXRhc2suanMnO1xyXG5pbXBvcnQgZGVsZXRlQWxsQ29tcGxldGUgZnJvbSAnLi9tb2R1bGVzL2RlbGV0ZS1jb21wbGV0ZS10YXNrcy5qcyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ2hlY2tib3gsIGNyZWF0ZURlc2NyaXB0aW9uLCBjcmVhdGVEZWxldGUsIGNyZWF0ZURyYWcsXHJcbn0gZnJvbSAnLi9saUl0ZW0uanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YSwgbG9hZERhdGEgfSBmcm9tICcuL3NhdmVEYXRhLmpzJztcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xyXG5cclxuY2xhc3MgVGFza0xpc3QgZXh0ZW5kcyBBcnJheSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgbG9hZERhdGEodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XHJcbiAgICB0aGlzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRhc2spO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2spO1xyXG4gICAgICBjb25zdCBjaGVja2JveERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGRyYWdJY29uSW1nID0gY3JlYXRlRHJhZygpO1xyXG4gICAgICBjb25zdCBkZWxldGVJY29uSW1nID0gY3JlYXRlRGVsZXRlKGkpO1xyXG4gICAgICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hEZXNjcmlwdGlvbicpO1xyXG4gICAgICBuZXdMaS5hcHBlbmRDaGlsZChjaGVja2JveERlc2NyaXB0aW9uRGl2KTtcclxuICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkltZyk7XHJcbiAgICAgIG5ld0xpLmFwcGVuZENoaWxkKGRyYWdJY29uSW1nKTtcclxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChuZXdMaSk7XHJcbiAgICAgIGRlbGV0ZUljb25JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKGkpO1xyXG4gICAgICB9KTtcclxuICAgICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29tcGxldGVkKGkpO1xyXG4gICAgICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgc2F2ZURhdGEodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMucHVzaCh0YXNrKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYXNrKHBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICB0aGlzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgICAgdGFzay5pbmRleCA9IGkgKyAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICBpZiAodGFza3MpIHtcclxuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaCh0YXNrKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb21wbGV0ZWQoaW5kZXgpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0aGlzW2luZGV4XTtcclxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0YXNrKTtcclxuICAgIHNhdmVEYXRhKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29tcGxldGVkVGFza3MoKSB7XHJcbiAgICBkZWxldGVBbGxDb21wbGV0ZSh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDsiLCJjb25zdCBzYXZlRGF0YSA9ICh0YXNrcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkRGF0YSA9IChpbml0aWFsKSA9PiB7XHJcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIGlmICh0YXNrcykge1xyXG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaW5pdGlhbC5wdXNoKHRhc2spO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNhdmVEYXRhLCBsb2FkRGF0YSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==