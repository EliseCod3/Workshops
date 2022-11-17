"use strict";

const $q = (selector) => document.querySelector(selector);
const userSelectDropdown = $q("#user-select-dropdown");
const categorySelectDropdown = $q("#category-select-dropdown");
const prioritySelectDropdown = $q("#priority-select-dropdown");
const taskDescription = $q("#task-description");
const taskDeadline = $q("#task-deadline");
const messageParagraph = $q("#messageParagraph");
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
    fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(categories => {
        for (const category of categories) {
            const option = new Option(category.name);
            categorySelectDropdown.appendChild(option);
        }
    })
}

function saveNewTask(event) {
    event.preventDefault();

    const taskData = {
        userid: userSelectDropdown.value,
        category: categorySelectDropdown.value,
        description: taskDescription.value,
        deadline: taskDeadline.value,
        priority: prioritySelectDropdown.value,
    }
    
    fetch("http://localhost:8083/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(taskData)
    }).then(response => response.json())
    .then(data => {
        console.log(data)
        sessionStorage.savedMessage = "New task has been Added."
        window.location = "./todos.html";
    })
    .catch(error => {
        console.log(error);
        messageParagraph.innerText = "An unexpected error occured."

    })

}

function cancelAddingTask() {
    sessionStorage.savedMessage = "No task Added."
    window.location = "./todos.html"
}

window.onload = () => {
    loadUsers();
    loadCategories();

   const form =$q("form");
    form.onsubmit = saveNewTask;
    cancelAddBtn.onclick = cancelAddingTask;
}