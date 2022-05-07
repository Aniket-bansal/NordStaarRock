let saveData = JSON.parse(localStorage.getItem("saveItem"))||[];
let cartData = JSON.parse(localStorage.getItem("cartData"));
 

document.getElementById("shopping").innerHTML=`Shopping Bag (${cartData.length})`;

document.getElementById("saved").innerHTML=`Shopping Bag (${saveData.length})`;


import { quantity } from "../componentsH/quantity.js";



import {append} from "../componentsH/append.js";


let container = document.getElementById("container");
append (cartData,container);


document.getElementById("shop_div").addEventListener("click",backToShop);

function backToShop(){
    window.location.href = "cartPage.html";
}

document.getElementById("save_div").addEventListener("click",backToSave);

function backToSave(){
    window.location.href = "savelater.html";
}

let total  = JSON.parse(localStorage.getItem("subTotal"))||[];

let subTotal = cartData.reduce((sum,el)=>{
    return (sum+Number(el.new_price))
},0)

localStorage.setItem("subTotal",JSON.stringify(subTotal));


document.getElementById("subtotal").innerText = `$${subTotal.toFixed(2)}`;
document.getElementById("estimated_total").innerText = `$${subTotal.toFixed(2)}`;


document.getElementById("check_out").addEventListener("click",checkOutFun)

function checkOutFun(){
    window.location.href = "payment.html"
}
