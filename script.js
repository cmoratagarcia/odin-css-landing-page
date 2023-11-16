const submitBtn = document.querySelector(".join-btn");
const signupForm = document.querySelector("#main-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const incorrectPassword = document.querySelector("#incorrect-pw");
const passwordMismatch = document.querySelector("#pw-mismatch");

submitBtn.addEventListener("click", () => {
  signupForm.className = "submitted";
  password.addEventListener("invalid", () => {
    incorrectPassword.classList.remove("hidden");
  });
  confirmPassword.addEventListener("invalid", () => {
    incorrectPassword.classList.remove("hidden");
  });
  if (password.value !== confirmPassword.value) {
    passwordMismatch.classList.remove("hidden");
  } else {
    passwordMismatch.classList.add("hidden");
  }
});
