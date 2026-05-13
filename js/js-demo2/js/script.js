function validate(event){
    console.log("Form submitted");
    event.preventDefault();
    var name = document.getElementById("username").value;
    var email = document.getElementById("emailId").value;
    var age = document.getElementById("age").value;
    let result = emptyValidation();
    if (result){
        alert("Form Submitted Successfully")
        document.getElementById("form1").reset();
    }
    return false;
     }


 
 function emptyValidation(){
    var name = document.getElementById("username").value;
    var email = document.getElementById("emailId").value;
    var age = document.getElementById("age").value;

    var namePattern = /^[a-zA-Z]{3,10}$/;

    let errUsername =document.getElementById("errUsername");
    let errEmailId =document.getElementById("errEmailId");
    let errAge =document.getElementById("errAge");
    let isValid=true;
    // var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(name.trim()=="") {
        // alert("Name cannot be empty");
        errUsername.innerText="UserName cannot be empty"
        isValid = false;
    }
    else if(!namePattern.test(name)) {
        errUsername.innerText="Name must contain only letters - 3 to 10";
        // alert("Name must contain only letters and be between 3 and 10 characters long");
        isValid = false;
    }
    else {
        errUsername.innerText="";
    }
     if(email.trim()=="") {
        errEmailId.innerText="Email Can not be empty";
        // alert("Email cannot be empty");
        isValid = false;
    }
    else {
        errEmailId.innerText="";
    }
    if(age.trim()=="") {
        errAge.innerText="Age cannot be empty";
        // alert("Age cannot be empty");
        isValid=false;
    }
    else {
        errAge.innerText="";
    }
    return isValid;


 }  