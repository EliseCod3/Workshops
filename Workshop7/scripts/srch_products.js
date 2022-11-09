"use strict";

const searchTypeDropdown = document.getElementById("search-type-dropdown");
const categoryDropdown = documnet.getElementById("category-dropdown");

function loadCategoryDropdown() {
    let selectedValue = searchTypeDropdown.value;
    categoryDropdown.style.displsy = "none";

    fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categories) => {
        if(selectedValue)
    })
}

window.onload = () => {
    searchTypeDropdown.onchange = loadCategoryDropdown;
}