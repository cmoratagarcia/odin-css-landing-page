const submitBtn = document.querySelector(".join-btn");
const signupForm = document.querySelector("#main-form");

submitBtn.addEventListener("click", () => {
  signupForm.className = "submitted";
});
