var first=JSON.parse(localStorage.getItem("information"))
    console.log(first)
    document.getElementById("name").innerText=first[first.length-1].first;


    document.querySelector("form").addEventListener("submit",entermobilefunction);
var Mobile=JSON.parse(localStorage.getItem("mobile"))||[];
function entermobilefunction(){

    if(document.querySelector("#mobilecode").value!=''){
        event.preventDefault();
        window.location.href="final.html"
    }
   
}
 
