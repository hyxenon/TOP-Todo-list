/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Contents.js":
/*!*********************************!*\
  !*** ./src/modules/Contents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentsDisplay": () => (/* binding */ contentsDisplay)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _createElementsDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementsDom */ "./src/modules/createElementsDom.js");


var contentsContainer = document.querySelector(".contents-container");
var addDisable = false;
var setH1Title = function setH1Title(title) {
  var h1Title = document.createElement("h1");
  h1Title.textContent = title;
  contentsContainer.appendChild(h1Title);
};
var createTask = function createTask() {
  var taskContainer = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  taskContainer.classList.add("task-container");
  contentsContainer.appendChild(taskContainer);
  var task = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  task.classList.add("task");
  taskContainer.appendChild(task);
  var plus = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
  plus.classList.add("fa-solid", "fa-plus");
  var input = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createInput)();
  input.value = "Add a new Task";
  input.readOnly = true;
  task.append(plus, input);
  var editDiv = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  editDiv.classList.add("edit");
  taskContainer.appendChild(editDiv);
  var editTask = function editTask() {
    if (addDisable) return;
    input.readOnly = false;
    input.style.border = "1px solid green";
    input.value = "";
    var createAddBtn = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createButton)();
    createAddBtn.classList.add("add-btn", "task-btn");
    createAddBtn.textContent = "Add Task";
    editDiv.appendChild(createAddBtn);
    createAddBtn.addEventListener("click", addTask);
    addDisable = true;
  };
  var addTask = function addTask() {
    if (input.value == "") {
      input.style.border = "1px solid red";
      return;
    }
    var clearTask = function clearTask() {
      input.value = "Add a new task";
      input.style.border = "none";
      var createAddBtn = document.querySelector(".task-btn");
      createAddBtn.parentNode.removeChild(createAddBtn);
    };
    addNewTask(input.value);
    clearTask();
    addDisable = false;
  };
  var addNewTask = function addNewTask(value) {
    var taskContainer = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    taskContainer.classList.add("task-container");
    contentsContainer.appendChild(taskContainer);
    var task = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    task.classList.add("task");
    taskContainer.appendChild(task);
    var input = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createInput)();
    input.value = value;
    input.readOnly = true;
    task.appendChild(input);
    var editDiv = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    editDiv.classList.add("edit");
    taskContainer.appendChild(editDiv);
    var editBtn = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
    editBtn.classList.add("fa-solid", "fa-pen-to-square");
    var deleteBtn = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
    deleteBtn.classList.add("fa-solid", "fa-trash");
    var saveBtn = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createButton)();
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save";
    editDiv.appendChild(editBtn);
    editDiv.appendChild(deleteBtn);
    editDiv.appendChild(saveBtn);
    var editNewTask = function editNewTask(e) {
      var input = e.target.parentNode.previousSibling.querySelector("input");
      var editBtn = e.target;
      var deleteBtn = e.target.nextSibling;
      var saveBtn = deleteBtn.nextSibling;
      editBtn.style.display = "none";
      deleteBtn.style.display = "none";
      saveBtn.style.display = "block";
      input.readOnly = false;
      input.style.border = "1px solid green";
      var saveEdit = function saveEdit() {
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";
        saveBtn.style.display = "none";
        input.readOnly = true;
        input.style.border = "none";
      };
      saveBtn.addEventListener("click", saveEdit);
    };
    var deleteTask = function deleteTask(e) {
      var container = e.target.parentElement.parentElement;
      container.parentNode.removeChild(container);
    };
    editBtn.addEventListener("click", editNewTask);
    deleteBtn.addEventListener("click", deleteTask);

    // Addeventlistener
  };

  // Addeventlister
  plus.addEventListener("click", editTask);
};
var contentsDisplay = function contentsDisplay(title) {
  contentsContainer.innerHTML = "";
  setH1Title(title);
  createTask();
};

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _Contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contents */ "./src/modules/Contents.js");
/* harmony import */ var _createElementsDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementsDom */ "./src/modules/createElementsDom.js");


