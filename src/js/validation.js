//validation of SignIn modal in homepage. only checks that fields email and password are not empty
function validateSignIn() {
    let errors = 0;
    let inputEmail = document.forms["signIn"]["inputEmail"];
    let inputPassword = document.forms["signIn"]["inputPassword"];
    
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").innerHTML = "Your email is required to sign in.";
        errors ++;
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").innerHTML = "Your password is required to sign in.";
        errors ++;
    }

    if (errors > 0) {
        return false; //if the function returns false, submit is not performed
    } else {
        return true;
    }
}
//resets form when the modal is opened (called onclick)
function resetForm() {
    inputEmail.classList.remove("is-invalid");
    inputEmail.value = "";
    inputPassword.classList.remove("is-invalid");
    inputPassword.value = "";
}