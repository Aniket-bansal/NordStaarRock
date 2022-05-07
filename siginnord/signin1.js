
    document.querySelector("form").addEventListener("submit",enteremailfunction);
    var useremail=JSON.parse(localStorage.getItem("useremail"))||[];
     function enteremailfunction(){
         event.preventDefault();
         var emailiduser=document.querySelector("#email").value;
        if(emailiduser!=''){
            var obj={
                email:emailiduser,
            }
        
         console.log(obj)
         useremail.push(obj);
         localStorage.setItem("emailid",JSON.stringify(useremail))
         window.location.href="createaccount.html"
       
     }
     else
     {
         alert("Enter valid email")
     }
}


