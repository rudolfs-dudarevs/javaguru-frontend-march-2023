let userForm = document.getElementById("user-form")
let formInputs = document.querySelectorAll('#user-form input');

const validationRules = {
    username: (value) => {
        let isValid = Boolean(value);
        return isValid
        },
    email: (value) => {
        const emailRegex = /^.+@gmail.com$/;
        let isValid = emailRegex.test(value);
        return isValid
    }
}

const ressetError = (event) => {
    const inputField = event.target;
    inputField.classList.remove("valid");
    inputField.classList.remove("invalid");
    inputField.setCustomValidity("")

}

const isValid = (inputField) => {
    return validationRules[inputField.name](inputField.value)
}

const handleValidity = (inputField, errorMsg) => {
    isValid(inputField) ? setFieldValid(inputField) : setFieldInvalid(inputField, errorMsg)
}

const validateField = (event) => {
    const inputField = event.target;
    validationRules[inputField.name](inputField.value);
    let isValid = inputField.value

    if (isValid) {
        setFieldValid(inputField);
    } else {
        setFieldInvalid(inputField);
    }

    switch (inputField.name) {
        case "username":
            handleValidity(inputField, "Please enter user name");
        break;
        case "email":
            handleValidity(inputField, "Please enter e-mail");
        break;
    }
};

const setFieldValid = (inputField) => {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
    inputField.setCustomValidity("")
};

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity(errorMsg)
    inputField.reportValidity()
};


const handleFormSubmit = (item) => {
    item.preventDefault()
    const apiUrl = "https://httpbin.org/post";
    const inputArray = Array.from(formInputs)
    console.log(inputArray)
    const isFormValid = true;

    if(isFormValid) {
        const formData = new FormData(userForm)

        console.log(formData)

        fetch(apiUrl, {
            method: "POST",
            body: formData
        })
    }

}

formInputs.forEach((inputField) => {
    inputField.addEventListener("input", ressetError)
    inputField.addEventListener("blur", validateField)
})

userForm.addEventListener("submit", handleFormSubmit)