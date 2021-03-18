const form = document.querySelector("form");
const message = document.querySelector(".message");
const emailValid = document.querySelector("#emailValid");
const emailError = document.querySelector("#emailError");
const email = document.querySelector("#email");
const passwordValid = document.querySelector("#passwordValid");
const passwordError = document.querySelector("#passwordError");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

function validateForm() {
  event.preventDefault();

  let form = true;

  if (validateEmail(email.value) === true) {
    emailError.style.display = "block";
    emailValid.style.display = "none";
  } else {
    emailError.style.display = "block";
    emailValid.style.display = "none";
    form = false;
  }
  if (checkLength(password.value, 100) === true) {
    passwordError.style.display = "block";
    passwordValid.style.display = "none";
  } else {
    passwordError.style.display = "block";
    passwordValid.style.display = "none";
    form = false;
  }
  if (form === true) {
    document.location.href = "./contact-success.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
