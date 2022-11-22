"use strict";

const $q = (selector) => document.querySelector(selector);
const usersNameForTask = $q("h1");
const categoryOutput = $q("h4");
const completedOutput = $q("#task-completed-output");
const deadlineOutput = $q("#task-deadline-output");
const priorityOutput = $q("#task-priority-output");
const descriptionOutput = $q("#task-description-output");
const backBtn = $q("#back-btn");
const markCompletedBtn = document.getElementById("mark-completed-btn")
const unmarkCompletionBtn = document.getElementById("unmark-completion")

function getTaskId() {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get("taskid");
}

function displayTaskDetails(id) {

    fetch("http://localhost:8083/api/todos/" + id)
    .then(response => response.json())
    .then(task => {
        categoryOutput.innerText = task.category;
        deadlineOutput.innerText = task.deadline;
        priorityOutput.innerText = task.priority;
        completedOutput.innerHTML = task.completed ? "&#10003;": "&#215;";
        descriptionOutput.innerText = task.description;
        getUsersName(task.userid);
        disableMarkCompletedBtn(task.completed.value);
    })

}

function getUsersName(userId) {
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            if(user.id == userId) {
                usersNameForTask.innerText = `${user.name}'s Task `
            }
        }
    })
}

function markTaskAsCompleted() {

    const taskId = getTaskId();

    completedOutput.value = true,
    
        fetch("http://localhost:8083/api/todos/" + taskId)
        .then(response => response.json())
        .then(task => {
            console.log(task)
            completedOutput.innerHTML = task.completed ? "&#10003;": "&#215;";
        }).catch(error => {
            console.log(error);
            messageParagraph.innerText = "An unexpected error occured.";
        });

}

function unmarkTask() {
    const taskId = getTaskId();

    completedOutput.value = false,
    
        fetch("http://localhost:8083/api/todos/" + taskId, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
        }).then(response => response)
        .then(task => {
            console.log(task)
            completedOutput.innerHTML = task.completed ? "&#10003;": "&#215;";

        }).catch(error => {
            console.log(error);
            messageParagraph.innerText = "An unexpected error occured.";
        });

}

function goBackToTaskList() {
    window.location = "./todos.html";
}

function disableMarkCompletedBtn(completion) {
    if(completion == true) {
        markCompletedBtn.disabled = true;
    }else if(completion == false) {
        markCompletedBtn.disabled = false;
        unmarkCompletionBtn.disabled = true;
    }
}


window.onload = () => {
    displayTaskDetails(getTaskId());
    backBtn.onclick = goBackToTaskList;
    markCompletedBtn.onclick = markTaskAsCompleted;
    unmarkCompletionBtn.onclick = unmarkTask;
}