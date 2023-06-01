let userForm = document.getElementById("user-form");
let formInputs = document.querySelectorAll("#user-form input");

const validationRules = {
  username: (value) => {
    let isValid = Boolean(value);
    return isValid;
  },
  email: (value) => {
    let isValid;
    if (value) {
      const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
      isValid = emailRegex.test(value);
    } else {
      isValid = false;
    }
    return isValid;
  },
  password: (value) => {
    let isValid;
    if (value) {
      const passRegex = /^(?=.*\S).{8,}$/;
      isValid = passRegex.test(value);
    } else {
      isValid = false;
    }
    return isValid;
  },
};

const setFieldInvalid = (inputField, errorMsg) => {
  inputField.classList.remove("valid");
  inputField.classList.add("invalid");
  inputField.setCustomValidity(errorMsg);
  inputField.reportValidity();
};

const setFieldValid = (inputField) => {
  inputField.classList.remove("invalid");
  inputField.classList.add("valid");
  inputField.setCustomValidity("");
};

const resetValidationState = (event) => {
  let inputField = event.target;
  inputField.classList.remove("invalid");
  inputField.classList.remove("valid");
  inputField.setCustomValidity("");
};

const validateField = (event, element) => {
  let inputField = event ? event.target : element;
  const isFieldValid = validationRules[inputField.name](inputField.value);
  isFieldValid
    ? setFieldValid(inputField)
    : setFieldInvalid(inputField, "Field value is not valid.");
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const apiUrl = "https://httpbin.org/post";

  formInputs.forEach((inputField) => validateField(null, inputField));
  const inputArray = Array.from(formInputs);
  const isFormValid = inputArray.every((el) => el.validity.valid);

  if (isFormValid) {
    const formData = new FormData(userForm);

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
  }
};

formInputs.forEach((inputField) => {
  inputField.addEventListener("input", resetValidationState);
  inputField.addEventListener("blur", validateField);
});
userForm.addEventListener("submit", handleFormSubmit);
