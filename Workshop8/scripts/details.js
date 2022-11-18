"use strict";

const $q = (selector) => document.querySelector(selector);
const usersNameForTask = $q("h1");
const categoryOutput = $q("h3");
const completedOutput = $q("#task-completed-output");
const deadlineOutput = $q("#task-deadline-output");
const priorityOutput = $q("task-priority-output");
const descriptionOutput = $q("task-description-output");

window.onload = () => {

}