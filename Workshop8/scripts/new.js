"use strict";

const $q = (selector) => document.querySelector(selector);
const userSelectDropdown = $q("#user-select-dropdown");
const categorySelectDropdown = $q("#category-select-dropdown");
const prioritySelectDropdown = $q("#priority-select-dropdown");
const taskDescription = $q("#task-description");
const taskDeadline = $q("#task-deadline");
const cancelAddBtn = $q("#cancel-add")

function loadUsers() {
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const option = new Option(user.name);
            option.value = user.id;
            userSelectDropdown.appendChild(option);
        }
    })
}

function loadCategories() {
    
}

function loadPriorities() {

}

function saveNewTask(event) {
    event.preventDefault();

}

function cancelAddingTask() {
    sessionStorage.savedMessage = "No task Added."
    window.location = "./todos.html"
}

window.onload = () => {
   const form =$q("form");
    form.onsubmit = saveNewTask;
    cancelAddBtn.onclick = cancelAddingTask;
}