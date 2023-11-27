const submitBtn = document.querySelector(".join-btn");
const signupForm = document.querySelector("#main-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const incorrectPassword = document.querySelector("#incorrect-pw");
const passwordMismatch = document.querySelector("#pw-mismatch");

submitBtn.addEventListener("click", () => {
  signupForm.className = "submitted";
  checkPassword;
});

password.addEventListener("blur", checkPassword);
password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("blur", comparePasswords);
confirmPassword.addEventListener("input", comparePasswords);

function checkPassword() {
  incorrectPassword.classList.add("hidden");

  if (!password.checkValidity()) {
    incorrectPassword.classList.remove("hidden");
  }
}

function comparePasswords() {
  if (password.value !== confirmPassword.value) {
    passwordMismatch.classList.remove("hidden");
  } else {
    passwordMismatch.classList.add("hidden");
  }
}
