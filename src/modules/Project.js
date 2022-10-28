import { contentsDisplay } from "./Contents";
import {
  createDiv,
  createInput,
  createI,
  createButton,
} from "./createElementsDom";

const addProjectBtn = document.querySelector(".add-btn");
const formElement = document.querySelector(".form");
const addBtn = document.querySelector(".add");
const projectInput = document.getElementById("project");

const projectContainer = document.querySelector(".projects-container");
export let projects = [];
let disable = false

const showAddProject = () => {
  formElement.classList.toggle("hide-project");
  formElement.style.borderBottom = "1px solid black";
  clearInput();
};

const addProject = (e) => {
  e.preventDefault();

  const add = () => {
    const project = projectInput.value;
    const check = projects.every(title=>{
        return title.toUpperCase() != project.toUpperCase()
    })
    
    if(!check)return
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

const clearInput = () => {
  projectInput.style.border = "1px solid black";
  projectInput.placeholder = "Your project";
  projectInput.value = "";
};

const editProject = (e) => {
  const title = e.target.parentElement.parentElement;
  const input = e.target.parentElement.previousSibling.childNodes[1];

  input.readOnly = false;
  disable = true
  title.classList.add("edit-card");

  const removeDeleteBtn = () => {
    const deleteBtn = e.target.nextSibling;
    deleteBtn.style.display = "none";
    const saveBtn = deleteBtn.nextSibling;
    saveBtn.style.display = "block";
  };

  const removeEditBtn = () => {
    const editBtn = e.target;
    editBtn.style.display = "none";
  };

  removeDeleteBtn();
  removeEditBtn();
};

const saveProject = (e) => {
  const input = e.target.parentElement.previousSibling.childNodes[1];
  const card = e.target.parentElement.parentElement;
  projects.forEach((title, index) => {
    if (card.dataset.title == projects[index]) {
      projects[index] = input.value;
      card.dataset.title = input.value;
    }
  });
  projectContainer.innerHTML = "";
  disable = false
  displayProject();
};

const deleteProject = (e) => {
  const card = e.target.parentElement.parentElement;
  projects.forEach((title, index) => {
    if (card.dataset.title == projects[index]) {
      projects.splice(index, 1);
    }
  });
  projectContainer.innerHTML = "";
  displayProject();
};

const displayProject = () => {
  projects.forEach((projectTitle) => {
    const card = createDiv();
    card.dataset.title = `${projectTitle}`;
    card.classList.add("card");
    projectContainer.appendChild(card);

    const cardProject = createDiv();
    cardProject.classList.add("card-project");
    card.appendChild(cardProject);

    const book = createI();
    book.classList.add("fa-solid", "fa-book");
    cardProject.appendChild(book);

    const project = createInput();
    project.value = `${
      projectTitle.charAt(0).toUpperCase() + projectTitle.slice(1)
    }`;
    project.readOnly = true;
    cardProject.appendChild(project);

    const edit = createDiv("edit");
    edit.classList.add("edit");
    card.appendChild(edit);

    const square = createI();
    square.classList.add("fa-solid", "fa-pen-to-square");
    const trash = createI();
    trash.classList.add("fa-solid", "fa-trash");
    const save = createButton();
    save.textContent = "Save";
    save.classList.add("save-btn");
    edit.append(square, trash, save);

    // Addeventlister
    project.addEventListener("click",projectContentsDisplay)
    square.addEventListener("click", editProject);
    trash.addEventListener("click", deleteProject);
    save.addEventListener("click", saveProject);
  });
};

const projectContentsDisplay = (e)=>{
    if(disable)return

    const projectTitle = e.target.value
    contentsDisplay(projectTitle)
}

addProjectBtn.addEventListener("click", showAddProject);
addBtn.addEventListener("click", addProject);
