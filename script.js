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
function checkEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess();
  } else {
    showError(email, "Email is not valid");
  }
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is Required`);
      } else {
        showSuccess(input);
      }
    });
  }
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Check Password match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

//Get fieldname
function getFieldName(input) {
  return input.className.charAt(0).toUpperCase() + input.className.slice(1);
}
