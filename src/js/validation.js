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

function validateRegister() {
    let errors = 0;
    
    let inputName1 = document.forms["registrationForm"]["inputName1"];
    let inputName2 = document.forms["registrationForm"]["inputName2"];
    let inputEmailReg = document.forms["registrationForm"]["inputEmailReg"];
    let inputPassword = document.forms["registrationForm"]["inputPassword"];
    let repeatPassword = document.forms["registrationForm"]["repeatPassword"];
    let inputCountry = document.forms["registrationForm"]["inputCountry"];
    let termsCheck = document.forms["registrationForm"]["termsCheck"];

    if (inputName1.value.length < 3) {
        inputName1.classList.add("is-invalid");
        document.getElementById("errorInputName1").innerHTML = "Your name must contain at least 3 characters.";        
        errors++;
    }

    if (inputName2.value.length < 3) {
        inputName2.classList.add("is-invalid");
        document.getElementById("errorInputName2").innerHTML = "Your family name must contain at least 3 characters.";
        errors++;
    }

    if (inputEmailReg.value == "") {
        inputEmailReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Your email is required.";
        errors++;
    } else if (!validateEmail(inputEmailReg.value)) {
        inputEmailReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Please check your email, it seems you have a typo.";
        errors++;
    }

    if (inputPassword.value !== repeatPassword.value) {
        inputPassword.classList.add("is-invalid");
        repeatPassword.classList.add("is-invalid");
        if (inputPassword.value.length < 8 || repeatPassword.value.length < 8) {
            document.getElementById("errorPassword").innerHTML = "The passwords have to match, and they must be at least 8 characters long.";
        } else {
            document.getElementById("errorPassword").innerHTML = "The passwords have to match.";
        }
    } else if (inputPassword.value.length < 8) {
        inputPassword.classList.add("is-invalid");
        repeatPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").innerHTML = "The password must be at least 8 characters long.";
    }

    if (inputCountry.value == "Choose...") {
        inputCountry.classList.add("is-invalid");
        document.getElementById("errorCountry").innerHTML = "Your Country is required.";
    }

    if (!termsCheck.checked) {
        termsCheck.classList.add("is-invalid");
        document.getElementById("errorTerms").innerHTML = "You must agree to Terms and Conditions to register.";
    }
    
    if (errors > 0) {
        return false;
    } else {
        return true;
    }
}

function validateEmail(inputText) {
    let mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mailFormat.test(inputText);
}

document.getElementById("registrationForm").addEventListener("change", (event) => {
	console.log(event);
	if(event.target.value!="") {
        event.target.classList.remove("is-invalid");
    }
});

$(document).on("click", "#resetData", function() {
    document.getElementById("registrationForm").reset();
});