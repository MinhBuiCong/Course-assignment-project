const form = document.querySelector("form");
const message = document.querySelector(".message");
const emailError = document.querySelector("#emailError");
const email = document.querySelector("#email");
const phoneError = document.querySelector("#phoneError");
const phone = document.querySelector("#phone");
const firstError = document.querySelector("#firstError");
const first = document.querySelector("#first");
const lastError = document.querySelector("#lastError");
const last = document.querySelector("#last");
const addressError = document.querySelector("#addressError");
const address = document.querySelector("#address");
const zipError = document.querySelector("#zipError");
const zip = document.querySelector("#zip");
const countryError = document.querySelector("#countryError");
const country = document.querySelector("#country");
const stateError = document.querySelector("#stateError");
const state = document.querySelector("#state");
const submit = document.querySelector("#submit");

function validateForm() {
  event.preventDefault();

  let form = true;

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "flex";
    form = false;
  }
  if (checkLength(phone.value, 7) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "flex";
    form = false;
  }
  if (checkLength(first.value, 0) === true) {
    firstError.style.display = "none";
  } else {
    firstError.style.display = "flex";
    form = false;
  }
  if (checkLength(last.value, 0) === true) {
    lastError.style.display = "none";
  } else {
    lastError.style.display = "flex";
    form = false;
  }
  if (checkLength(address.value, 7) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "flex";
    form = false;
  }
  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
  } else {
    zipError.style.display = "flex";
    form = false;
  }
  if (checkLength(country.value, 3) === true) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "flex";
    form = false;
  }
  if (checkLength(state.value, 3) === true) {
    stateError.style.display = "none";
  } else {
    stateError.style.display = "flex";
    form = false;
  }
  if (form === true) {
    document.location.href = "./checkout.html";
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
