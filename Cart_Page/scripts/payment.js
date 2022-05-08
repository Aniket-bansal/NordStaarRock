  
    let checkoutData = JSON.parse(localStorage.getItem("cartData"));
    console.log(checkoutData);

    checkoutData.forEach(({delivery,imgUrl})=>{
        document.getElementById("delhivery").innerText = delivery;
        let image = document.createElement("img");
        image.src = imgUrl;
        image.setAttribute("class","checkoutImg")
        document.getElementById("checkout_img").append(image)
        // console.log(delivery);
    })


    let total = JSON.parse(localStorage.getItem('subTotal'));
    console.log(total);

    document.getElementById("your_items").innerHTML = `$${total}`;

    document.getElementById("estimated").innerHTML = `$${total}`;

    document.getElementById("your_items1").innerHTML = `$${total}`;

    document.getElementById("estimated1").innerHTML = `$${total}`;


    document.getElementById("reviewbtn").addEventListener("click",buyNowFun);

    function buyNowFun(){
        alert("Your order is accepted ")
        setTimeout(function(){
            alert("Your order is being Packed")
        },3000);
        setTimeout(function(){
            alert("Your order is in transit  ")
        },5000);
        setTimeout(function(){
            alert("Your order is out for delivery")
        },7000);
    }

    document.getElementById("navbar_Image").addEventListener("click",redToHome)

   