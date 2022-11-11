"use strict";

const searchTypeDropdown = document.getElementById("search-type-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");
const categorySection  = document.getElementById("category-section");
const productsTableBody = document.querySelector("#productsTable tbody");
const tableDisplaySection = document.getElementById("tbl-display-section");


function selectSearchType() {
    let selectedValue = searchTypeDropdown.value;
    
    
    if(selectedValue == "categories") {
        categorySection.style.display = "block";
        loadCategoryDropdown();
    }else if (selectedValue == "all") {
        categorySection.style.display = "none";
        loadAllProductsTable();
    }

}


function loadCategoryDropdown() {
    categorySection.style.display = "block";
    tableDisplaySection.style.display = "none";

    fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categories) => {
        for(const category of categories) {
            const option = document.createElement("option");
            option.value = category.categoryId;
            option.innerText = category.name;
            categoryDropdown.appendChild(option);
        }
    })
}

function loadProductsByCategories() {
    tableDisplaySection.style.display = "block";
    productsTableBody.innerHTML = " ";
    const selectedCategory = categoryDropdown.value;

    fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            if (product.categoryId == selectedCategory) {
                tableDisplaySection.style.display = "block";
                let row = productsTableBody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let price = Number(product.unitPrice);
    
                cell1.innerText = product.productId;
                cell2.innerText = product.productName;
                cell3.innerText = `$${price.toFixed(2)}`;
    
                const anchor = document.createElement("a");
                anchor.innerText = "see details";
                anchor.href = `./details.html?productId=${product.productId}`;
                cell4.appendChild(anchor);
            }
        });
    })

}

function loadAllProductsTable() {
    tableDisplaySection.style.display = "block";
    fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let row = productsTableBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let price = Number(product.unitPrice);

            cell1.innerText = product.productId;
            cell2.innerText = product.productName;
            cell3.innerText = `$${price.toFixed(2)}`;

            const anchor = document.createElement("a");
            anchor.innerText = "see details";
            anchor.href = `./details.html?productId=${product.productId}`;
            cell4.appendChild(anchor);
        });
    })

}

window.onload = () => {
    searchTypeDropdown.onchange = selectSearchType;
    categoryDropdown.onchange = loadProductsByCategories;
}