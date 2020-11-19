const form = document.getElementById('myForm');

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
        return false;
    } else {
        return true;
    }
}

function resetForm() {
    inputEmail.classList.remove("is-invalid");
    inputEmail.value = "";
    inputPassword.classList.remove("is-invalid");
    inputPassword.value = "";
}