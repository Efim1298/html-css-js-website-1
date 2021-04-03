//Nav items
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const menuLinks2 = document.querySelector(".nav-container");
const navLogo = document.querySelector("#navbar-logo");

//Click events nav
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//Form items
const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".main-btn");
const openBtn2 = document.querySelector(".nav-links-btn");
const closeBtn = document.querySelector(".close-btn");
const over = document.querySelector("body");

//Click events form
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  over.style.overflow = "hidden";
});

openBtn2.addEventListener("click", () => {
  modal.style.display = "block";
  over.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  over.style.overflow = "visible";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    over.style.overflow = "visible";
  }
});

//Form Validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

//Show error message
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation error";

  const errorMessage = formValidation.querySelector("p");
  errorMessage.textContent = message;
}

//Show valid message
function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation valid";
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  });
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showValid(input);
  }
}

//Check passwords match
function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

//Get fieldname
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([name, email, password, passwordConfirm]);
  checkLength(name, 3, 30);
  checkLength(password, 8, 25);
  checkLength(passwordConfirm, 8, 25);
  passwordMatch(password, passwordConfirm);
});

//  Close mobile menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
