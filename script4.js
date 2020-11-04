
function submitFunction(event) {
    event.preventDefault();

    resetFunction(event);

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    if (username.value === "" ) {
        let userError = document.getElementById("userError");
        userError.style.color = "red";
        username.style.borderColor = "red";
        userError.innerHTML = "Please enter your name.";
    }

    else if (email.value === "") {
        let userError2 = document.getElementById("userError2");
        userError2.style.color = "red";
        email.style.borderColor = "red";
        userError2.innerHTML = "Please enter your email.";
    }
    else if (email.value.indexOf("@") === -1 | email.value.indexOf(".") === -1 | email.value.length < 6) {
        let userError2a = document.getElementById("userError2a");
        userError2a.style.color = "orange";
        email.style.borderColor = "orange";
        userError2a.innerHTML = "Please enter correct email.";
    
    }

    else if (password.value === "") {
        let userError3 = document.getElementById("userError3");
        userError3.style.color = "red";
        password.style.borderColor = "red";
        userError3.innerHTML = "Please enter your password.";
    }
    
}

function resetFunction(event) {
    event.preventDefault();
    let removeErrors = document.querySelectorAll(".error");
    for (i = 0; i < removeErrors.length; i++) {
        removeErrors[i].innerHTML = ""; 
    }
    username.style.borderColor = null;
    email.style.borderColor = null;
    password.style.borderColor = null;

}

function clearFunction(event) {
event.preventDefault();
    resetFunction(event);
    let removeText = document.querySelectorAll(".text");
    for (i = 0; i < removeText.length; i++) {
        removeText[i].value = ""; 
    }

}


