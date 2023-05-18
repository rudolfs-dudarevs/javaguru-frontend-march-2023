let userForm = document.getElementById("user-form");
let formInputs = document.querySelectorAll('#user-form input');


const validationRules = {
    username: (value) => {
        let isValid = Boolean(value);

        return isValid
    },
    poNumber: (value) => {
        let isValid = Boolean(value);

        return isValid
    },
    poPattern: (value, country) => {
        let isValid;

        if(value) {
            // MĀJASDARBA NAV NEPIECIEŠAMS
            const regEx = {
                lv: /^(LV-)?\d{4}$/,
                lt: /^(LT-)?\d{4}$/,
                ee: /^(EE-)?\d{4}$/,
            };
            
            isValid = regEx[country].test(value); // country ir HTML selectora "country" vertiba. test(value) ir regEx metode, lia pārbauditu maiga atbilstibu
            // Mājasdarba piemērs:
            // const emailRegex = /^.+@gmail.com$/;
            // isValid = emailRegex.test(value)
        } else {
            isValid = false;
        }

        return isValid
    }
}

const validateField = (event, element) => {
    let inputField = event 
        ? event.target 
        : element;

    // MĀJASDARBAM NAV NEPIECIEŠAMS šis switch.
    switch(inputField.name) {
        case "username":
            handleValidity(inputField, "Username field must contain a value.");
            break;
        case "poNumber":
            handleValidity(inputField, "PO number field must contain value.");
            handlePoValidity("Wrong format PO number for selected country");
            break;
        default:
            console.log("Not matching input field validation case found. Make sure the input element name attribute has correct value.");
            break;
    }
    // Daram vienkāršotāk:
    // const isFieldValid = validationRules[inputField.name](inputField.value);
    // isFieldValid
    //   ? setFieldValid(inputField)
    //   : setFieldInvalid(inputField, "Field value is not valid.")
}

// MĀJASDARBAM NAV NEPIECIEŠAMA
const isValid = (inputField) => {
    return validationRules[inputField.name](inputField.value)
}

// MĀJASDARBAM NAV NEPIECIEŠAMA
const handleValidity = (inputField, errorMsg) => {
    isValid(inputField)
      ? setFieldValid(inputField)
      : setFieldInvalid(inputField, errorMsg)
}

// MĀJASDARBAM NAV NEPIECIEŠAMA
const handlePoValidity = (errorMsg) => {
    const poField = document.getElementById("po-number");//izmanto getElementById, lai atrastu visus elementus
    const countryField = document.getElementById("country");
    const isPoPatternValid = validationRules.poPattern(poField.value, countryField.value);

    isPoPatternValid
       ? setFieldValid(poField)
       : setFieldInvalid(poField, errorMsg)
}

 const setFieldValid = (inputField) => {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
    inputField.setCustomValidity("");//notīra iepriekšējās vērtības, iepriekš iegūto error message
}

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
    inputField.setCustomValidity(errorMsg);// kļūdas paziņojums
    inputField.reportValidity();
}

const resetErrorState = (event) => {
    let inputField = event.target;

    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity("");
}

// MĀJASDRBA DER - COPY/PASTE
const handleFormSubmit = (event) => {
    event.preventDefault();
    const apiUrl = "https://httpbin.org/post";

    formInputs.forEach((inputField) => validateField(null, inputField));
    const inputArray = Array.from(formInputs);
    const isFormValid = inputArray.every((el) => el.validity.valid)

    if(isFormValid) {
        const formData = new FormData(userForm);

        fetch(apiUrl, {
            method: "POST",
            body: formData
        })
    }
}

// MĀJASDRBA DER - COPY/PASTE
formInputs.forEach((inputField) => {
    inputField.addEventListener("input", resetErrorState);
    inputField.addEventListener("blur", validateField);
})
userForm.addEventListener("submit", handleFormSubmit)