var addProjectBtn = document.querySelector(".add-btn");
var formElement = document.querySelector(".form");
var addBtn = document.querySelector(".add");
var projectInput = document.getElementById("project");
var projectContainer = document.querySelector(".projects-container");
var projects = [];
var disable = false;
var showAddProject = function showAddProject() {
  formElement.classList.toggle("hide-project");
  formElement.style.borderBottom = "1px solid black";
  clearInput();
};
var addProject = function addProject(e) {
  e.preventDefault();
  var add = function add() {
    var project = projectInput.value;
    var check = projects.every(function (title) {
      return title.toUpperCase() != project.toUpperCase();
    });
    if (!check) return;
    projects.push(project);
  };
  if (formElement.checkValidity()) {
    add();
    clearInput();
    projectContainer.innerHTML = "";
    displayProject();
  } else {
    projectInput.style.border = "1px solid red";
    projectInput.placeholder = "Enter a project!";
  }
};
var clearInput = function clearInput() {
  projectInput.style.border = "1px solid black";
  projectInput.placeholder = "Your project";
  projectInput.value = "";
};
var editProject = function editProject(e) {
  var title = e.target.parentElement.parentElement;
  var input = e.target.parentElement.previousSibling.childNodes[1];
  input.readOnly = false;
  disable = true;
  title.classList.add("edit-card");
  var removeDeleteBtn = function removeDeleteBtn() {
    var deleteBtn = e.target.nextSibling;
    deleteBtn.style.display = "none";
    var saveBtn = deleteBtn.nextSibling;
    saveBtn.style.display = "block";
  };
  var removeEditBtn = function removeEditBtn() {
    var editBtn = e.target;
    editBtn.style.display = "none";
  };
  removeDeleteBtn();
  removeEditBtn();
};
var saveProject = function saveProject(e) {
  var input = e.target.parentElement.previousSibling.childNodes[1];
  var card = e.target.parentElement.parentElement;
  projects.forEach(function (title, index) {
    if (card.dataset.title == projects[index]) {
      projects[index] = input.value;
      card.dataset.title = input.value;
    }
  });
  projectContainer.innerHTML = "";
  disable = false;
  displayProject();
};
var deleteProject = function deleteProject(e) {
  var card = e.target.parentElement.parentElement;
  projects.forEach(function (title, index) {
    if (card.dataset.title == projects[index]) {
      projects.splice(index, 1);
    }
  });
  projectContainer.innerHTML = "";
  displayProject();
};
var displayProject = function displayProject() {
  projects.forEach(function (projectTitle) {
    var card = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    card.dataset.title = "".concat(projectTitle);
    card.classList.add("card");
    projectContainer.appendChild(card);
    var cardProject = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    cardProject.classList.add("card-project");
    card.appendChild(cardProject);
    var book = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
    book.classList.add("fa-solid", "fa-book");
    cardProject.appendChild(book);
    var project = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createInput)();
    project.value = "".concat(projectTitle.charAt(0).toUpperCase() + projectTitle.slice(1));
    project.readOnly = true;
    cardProject.appendChild(project);
    var edit = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createDiv)("edit");
    edit.classList.add("edit");
    card.appendChild(edit);
    var square = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
    square.classList.add("fa-solid", "fa-pen-to-square");
    var trash = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createI)();
    trash.classList.add("fa-solid", "fa-trash");
    var save = (0,_createElementsDom__WEBPACK_IMPORTED_MODULE_1__.createButton)();
    save.textContent = "Save";
    save.classList.add("save-btn");
    edit.append(square, trash, save);

    // Addeventlister
    project.addEventListener("click", projectContentsDisplay);
    square.addEventListener("click", editProject);
    trash.addEventListener("click", deleteProject);
    save.addEventListener("click", saveProject);
  });
};
var projectContentsDisplay = function projectContentsDisplay(e) {
  if (disable) return;
  var projectTitle = e.target.value;
  (0,_Contents__WEBPACK_IMPORTED_MODULE_0__.contentsDisplay)(projectTitle);
};
addProjectBtn.addEventListener("click", showAddProject);
addBtn.addEventListener("click", addProject);

/***/ }),

/***/ "./src/modules/createElementsDom.js":
/*!******************************************!*\
  !*** ./src/modules/createElementsDom.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createI": () => (/* binding */ createI),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createP": () => (/* binding */ createP)
