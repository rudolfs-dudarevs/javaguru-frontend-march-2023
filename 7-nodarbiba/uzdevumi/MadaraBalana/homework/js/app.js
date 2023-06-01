const userForm = document.getElementById("user-form");
const formInput = document.querySelectorAll("#user-form input");

const validationRules = {
  username: (value) => {
    let isValid = Boolean(value);

    return isValid;
  },

  email: (value) => {
    let isValid;

    if (value) {
      const emailRegex = /^.+@gmail.com$/;

      isValid = emailRegex.test(value);
    } else {
      isValid = false;
    }

    return isValid;
  },
};

const validateField = (event, element) => {
  let inputField = event ? event.target : element;

  const isFieldValid = validationRules[inputField.name](inputField.value);
  isFieldValid
    ? setFieldValid(inputField)
    : setFieldInvalid(inputField, "Field value is not valid.");
};

const setFieldValid = (inputField) => {
  inputField.classList.remove("invalid");
  inputField.classList.add("valid");
  inputField.setCustomValidity("");
};

const setFieldInvalid = (inputField, errorMsg) => {
  inputField.classList.remove("valid");
  inputField.classList.add("invalid");
  inputField.setCustomValidity(errorMsg);
  inputField.reportValidity();
};

const resetValidationState = (event) => {
  let inputField = event.target;
  inputField.classList.remove("invalid");
  inputField.classList.remove("valid");
  inputField.setCustomValidity("");
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const apiUrl = "https://httpbin.org/post";
  const isFormValid = true;

  if (isFormValid) {
    const formData = new FormData(userForm);

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
  }
};

formInput.forEach((inputField) => {
  inputField.addEventListener("input", resetValidationState);
  inputField.addEventListener("blur", validateField);
});

userForm.addEventListener("submit", handleFormSubmit);
