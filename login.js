const form = document.getElementById("form");
const emailId = document.getElementById("emailInput");
const pwdId = document.getElementById("pwdInput");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

const setError = (element,message) => {
    const displayRed= element.parentElement;
    const errorDisplay= displayRed.querySelector('.warning');
    errorDisplay.innerText=message;
    displayRed.querySelector(".warning").style.color="red";

};

const setSuccess = (element,message) => {
    const displayGreen = element.parentElement;
    const successDisplay = displayGreen.querySelector('.warning');
    successDisplay.innerText = message;
    displayGreen.querySelector(".warning").style.color="green";
};
const isValidEmail = emailId => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailId).toLowerCase());
};
const validPassword = pwdId=> {
    const pwd =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{8,}$/;
    return pwd.test(pwdId);
};

const checkInputs =() => {
    const emailIdValue = emailId.value.trim();
    const pwdIdValue = pwdId.value.trim();

    // emailvalidation

    if(emailIdValue === "") {
        setError(emailId, 'Email is required');
    } 
    else if (!isValidEmail(emailIdValue)) {
        setError(emailId, 'Provide a valid email address');
    } 
    else {
        setSuccess(emailId,"email is valid");
        
    };
    // password

    if (pwdIdValue==="") {
        setError(pwdId,"Password is required");
    }
    else if (!validPassword(pwdIdValue)) {
        setError(pwdId,"Password invalid");
    }
    else {
        setSuccess(pwdId,"Valid password");
    };

}    