/* harmony export */ });
var createDiv = function createDiv() {
  var div = document.createElement("div");
  return div;
};
var createInput = function createInput() {
  var input = document.createElement("input");
  return input;
};
var createI = function createI() {
  var i = document.createElement("i");
  return i;
};
var createButton = function createButton() {
  var button = document.createElement("button");
  return button;
};
var createP = function createP() {
  var p = document.createElement("p");
  return p;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n  background-color: black;\n  position: relative;\n  height: 100vh;\n  width: 100%;\n}\n.sidebar h1 {\n  padding: 1rem;\n  text-align: center;\n  font-size: 2rem;\n  color: white;\n}\n.sidebar .add-btn {\n  display: block;\n  margin: 0 auto;\n  background-color: green;\n  border: 1px solid white;\n  border-radius: 0.5rem;\n  font-size: 1.2rem;\n  transition: 0.1s ease-in-out;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.sidebar .add-btn:hover {\n  transform: scale(1.1);\n}\n.sidebar form {\n  margin: 0 auto;\n  width: 90%;\n  background-color: white;\n  margin-top: 1rem;\n  padding: 1rem;\n  transition: 0.3s ease-in-out;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  display: flex;\n}\n.sidebar form label {\n  margin-top: 0.5rem;\n  font-size: 1.5rem;\n}\n.sidebar form label input {\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n.sidebar form.hide-project {\n  display: none;\n}\n.sidebar .projects-container {\n  margin: 0 auto;\n  background-color: white;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  height: 60%;\n  width: 90%;\n  padding: 1rem;\n  overflow: auto;\n}\n.sidebar .projects-container h2 {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.sidebar .projects-container .card {\n  width: 90%;\n  display: flex;\n  padding: 0.5rem 1rem;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0;\n}\n.sidebar .projects-container .card .card-project {\n  display: flex;\n  align-items: center;\n}\n.sidebar .projects-container .card .card-project .fa-book {\n  font-size: 1.5rem;\n  margin-right: 1rem;\n}\n.sidebar .projects-container .card .card-project input {\n  width: 100%;\n  outline: none;\n  font-size: 1.5rem;\n  border: none;\n  cursor: pointer;\n}\n.sidebar .projects-container .card .edit {\n  display: flex;\n  gap: 0.3rem;\n}\n.sidebar .projects-container .card .edit .fa-trash {\n  color: red;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.sidebar .projects-container .card .edit .fa-trash:hover {\n  color: rgb(145, 2, 2);\n}\n.sidebar .projects-container .card .edit .fa-pen-to-square {\n  color: green;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.sidebar .projects-container .card .edit .fa-pen-to-square:hover {\n  color: rgb(1, 71, 1);\n}\n.sidebar .projects-container .card .edit .save-btn {\n  padding: 0.5rem 2rem;\n  background-color: green;\n  border: 1px solid whitesmoke;\n  border-radius: 0.5rem;\n  display: none;\n  cursor: pointer;\n}\n.sidebar .projects-container .card .edit .save-btn:hover {\n  background-color: rgb(0, 224, 0);\n}\n.sidebar .projects-container .card.edit-card {\n  padding: 0.5rem 1rem;\n  border: 1px solid green;\n}\n.sidebar .projects-container .card.edit-card input {\n  color: green;\n}\n.sidebar .footer {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  color: white;\n  font-size: 1.3rem;\n  text-align: center;\n}\n\n.contents-container {\n  background-color: aliceblue;\n}\n.contents-container h1 {\n  margin-top: 1rem;\n  text-align: center;\n}\n.contents-container .task-container {\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  width: 50%;\n  margin: 1rem auto;\n  display: grid;\n  align-items: center;\n  gap: 0.5rem;\n  grid-template-columns: 7fr 1fr;\n}\n.contents-container .task-container .task {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.contents-container .task-container .task .fa-plus {\n  font-size: 1.5rem;\n  color: green;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n}\n.contents-container .task-container .task .fa-plus:hover {\n  transform: scale(1.1);\n}\n.contents-container .task-container .task input {\n  font-size: 1.5rem;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.contents-container .task-container .edit {\n  display: flex;\n  gap: 1rem;\n}\n.contents-container .task-container .edit .fa-pen-to-square {\n  font-size: 1.5rem;\n  color: green;\n  cursor: pointer;\n}\n.contents-container .task-container .edit .fa-trash {\n  font-size: 1.5rem;\n  color: red;\n  cursor: pointer;\n}\n.contents-container .task-container .edit .add-btn {\n  font-size: 1rem;\n  padding: 0.5rem 2rem;\n  background-color: green;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n.contents-container .task-container .edit .save-btn {\n  display: none;\n  padding: 0.5rem 1rem;\n  background-color: green;\n  border-radius: 0.5rem;\n  border: none;\n  cursor: pointer;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  max-height: 100vh;\n  max-width: 100vw;\n}", "",{"version":3,"sources":["webpack://./src/styles/_sidebar.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_contents.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;ACEJ;ADAI;EACI,aAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;ACER;ADCI;EACI,cAAA;EACA,cAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;EACA,iBAAA;EACA,4BAAA;EACA,aAAA;EACA,mBAAA;ACCR;ADCQ;EACI,qBAAA;ACCZ;ADGI;EACI,cAAA;EACA,UAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,aAAA;ACDR;ADGQ;EACI,kBAAA;EACA,iBAAA;ACDZ;ADGY;EACI,eAAA;EACA,eAAA;ACDhB;ADKQ;EACI,aAAA;ACHZ;ADOI;EACI,cAAA;EACA,uBAAA;EACA,iCAAA;EACA,kCAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;ACLR;ADOQ;EACI,kBAAA;EACA,mBAAA;ACLZ;ADQQ;EACI,UAAA;EACA,aAAA;EACA,oBAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;ACNZ;ADOY;EACI,aAAA;EACA,mBAAA;ACLhB;ADMgB;EACI,iBAAA;EACA,kBAAA;ACJpB;ADOgB;EACI,WAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;ACLpB;ADUY;EACI,aAAA;EACA,WAAA;ACRhB;ADSY;EACI,UAAA;EACA,iBAAA;EACA,eAAA;ACPhB;ADSgB;EACI,qBAAA;ACPpB;ADWY;EACI,YAAA;EACA,iBAAA;EACA,eAAA;ACThB;ADWgB;EACI,oBAAA;ACTpB;ADaY;EACI,oBAAA;EACA,uBAAA;EACA,4BAAA;EACA,qBAAA;EACA,aAAA;EACA,eAAA;ACXhB;ADagB;EACI,gCAAA;ACXpB;ADgBQ;EACI,oBAAA;EACA,uBAAA;ACdZ;ADea;EACG,YAAA;ACbhB;ADmBI;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;ACjBR;;ACnIA;EACI,2BAAA;ADsIJ;ACpII;EACI,gBAAA;EACA,kBAAA;ADsIR;ACnII;EACI,uBAAA;EACA,uBAAA;EACA,qBAAA;EACA,aAAA;EACA,UAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,8BAAA;ADqIR;AClIQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;ADoIZ;ACjIY;EACI,iBAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;ADmIhB;ACjIgB;EACI,qBAAA;ADmIpB;AC/HY;EACI,iBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;ADiIhB;AC5HQ;EACI,aAAA;EACA,SAAA;AD8HZ;AC7HY;EACI,iBAAA;EACA,YAAA;EACA,eAAA;AD+HhB;AC5HY;EACI,iBAAA;EACA,UAAA;EACA,eAAA;AD8HhB;AC3HY;EACI,eAAA;EACA,oBAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;EACA,eAAA;AD6HhB;AC1HY;EACI,aAAA;EACA,oBAAA;EACA,uBAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;AD4HhB;;AAlMA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;EACA,iCAAA;AAqMF;;AAjMA;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,gBAAA;AAoMF","sourcesContent":[".sidebar {\r\n    background-color: black;\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    h1 {\r\n        padding: 1rem;\r\n        text-align: center;\r\n        font-size: 2rem;\r\n        color: white;\r\n    }\r\n\r\n    .add-btn {\r\n        display: block;\r\n        margin: 0 auto;\r\n        background-color: green;\r\n        border: 1px solid white;\r\n        border-radius: .5rem;\r\n        font-size: 1.2rem;\r\n        transition: .1s ease-in-out;\r\n        padding: 1rem;\r\n        margin-bottom: 1rem;\r\n\r\n        &:hover {\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n\r\n    form {\r\n        margin: 0 auto;\r\n        width: 90%;\r\n        background-color: white;\r\n        margin-top: 1rem;\r\n        padding: 1rem;\r\n        transition: .3s ease-in-out;\r\n        border-top-left-radius: .5rem;\r\n        border-top-right-radius: .5rem;\r\n        display: flex;\r\n\r\n        label {\r\n            margin-top: .5rem;\r\n            font-size: 1.5rem;\r\n\r\n            input {\r\n                padding: .5rem;\r\n                font-size: 1rem;\r\n            }\r\n        }\r\n\r\n        &.hide-project {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .projects-container {\r\n        margin: 0 auto;\r\n        background-color: white;\r\n        border-bottom-left-radius: .5rem;\r\n        border-bottom-right-radius: .5rem;\r\n        height: 60%;\r\n        width: 90%;\r\n        padding: 1rem;\r\n        overflow: auto;\r\n\r\n        h2 {\r\n            text-align: center;\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        .card {\r\n            width: 90%;\r\n            display: flex;\r\n            padding: .5rem 1rem;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            margin: 1rem 0;\r\n            .card-project {\r\n                display: flex;\r\n                align-items: center;\r\n                .fa-book {\r\n                    font-size: 1.5rem;\r\n                    margin-right: 1rem;\r\n                }\r\n\r\n                input {\r\n                    width: 100%;\r\n                    outline: none;\r\n                    font-size: 1.5rem;\r\n                    border: none;\r\n                    cursor: pointer;\r\n\r\n                }\r\n            }\r\n\r\n            .edit{\r\n                display: flex;\r\n                gap: .3rem;\r\n            .fa-trash {\r\n                color: red;\r\n                font-size: 1.5rem;\r\n                cursor: pointer;\r\n\r\n                &:hover {\r\n                    color: rgb(145, 2, 2);\r\n                }\r\n            }\r\n\r\n            .fa-pen-to-square {\r\n                color: green;\r\n                font-size: 1.5rem;\r\n                cursor: pointer;\r\n\r\n                &:hover {\r\n                    color: rgb(1, 71, 1);\r\n                }\r\n            }\r\n\r\n            .save-btn{\r\n                padding: .5rem 2rem;\r\n                background-color: green;\r\n                border: 1px solid whitesmoke;\r\n                border-radius: .5rem;\r\n                display: none;\r\n                cursor: pointer;\r\n\r\n                &:hover{\r\n                    background-color: rgb(0, 224, 0);\r\n                }\r\n            }\r\n        }\r\n\r\n        &.edit-card{\r\n            padding: .5rem 1rem;\r\n            border: 1px solid green;\r\n             input{\r\n                color: green;\r\n             }\r\n        }\r\n        }\r\n    }\r\n\r\n    .footer{\r\n        position: absolute;\r\n        width: 100%;\r\n        bottom: 0;\r\n        color: white;\r\n        font-size: 1.3rem;\r\n        text-align: center;\r\n    }\r\n}","@import \"./sidebar\";\r\n@import \"./contents\";\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n\r\n\r\n\r\n*{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\nbody{\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  max-height: 100vh;\r\n  max-width: 100vw;\r\n}",".contents-container{\r\n    background-color: aliceblue;\r\n    \r\n    h1{ \r\n        margin-top: 1rem;\r\n        text-align: center;\r\n    }\r\n\r\n    .task-container{\r\n        background-color: white;\r\n        border: 1px solid black;\r\n        border-radius: .5rem;\r\n        padding: 1rem;\r\n        width: 50%;\r\n        margin: 1rem auto;\r\n        display: grid;\r\n        align-items: center;\r\n        gap: .5rem;\r\n        grid-template-columns: 7fr 1fr;\r\n      \r\n\r\n        .task{\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 1rem;\r\n          \r\n           \r\n            .fa-plus{\r\n                font-size: 1.5rem;\r\n                color: green;\r\n                cursor: pointer;\r\n                transition: .1s ease-in-out;\r\n\r\n                &:hover{\r\n                    transform: scale(1.1);\r\n                }\r\n            }\r\n\r\n            input{\r\n                font-size: 1.5rem;\r\n                border: none;\r\n                outline: none;\r\n                width: 100%;\r\n            }\r\n        }\r\n        \r\n\r\n        .edit{\r\n            display: flex;\r\n            gap: 1rem;\r\n            .fa-pen-to-square{\r\n                font-size: 1.5rem;\r\n                color: green;\r\n                cursor: pointer;\r\n            }\r\n\r\n            .fa-trash{\r\n                font-size: 1.5rem;\r\n                color: red;\r\n                cursor: pointer;\r\n            }\r\n\r\n            .add-btn{\r\n                font-size: 1rem;\r\n                padding: .5rem 2rem;\r\n                background-color: green;\r\n                border: 1px solid black;\r\n                border-radius: .5rem;\r\n                cursor: pointer;\r\n            }\r\n\r\n            .save-btn{\r\n                display: none;\r\n                padding: .5rem 1rem;\r\n                background-color: green;\r\n                border-radius: .5rem;\r\n                border: none;\r\n                cursor: pointer;\r\n            }\r\n        }\r\n    }\r\n   \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");
/* harmony import */ var _modules_Contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Contents */ "./src/modules/Contents.js");



})();

/******/ })()
;
//# sourceMappingURL=bundlef5185ad8e2d499502f2a.js.map