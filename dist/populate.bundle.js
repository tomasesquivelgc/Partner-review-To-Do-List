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
/* harmony import */ var _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/drag_icon.svg */ "./src/images/drag_icon.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _complete_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-task.js */ "./src/complete-task.js");
/* harmony import */ var _modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete-complete-tasks.js */ "./src/modules/delete-complete-tasks.js");





const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    this.forEach((task, i) => {
      // create li element
      const newLi = document.createElement('li');
      // create necessary items
      // checkbox
      const checkboxDescriptionDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('change');
      if (task.completed === true) {
        checkbox.checked = true;
      }
      // task description
      const description = document.createElement('input');
      description.type = 'text';
      description.value = task.description;
      description.classList.add('taskDescription');
      // images
      const dragIconImg = new Image();
      dragIconImg.src = _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
      const deleteIconImg = new Image();
      deleteIconImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteIconImg.classList.add('deleteBtnn');
      deleteIconImg.setAttribute('data-id', i);
      // checkboxDescription attach
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      checkboxDescriptionDiv.classList.add('checkboxDescription');
      // append the items to the li and provide functionality
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
        this.saveTasksToLocalStorage();
      });
    
      checkbox.addEventListener('change', () => {
        this.toggleCompleted(i);
        this.saveTasksToLocalStorage();
      });
    });
    this.saveTasksToLocalStorage();
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    for (let i = 0; i < this.length; i += 1) {
      this[i].index = i + 1;
    }
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

  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this));
  }

  toggleCompleted(index) {
    const task = this[index];
    (0,_complete_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(task);
    this.saveTasksToLocalStorage();
  }

  deleteCompletedTasks() {
    (0,_modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    this.render();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDSjlCO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hjO0FBQ0Q7QUFDSTtBQUNrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBLDBCQUEwQiwrQ0FBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZS1jb21wbGV0ZS10YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICh0YXNrKSA9PiB7XHJcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb21wbGV0ZWQ7IiwiY29uc3QgZGVsZXRlQWxsQ29tcGxldGUgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGFza1tpXS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIG5ld0FycmF5LnB1c2godGFza1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhc2subGVuZ3RoID0gMDtcclxuICB0YXNrLnB1c2goLi4ubmV3QXJyYXkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlQWxsQ29tcGxldGU7IiwiaW1wb3J0IGRyYWdJY29uIGZyb20gJy4vaW1hZ2VzL2RyYWdfaWNvbi5zdmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltYWdlcy9kZWxldGUuc3ZnJztcclxuaW1wb3J0IHRvZ2dsZUNvbXBsZXRlZCBmcm9tICcuL2NvbXBsZXRlLXRhc2suanMnO1xyXG5pbXBvcnQgZGVsZXRlQWxsQ29tcGxldGUgZnJvbSAnLi9tb2R1bGVzL2RlbGV0ZS1jb21wbGV0ZS10YXNrcy5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuXHJcbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubG9hZFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gICAgdGhpcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBsaSBlbGVtZW50XHJcbiAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgLy8gY3JlYXRlIG5lY2Vzc2FyeSBpdGVtc1xyXG4gICAgICAvLyBjaGVja2JveFxyXG4gICAgICBjb25zdCBjaGVja2JveERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xyXG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0YXNrIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcclxuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb24nKTtcclxuICAgICAgLy8gaW1hZ2VzXHJcbiAgICAgIGNvbnN0IGRyYWdJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRyYWdJY29uSW1nLnNyYyA9IGRyYWdJY29uO1xyXG4gICAgICBjb25zdCBkZWxldGVJY29uSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRlbGV0ZUljb25JbWcuc3JjID0gZGVsZXRlSWNvbjtcclxuICAgICAgZGVsZXRlSWNvbkltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG5uJyk7XHJcbiAgICAgIGRlbGV0ZUljb25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcbiAgICAgIC8vIGNoZWNrYm94RGVzY3JpcHRpb24gYXR0YWNoXHJcbiAgICAgIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveERlc2NyaXB0aW9uJyk7XHJcbiAgICAgIC8vIGFwcGVuZCB0aGUgaXRlbXMgdG8gdGhlIGxpIGFuZCBwcm92aWRlIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQoY2hlY2tib3hEZXNjcmlwdGlvbkRpdik7XHJcbiAgICAgIG5ld0xpLmFwcGVuZENoaWxkKGRlbGV0ZUljb25JbWcpO1xyXG4gICAgICBuZXdMaS5hcHBlbmRDaGlsZChkcmFnSWNvbkltZyk7XHJcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xyXG4gICAgXHJcbiAgICAgIGRlbGV0ZUljb25JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKGkpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDb21wbGV0ZWQoaSk7XHJcbiAgICAgICAgdGhpcy5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFzayhwb3NpdGlvbikge1xyXG4gICAgdGhpcy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHRoaXNbaV0uaW5kZXggPSBpICsgMTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkVGFza3NGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIGlmICh0YXNrcykge1xyXG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wdXNoKHRhc2spO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29tcGxldGVkKGluZGV4KSB7XHJcbiAgICBjb25zdCB0YXNrID0gdGhpc1tpbmRleF07XHJcbiAgICB0b2dnbGVDb21wbGV0ZWQodGFzayk7XHJcbiAgICB0aGlzLnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgIGRlbGV0ZUFsbENvbXBsZXRlKHRoaXMpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==