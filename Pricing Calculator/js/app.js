let inputQuantity = document.querySelector("#quantity");
let inputOrders = document.querySelector("#number__orders");
let inputPackage = document.querySelector("#package");
let optionPackage = document.querySelectorAll("option");
let checkboxAccounting = document.querySelector("#checkboxAccounting");
let checkboxRental = document.querySelector("#checkboxRental");
let productsP = document.querySelector(".products");
let ordersP = document.querySelector(".orders");
let packageP = document.querySelector(".package");

let priceProducts = document.querySelector(".totalPrice");
let priceOrders = document.querySelector(".totalOrders");
let pricePackage = document.querySelector(".totalPackage")
let priceAccounting = document.querySelector(".totalAccount");
let priceRental = document.querySelector(".totalRental");

let totalP = document.querySelector(".big");

let productsDiv = document.querySelector(".productsdiv");
let ordersDiv = document.querySelector(".ordersdiv");
let packageDiv = document.querySelector(".packagediv");
let accountingDiv = document.querySelector(".accountingdiv");
let rentalDiv = document.querySelector(".rentaldiv");

let quantity = 0;
let orders = 0;
let package = 0;
let accounting = 0;
let rental = 0;
let total = 0;

function quantityFunc() {
    let quantityValue = this.value;
    console.log(quantityValue);
    if (quantityValue > 0) {
        productsDiv.style.display = "flex";
        productsP.innerText = this.value + " * $0.5";
        priceProducts.innerText = "$ " + this.value * 0.5;
        quantity = this.value * 0.5;
        totalsum();
    } else if (quantityValue.length <= 0) {
        productsDiv.style.display = "none";
    }

};

inputQuantity.addEventListener("input", quantityFunc);

inputOrders.addEventListener("input", function () {
    let ordersValue = this.value;
    if (ordersValue > 0) {
        ordersDiv.style.display = "flex";
        ordersP.innerText = this.value + " * $0.25";
        priceOrders.innerText = "$ " + this.value * 0.25;
        orders = this.value * 0.25;
        totalsum();
    } else if (ordersValue.length <= 0) {
        ordersDiv.style.display = "none";
    }
});

function options() {
    for (let i = 0; i < optionPackage.length; i++) {
        // debugger
        if (this[1].selected === true) {
            packageDiv.style.display = "flex";
            pricePackage.innerText = "$ " + 50;
            package = 50;
            totalsum();
            return
        } else if (this[2].selected === true) {
            packageDiv.style.display = "flex";
            pricePackage.innerText = "$ " + 100;
            package = 100;
            totalsum();
            return
        } else if (this[3].selected === true) {
            packageDiv.style.display = "flex";
            pricePackage.innerText = "$ " + 200;
            package = 200;
            totalsum();
            return
        }
    }
}

inputPackage.addEventListener("change", options);

checkboxAccounting.addEventListener("change", function () {
    if (this.checked === true) {
        accountingDiv.style.display = "flex";
        priceAccounting.innerText = "$ " + 60;
        accounting = 60;
        totalsum();
    } else {
        accountingDiv.style.display = "none";
        accounting = 0;
        totalsum();
    }
});

checkboxRental.addEventListener("change", function () {

    if (this.checked === true) {
        rentalDiv.style.display = "flex";
        priceRental.innerText = "$ " + 40;
        rental = 40;
        totalsum();
    } else {
        rentalDiv.style.display = "none";
        rental = 0;
        totalsum();
    }
});

function totalsum() {
    totalP.innerText = quantity + orders + package + accounting + rental + " $";
};