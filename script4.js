
function submitFunction(event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    if (username.value === "" ) {
    let userError=document.getElementById("userError");
    userError.style.color="red";
    username.style.borderColor="red";
    userError.innerHTML="Please enter your name.";
    }

    if (email.value === "") {
        let userError2=document.getElementById("userError2");
        userError2.style.color="red";
        email.style.borderColor="red";
        userError2.innerHTML="Please enter your email.";
    }
    else if (email.value.indexOf("@") === -1 | email.value.indexOf(".") === -1 | email.value.length < 7) {
            userError2a.style.color="orange";
            email.style.borderColor="orange";
            userError2a.innerHTML="Please enter correct email.";
    
        }

   

    if (password.value === "") {
        let userError3 = document.getElementById("userError3");
        userError3.style.color="red";
        password.style.borderColor="red";
        userError3.innerHTML = "Please enter your password.";
    }
    
}


function resetFunction(event) {
    event.preventDefault();
    let removeErrors = document.getElementsByClassName("error");
    console.log(removeErrors);
    removeErrors.innerHTML = ""; //why this didnt work?

    username.style.borderColor = null;
    email.style.borderColor = null;
    password.style.borderColor = null;

//because removeErrors didnt work, I had to do this
    let userError = document.getElementById("userError");
        userError.innerHTML = "";

    let userError2 = document.getElementById("userError2");
        userError2.innerHTML = "";
    let userError2a = document.getElementById("userError2a");
        userError2a.innerHTML = "";

    let userError3 = document.getElementById("userError3");
        userError3.innerHTML = "";

}