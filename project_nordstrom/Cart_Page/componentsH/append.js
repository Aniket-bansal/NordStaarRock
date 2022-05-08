
 import { quantity } from "../componentsH/quantity.js";

 let cartData = JSON.parse(localStorage.getItem("cartData"));
 let saveData = JSON.parse(localStorage.getItem("saveItem"))||[];

 let totalSum  = JSON.parse(localStorage.getItem("total"))||[];


let append = (data,container) => {
    data.forEach((el,index)=>{
        // console.log(el);
        let box1 = document.createElement("div");
        box1.setAttribute("id","box1");
    
        let box2 = document.createElement("div");
        box2.setAttribute("id","box2");
    
        let catagory = document.createElement("p");
        catagory.innerText = el.catagory;
    
        let title = document.createElement("p");
        title.innerText = el.title;
    
        let image = document.createElement("img");
        image.src = el.imgUrl;
        image.setAttribute("class","img11");
    
        let size = document.createElement("p");
        size.innerText = `Size:${el.size}`;
    
        let color = document.createElement("p");
        color.innerText = `Color:${el.color}`;
    
        let item = document.createElement("p");
        item.innerText = `Item:${el.item}`;
    
        let delivery = document.createElement("p");
        delivery.innerText = `${el.delivery}`;
    
        let btn = document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","removeBtn");
        btn.addEventListener("click",function(){
            removeItem(el,index);
        })
    
        let btn2 = document.createElement("button");
        btn2.innerText="Save For Later";
        btn2.setAttribute("id","removeBtn");
        btn2.addEventListener("click",function(){
            savedLater(el,index);
        })
    
        let hr = document.createElement("hr");
    
    
        box1.append(image);
    
        box2.append(hr,catagory,title,size,color,item,delivery,btn,btn2,hr);
    
        let box3 = document.createElement("div");
        box3.setAttribute("id","box3");
       
        let box4 = document.createElement("div");
        box3.innerHTML = quantity();
        box4.setAttribute("id","box4");
    
        let newP = document.createElement("h3");
        newP.innerText =`$${el.new_price}`;
    
    
        let nowP = document.createElement("p");
        nowP.innerText= `Now: $${el.new_price}`;
        
        
        
        let oldP = document.createElement("p");
        oldP.innerText = `$${el.pre_price}`;
        oldP.setAttribute("class","old");
    
        box4.append(newP,nowP,oldP);
    
        container.append(box1,box2,box3,box4);
     
        function getTotal(){
            let count = document.getElementById("item-quantity").value;
            let sum = `$${(Number(count)*el.new_price).toFixed(2)}`;
            
            totalSum.push(sum);
            localStorage.setItem("total",JSON.stringify(totalSum));
            totalSum.splice(index,1);
            newP.innerText = totalSum[totalSum.length-1];
        }
    
        document.getElementById("item-quantity").addEventListener("change",getTotal);
    
    })
}

function  removeItem(el,index){
     //console.log(el)
    cartData.splice(index,1);
    //console.log(cartData);
    localStorage.setItem("cartData",JSON.stringify(cartData));
    window.location.reload();
}


function savedLater(el,index){
    //cartData.splice(index,1);
    saveData.push(el);
    // saveData.splice(index,1);
    localStorage.setItem("saveItem",JSON.stringify(saveData));
    window.location.href = "savelater.html";
    
}


// conso




export {append};