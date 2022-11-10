"use strict";

const productNameDisplay = document.querySelector("h2");
        const productCategoryDisplay = document.querySelector("h4");
        const productPriceDisplay = document.getElementById("product-price");
        const productDiscontinuedDisplay = document.getElementById("product-discontinued");
        const productUnitsDisplay = document.getElementById("product-units");
        const productSupplierDisplay = document.getElementById("product-supplier");


        function getProduct(id,) {
            fetch("http://localhost:8081/api/products/" + id)
            .then((response) => response.json())
            .then((product) => {
                    productNameDisplay.innerText = product.productName;
                    let price = Number(product.unitPrice);
                    productPriceDisplay.innerText = `Price: ${price.toFixed(2)}`;
                    
                    fetch("http://localhost:8081/api/categories")
                    .then((response) => response.json())
                    .then((categories) => {
                        for (const category of categories) {
                            if(category.categoryId == product.categoryId) {
                                productCategoryDisplay.innerText = category.name;
                            }
                        }
            
                    })

                    if(product.discontinued === true){
                        productDiscontinuedDisplay.style.display = "block";
                        productDiscontinuedDisplay.innerText = "DISCONTINUED"
                    }else {
                        productDiscontinuedDisplay.style.display = "none";
                    }
                    
                    productUnitsDisplay.innerText = `Amount In Stock: ${product.unitsInStock}`;
                    productSupplierDisplay.innerText = `Supplier: ${product.supplier}`; 
                });
        }

       

        window.onload = () => {
            const urlParams = new URLSearchParams(location.search);
            if(urlParams.has("productId")) {
                let id = -1;
                id = urlParams.get("productId");
                getProduct(id,);
            };
        }