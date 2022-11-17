"use strict";

const userSelectDropdown = document.querySelector("#user-select-dropdown");

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

function loadTodos() {
    const userId = userSelectDropdown.value;

    fetch("http://localhost:8083/api/todos/byuser/" + userId)
    .then(response => response.json())
    .then(user => {
        
    })
}

window.onload = () => {
    loadUsers();
    userSelectDropdown.onchange = loadTodos;
}