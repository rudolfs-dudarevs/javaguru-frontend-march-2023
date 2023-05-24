const userForm = document.getElementById("user-form");
const formInputs = Array.from(document.querySelectorAll("#user-form input"));

const validationRules = {
  username: (value) => Boolean(value),
  email: (value) => {
    if (!value) return false;
    const emailRegex =
      /^[\w\.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*(\.[a-zA-Z]{2,})$/;
    return emailRegex.test(value);
  },
  password: (value) => {
    if (!value) return false;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(value);
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
  const inputField = event.target;
  inputField.classList.remove("invalid", "valid");
  inputField.setCustomValidity("");
};

const validateField = (event) => {
  const inputField = event.target;
  const isFieldValid = validationRules[inputField.name](inputField.value);
  isFieldValid
    ? setFieldValid(inputField)
    : setFieldInvalid(inputField, "Field value is not valid.");
};

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

formInputs.forEach((inputField) => {
  inputField.addEventListener("input", resetValidationState);
  inputField.addEventListener("blur", validateField);
});
userForm.addEventListener("submit", handleFormSubmit);
