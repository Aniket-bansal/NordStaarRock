let saveData = JSON.parse(localStorage.getItem("saveItem"))||[];
let cartData = JSON.parse(localStorage.getItem("cartData"));
 

document.getElementById("shopping").innerHTML=`Shopping Bag (${cartData.length})`;

document.getElementById("saved").innerHTML=`Shopping Bag (${saveData.length})`;


import {append} from "../componentsH/append.js";  
let container = document.getElementById("container"); 
append (saveData,container);


document.getElementById("shop_div").addEventListener("click",backToShop);

function backToShop(){
    window.location.href = "cartPage.html"
}

document.getElementById("save_div").addEventListener("click",backToSave);

function backToSave(){
    window.location.href = "savelater.html"
}
