
var email=JSON.parse(localStorage.getItem("emailid"));
console.log(email[0].email)
document.getElementById("your").innerText=email[email.length-1].email;


document.querySelector("form").addEventListener("submit",enteremailfunction);
var data=JSON.parse(localStorage.getItem("information"))||[];
function enteremailfunction(){
   event.preventDefault();
   var myfirst=document.querySelector("#first").value;
   var mylast=document.querySelector("#last").value;
   var mypassword=document.querySelector("#password").value;
  if(myfirst!=''&mylast!=''&mypassword!=''){
    var obj1={
        first:myfirst,
        last:mylast,
        password:mypassword
    }
    console.log(obj1)
    data.push(obj1);
    localStorage.setItem("information",JSON.stringify(data))
    window.location.href="welcome.html"
  
  }
}