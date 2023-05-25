const form = document.getElementById("user-form")
const formInputs = document.querySelectorAll('#user-form input')

const validationRules = {
    username: (value) => {
        let isValid = Boolean(value)
        return isValid
    },
    email: (value) => {
        let emailRegex = /^.+@gmail.com$/
        let isValid = emailRegex.test(value)
        return isValid
    }
}

const resetValidationState = (event) => {
    let input = event.target
    input.classList.remove("valid");
    input.classList.remove("invalid");
    input.setCustomValidity("")
} 

const validateField = (event) => {
    const input = event.target
    let isValid = validationRules[input.name](input.value)


    if (isValid) {
        setFieldValid(input);
    } else {
        setFieldInvalid(input);
    }
} 

formInputs.forEach((input) => {
    input.addEventListener("input", resetValidationState)
    input.addEventListener("blur", validateField)
})

const setFieldValid = (input) => {
    input.classList.add("valid")
    input.classList.remove("invalid")
    input.setCustomValidity("")
};

const setFieldInvalid = (input) => {
    input.classList.add("invalid")
    input.classList.remove("valid")
    input.setCustomValidity("Error")
    input.reportValidity()
};


const handleFormSubmit = (item) => {
    item.preventDefault()
    const apiUrl = "https://httpbin.org/post"

    // formInputs.forEach((input) => validateField(input))
    const inputArray = Array.from(formInputs)
    const isFormValid = inputArray.every((el) => el.validity.valid)

    if(isFormValid) {
        const formData = new FormData(form);

        fetch(apiUrl, {
            method: "POST",
            body: formData
        })
    }

}

form.addEventListener("submit", handleFormSubmit)
