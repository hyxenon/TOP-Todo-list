import { projects } from "./Project";
import {
  createButton,
  createDiv,
  createI,
  createInput,
  createP,
} from "./createElementsDom";

const contentsContainer = document.querySelector(".contents-container");

let addDisable = false;

const setH1Title = (title) => {
  const h1Title = document.createElement("h1");
  h1Title.textContent = title;
  contentsContainer.appendChild(h1Title);
};

const createTask = () => {
  const taskContainer = createDiv();
  taskContainer.classList.add("task-container");
  contentsContainer.appendChild(taskContainer);

  const task = createDiv();
  task.classList.add("task");
  taskContainer.appendChild(task);

  const plus = createI();
  plus.classList.add("fa-solid", "fa-plus");

  const input = createInput();
  input.value = "Add a new Task";
  input.readOnly = true;

  task.append(plus, input);

  const editDiv = createDiv();
  editDiv.classList.add("edit");
  taskContainer.appendChild(editDiv);

  const editTask = () => {
    if (addDisable) return;
    input.readOnly = false;
    input.style.border = "1px solid green";
    input.value = "";

    const createAddBtn = createButton();
    createAddBtn.classList.add("add-btn", "task-btn");
    createAddBtn.textContent = "Add Task";
    editDiv.appendChild(createAddBtn);
    createAddBtn.addEventListener("click", addTask);
    addDisable = true;
  };

  const addTask = () => {
    if (input.value == "") {
      input.style.border = "1px solid red";
      return;
    }

    const clearTask = () => {
      input.value = "Add a new task";
      input.style.border = "none";
      const createAddBtn = document.querySelector(".task-btn");
      createAddBtn.parentNode.removeChild(createAddBtn);
    };

    addNewTask(input.value);
    clearTask();
    addDisable = false;
  };

  const addNewTask = (value) => {
    const taskContainer = createDiv();
    taskContainer.classList.add("task-container");
    contentsContainer.appendChild(taskContainer);

    const task = createDiv();
    task.classList.add("task");
    taskContainer.appendChild(task);

    const input = createInput();
    input.value = value;
    input.readOnly = true;

    task.appendChild(input);

    const editDiv = createDiv();
    editDiv.classList.add("edit");
    taskContainer.appendChild(editDiv);

    const editBtn = createI();
    editBtn.classList.add("fa-solid", "fa-pen-to-square");

    const deleteBtn = createI();
    deleteBtn.classList.add("fa-solid", "fa-trash");

    const saveBtn = createButton();
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save";
    editDiv.appendChild(editBtn);
    editDiv.appendChild(deleteBtn);
    editDiv.appendChild(saveBtn);

    const editNewTask = (e) => {
      const input = e.target.parentNode.previousSibling.querySelector("input");
      const editBtn = e.target;
      const deleteBtn = e.target.nextSibling;
      const saveBtn = deleteBtn.nextSibling;

      editBtn.style.display = "none";
      deleteBtn.style.display = "none";
      saveBtn.style.display = "block";
      input.readOnly = false;
      input.style.border = "1px solid green";

      const saveEdit = () => {
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";
        saveBtn.style.display = "none";
        input.readOnly = true;
        input.style.border = "none";
      };

      saveBtn.addEventListener("click", saveEdit);
    };

    const deleteTask = (e) => {
      const container = e.target.parentElement.parentElement;
      container.parentNode.removeChild(container);
    };

    editBtn.addEventListener("click", editNewTask);
    deleteBtn.addEventListener("click", deleteTask);

    // Addeventlistener
  };

  // Addeventlister
  plus.addEventListener("click", editTask);
};

export const contentsDisplay = (title) => {
  contentsContainer.innerHTML = "";
  setH1Title(title);
  createTask();
};
