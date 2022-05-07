var first=JSON.parse(localStorage.getItem("information"))
//console.log(first)
document.getElementById("name").innerText=first[first.length-1].first;





document.querySelector("form").addEventListener("submit",entermobilefunction);
var Mobile=JSON.parse(localStorage.getItem("mobile"))||[];
function entermobilefunction(){
   event.preventDefault();
   var mymobile=document.querySelector("#mobile1").value;
   if(mymobile!=''){
    var obj2={
      first:mymobile,
  }
  console.log(obj2)
  Mobile.push(obj2);
  localStorage.setItem("mobile",JSON.stringify(Mobile))
  window.location.href="mobileverify.html"
 console.log("mobile:",Mobile)
   }
 
}