const form = document.getElementsByClassName("form__form")[0];
const username = document.getElementsByClassName("username")[0];
const email = document.getElementsByClassName("email")[0];
const password = document.getElementsByClassName("password")[0];
const password2 = document.getElementsByClassName("password2")[0];

//Show input error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

//Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {});
  }

  checkRequired([username, email, password, password2]);
});
