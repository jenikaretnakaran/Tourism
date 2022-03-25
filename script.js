const form = document.getElementById('form')
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const mobileNum = document.getElementById('mobileNum');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

const setError = (element,message) => {
    const displayRed= element.parentElement;
    const errorDisplay= displayRed.querySelector('.error');
    errorDisplay.innerText=message;
    displayRed.querySelector(".error").style.color="red";

};

const setSuccess = (element,message) => {
    const displayGreen = element.parentElement;
    const successDisplay = displayGreen.querySelector('.error');
    successDisplay.innerText = message;
    displayGreen.querySelector(".error").style.color="green";
};

const setWarning = (element,message,colour) => {
    const warning= element.parentElement;
    const successDisplay = warning.querySelector('.error');
    successDisplay.innerText = "Password strength:"+message;
    warning.querySelector(".error").style.color=colour;
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validNumber = mobileNum => {
    const mn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return mn.test(mobileNum);
};
const validPassword = password => {
    const pwd =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{8,}$/;
    return pwd.test(password);
};

const checkInputs =() => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const mobileNumValue = mobileNum.value.trim();
    const passwordValue= password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

// userName
if(userNameValue==="") {
    setError(userName,"username is required");
}else {
    setSuccess(userName,"username is valid");
}
// email
if(emailValue === "") {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email,"email is valid");
    
};
// phonenumber

if(mobileNumValue==="") {
    setError(mobileNum,"Phonenumber is required");
}
else if (mobileNumValue.length<10) {
    setError(mobileNum,"mobile number must have 10 digits");
}
 else if (!validNumber(mobileNumValue)) {
    setError(mobileNum,"provide valid phone number");
}
 else {
    setSuccess(mobileNum,"mobile number is valid");
 };
//  password

if (passwordValue==="") {
    setError(password,"Password is required");
}
else if (!validPassword(passwordValue)) {
    setError(password,"Password should contain atleast 8 characters with one uppercase,lowercase and number");
}
 else if (passwordValue.length===8) {
    setWarning(password,"poor","red");

 }
 else if (passwordValue.length <= 10) {
     setWarning(password,"medium","orange");
 } 
 else {
     setWarning(password,"strong","green");
 };

//  confirm password

if (passwordConfirmValue==="") {
    setError(passwordConfirm,"Re-enter password");
}
else if(passwordConfirmValue===passwordValue) {
    setSuccess(passwordConfirm,"valid password");
}
else {
    setError(passwordConfirm,"Re-enter password"); 
};


};
