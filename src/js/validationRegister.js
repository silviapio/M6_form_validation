//validates fields with similar checking logic. Returns false when the input is not valid. Parameter errorValue is optional
 function validateField(fieldName, minLength, errorDiv, errorMessage, errorValue) {
    let field = document.forms["registrationForm"][fieldName];
    if (field.value.length < minLength || field.value == errorValue) {
        field.classList.add("is-invalid");
        document.getElementById(errorDiv).innerHTML = errorMessage;  
        return false;
    } else {
        return true;
    }
}

//validates fields password and repeat password. the 2 passwords have to match and they must be at least 8 characters long
function validatePassword() {
    let inputPassword = document.forms["registrationForm"]["inputPassword"];
    let repeatPassword = document.forms["registrationForm"]["repeatPassword"];
    if (inputPassword.value !== repeatPassword.value) {
        inputPassword.classList.add("is-invalid");
        repeatPassword.classList.add("is-invalid");
        if (inputPassword.value.length < 8 || repeatPassword.value.length < 8) {
            document.getElementById("errorPassword").innerHTML = "The passwords have to match, and they must be at least 8 characters long.";
        } else {
            document.getElementById("errorPassword").innerHTML = "The passwords have to match.";
        }
        return false;       
    } else if (inputPassword.value.length < 8) {
        inputPassword.classList.add("is-invalid");
        repeatPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").innerHTML = "The password must be at least 8 characters long.";
        return false;
    }
    return true;
}

//validates email field. email can't be empty and has to comply with email's regular expression (function validateEmail)
function validateEmailField() {
    let inputEmailReg = document.forms["registrationForm"]["inputEmailReg"];
    if (inputEmailReg.value == "") {
        inputEmailReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Your email is required.";
        return false;
    } else if (!validateEmail(inputEmailReg.value)) {
        inputEmailReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Please check your email, it seems you have a typo.";
        return false;
    }
    return true;
}
//validates the inserted email against general standard (regular expression defined in mailFormat)
function validateEmail(inputText) {
    let mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mailFormat.test(inputText);
}

//validates the check for terms and conditions. if not checked, returns false
function validateTermsCheck() {
    let termsCheck = document.forms["registrationForm"]["termsCheck"];
    if (!termsCheck.checked) {
        termsCheck.classList.add("is-invalid");
        document.getElementById("errorTerms").innerHTML = "You must agree to Terms and Conditions to register.";
        return false;        
    }
    return true;
}

//validation of Registration form, called upon clicking on button Register
//runs a separate validation for each field: if true, keeps isValid unchanged; if false, changes isValid to false. returns true or false depending on isValid
function validateRegister() {
    let isValid = true;    
    isValid = validateField("inputName1", 3, "errorInputName1", "Your name must contain at least 3 characters.")? isValid: false;
    isValid = validateField("inputName2", 3, "errorInputName2", "Your family name must contain at least 3 characters.")? isValid: false;
    isValid = validateField("inputCountry", 0, "errorCountry", "Your Country is required.", "Choose...")? isValid: false;
    isValid = validateEmailField()? isValid: false;
    isValid = validatePassword()? isValid: false;
    isValid = validateTermsCheck()? isValid: false;
    console.log(isValid);
    return isValid;   
}

//targets an element of the form on blur (losing focus) and if the field is not empty, it removes from that element the class is-invalid
document.getElementById("registrationForm").addEventListener("blur", (event) => {
	console.log(event);
    if(event.target.value!="") {
        event.target.classList.remove('is-invalid');
}
},true);

//resets the form when the button Clear (#resetData) is clicked
$(document).on("click", "#resetData", function() {
    document.getElementById("registrationForm").reset();
});