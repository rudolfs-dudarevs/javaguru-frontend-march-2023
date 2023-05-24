let userForm = document.getElementById("user-form");
let formInputs = document.querySelectorAll('#user-form input');
let checkbox = document.querySelector("input[name=checkbox]");

const validationRules = {
    username: (value) => {
        let isValid = !!value;
        isValid ? document.getElementById("userError").classList.add("invisible") : document.getElementById("userError").classList.remove("invisible");
        return isValid;
    },
    email: (value) => {
        let isValid;
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        value ? isValid=regexEmail.test(value)
        : isValid=false;
        isValid ? document.getElementById("emailError").classList.add("invisible") : document.getElementById("emailError").classList.remove("invisible");
        return isValid;
    },
    password: (value) => {
        let isValid;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        value ? isValid=regexPassword.test(value)
        : isValid=false;
        isValid ? document.getElementById("passwordError").classList.add("invisible") : document.getElementById("passwordError").classList.remove("invisible");
        return isValid;
    },
    passwordCheck: (value) => {
        let isValid;
        let pw=document.getElementById("password");
        value && pw.value===value ? isValid=true
        : isValid=false;
        isValid ? document.getElementById("passwordCheckError").classList.add("invisible") : document.getElementById("passwordCheckError").classList.remove("invisible");
        return isValid; 
    },
    checkbox: (value) => {
        let isValid = true;
        return isValid;
    }
};

const resetErrorState = (event) => {
    const inputField = event.target;
    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity("");
};

const validateField = (event, element) => {
    let inputField = event 
        ? event.target 
        : element;
    const isFieldValid = validationRules[inputField.name](inputField.value);
    isFieldValid
        ? setFieldValid(inputField)
        : setFieldInvalid(inputField, "ERROR")
};

const setFieldValid = (inputField) => {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
    inputField.setCustomValidity("");
};

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity(errorMsg);
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const apiUrl = "https://httpbin.org/post";
    
    formInputs.forEach((inputField) => validateField(null, inputField));
    const inputArray = Array.from(formInputs);
    const isFormValid = inputArray.every((el) => el.validity.valid)

    if(isFormValid) {
        const formData = new FormData(userForm);
        formData.delete("passwordCheck");
        formData.delete("checkbox");
        fetch(apiUrl, {
            method: "POST",
            body: formData
        })
    }
};

formInputs.forEach((inputField) => {
    inputField.addEventListener("input", resetErrorState);
    inputField.addEventListener("blur", validateField);
});

const showPassword = () => {
    let showPw = document.getElementById("password");
    let showPwCheck = document.getElementById("passwordCheck");
    if(showPw.type === "password") {
        showPw.type= "text";
        showPwCheck.type= "text";
    } else {
        showPw.type= "password";
        showPwCheck.type= "password";
    }
};

userForm.addEventListener("submit", handleFormSubmit);
checkbox.addEventListener("change", showPassword);