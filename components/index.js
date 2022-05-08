import {navbar} from './navbar.js'

import { women } from './clearence.js';

import { womensclothing } from './womenclothing.js';

import { mens } from './menclothing.js';

import { kids } from './kidsclothing.js';

import { bag } from './bag.js';

import { home } from './home.js';

import { beauty } from './beauty.js';

import { gifts } from './gifts.js'

import {bottom} from './bottom.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById("clearence").innerHTML = women();

document.getElementById("womensclothing").innerHTML = womensclothing();

document.getElementById("mensclothing").innerHTML = mens();

document.getElementById("kidclothing").innerHTML = kids();

document.getElementById("bags").innerHTML = bag()

document.getElementById('Homeapp').innerHTML = home();

document.getElementById('Beautyapp').innerHTML = beauty();

document.getElementById('giftsapp').innerHTML = gifts();

document.getElementById('bottom').innerHTML = bottom();

document.getElementById('clear').addEventListener("mouseenter", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("mouseenter", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('womens').addEventListener("mouseenter", function() {
	document.querySelector('.wbg-modal').style.display = "flex";
});

document.querySelector('.wclose').addEventListener("mouseenter", function() {
	document.querySelector('.wbg-modal').style.display = "none";
});
document.getElementById('mens').addEventListener("mouseenter", function() {
	document.querySelector('.mbg-modal').style.display = "flex";
});

document.querySelector('.mclose').addEventListener("mouseenter", function() {
	document.querySelector('.mbg-modal').style.display = "none";
});

document.getElementById('kid').addEventListener("mouseenter", function() {
	document.querySelector('.kbg-modal').style.display = "flex";
});

document.querySelector('.kclose').addEventListener("mouseenter", function() {
	document.querySelector('.kbg-modal').style.display = "none";
});

document.getElementById('bag').addEventListener("mouseenter", function() {
	document.querySelector('.abg-modal').style.display = "flex";
});

document.querySelector('.aclose').addEventListener("mouseenter", function() {
	document.querySelector('.abg-modal').style.display = "none";
});


document.getElementById('home').addEventListener("mouseenter", function() {
	document.querySelector('.hbg-modal').style.display = "flex";
});

document.querySelector('.hclose').addEventListener("mouseenter", function() {
	document.querySelector('.hbg-modal').style.display = "none";
});

document.getElementById('beauty').addEventListener("mouseenter", function() {
	document.querySelector('.bbg-modal').style.display = "flex";
});

document.querySelector('.bclose').addEventListener("mouseenter", function() {
	document.querySelector('.bbg-modal').style.display = "none";
});

document.getElementById('gifts').addEventListener("mouseenter", function() {
	document.querySelector('.gbg-modal').style.display = "flex";
});

document.querySelector('.gclose').addEventListener("mouseenter", function() {
	document.querySelector('.gbg-modal').style.display = "none";
});

document.getElementById('signin').addEventListener("mouseenter", function() {
	document.querySelector('.sign-modal').style.display = "flex";
});

document.querySelector('.signclose').addEventListener("mouseenter", function() {
	document.querySelector('.sign-modal').style.display = "none";
});

// document.getElementById('cart').addEventListener("click", function() {
// 	document.querySelector('.cart-modal').style.display = "flex";
// });

// document.querySelector('.cartclose').addEventListener("click", function() {
// 	document.querySelector('.cart-modal').style.display = "none";
// });

// slideshow

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


// products tabs

let tabs = document.querySelectorAll('.tab');
        let content = document.querySelectorAll('.content-item');
        for (let i = 0; i < tabs.length; i++) {            
            tabs[i].addEventListener('click', () => tabClick(i));
        }

        function tabClick(currentTab) {
            removeActive();
            tabs[currentTab].classList.add('active');
            content[currentTab].classList.add('active');
            console.log(currentTab);
        }

        function removeActive() {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                content[i].classList.remove('active');
            }
        }

// product sliideshow






// banner2 slide show

var myIndexx = 0;
carousell();

function carousell() {
  var i;
  var y = document.getElementsByClassName("mySlidess");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  myIndexx++;
  if (myIndexx > y.length) {myIndexx = 1}    
  y[myIndexx-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// SignIn button modal

document.getElementById('signin_redirect').addEventListener("click", function() {
	document.querySelector('.signin_modal').style.display = "flex";
});

document.querySelector('.signin_close').addEventListener("click", function() {
	document.querySelector('.signin_modal').style.display = "none";
});

// search item on search page

const url ="https://fakestoreapi.com/products"

fetch(url).then(function(res){
  return res.json();
})
.then(function(res){
  console.log(res)
})




// Signin

var email = JSON.parse(localStorage.getItem('emailid'))
var pass = JSON.parse(localStorage.getItem('information'))

document.getElementById("signin_redirect").addEventListener('click',signin)

function signin(){
  var user_email = docment.getElementById("user_email").value;
  var user_pass = document.getElementById("password").value;
  if(user_email == email.email && user_pass == information.password)
  {
    window.location = "#"
    document.getElementById("signin").innerText= "Hello" + information.first;
  }
  else{
    alert("Please Enter correct credentials")
  }
}


document.getElementById("redTohome").addEventListener("click",redToHome)

function redToHome(){
  window.location = "../index.html"
}