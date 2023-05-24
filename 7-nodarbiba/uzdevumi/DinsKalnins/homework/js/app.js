const validationRules = {
  username: (value) => {
    return Boolean(value);
  },
  email: (value) => {
    let isValid;

    if (value) {
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isValid = emailRegEx.test(value);
    } else {
      isValid = false;
    }

    return isValid;
  },
};

//reset
function resetValidationState(input) {
  input.classList.remove("valid");
  input.classList.remove("invalid");
}

function setFieldInvalid(input, message) {
  input.classList.remove("valid");
  input.classList.add("invalid");
}

function setFieldValid(input) {
  input.classList.remove("invalid");
  input.classList.add("valid");
}

//Validator
const validateField = (event, element) => {
  let inputField = event ? event.target : element;
  const isFieldValid = validationRules[inputField.name](inputField.value);
  isFieldValid
    ? setFieldValid(inputField)
    : setFieldInvalid(inputField, "Field value is not valid.");
};

//API
const handleFormSubmit = (event) => {
  event.preventDefault();
  const apiUrl = "https://httpbin.org/post";

  formInputs.forEach((inputField) => validateField({ target: inputField }));
  const isFormValid = formInputs.every(
    (inputField) => inputField.validity.valid
  );

  if (isFormValid) {
    const formData = new FormData(userForm);
    fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
  }
};

//Event Listeners
formInputs.forEach((inputField) => {
  inputField.addEventListener("input", resetValidationState);
  inputField.addEventListener("blur", validateField);
});
userForm.addEventListener("submit", handleFormSubmit);
