// Select the form
const form = document.getElementById("contactForm");
// Select input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
// Select error message areas
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
// Select success message area
const successMessage = document.getElementById("successMessage");
// Validate name
function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    nameError.textContent = "Name is required.";
    return false;
  }
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    return false;
  }
  nameError.textContent = "";
  return true;
}
// Validate email
function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    return false;
  }
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  }
  emailError.textContent = "";
  return true;
}
// Validate message
function validateMessage() {
  const message = messageInput.value.trim();
  if (message === "") {
    messageError.textContent = "Message is required.";
    return false;
  }
  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    return false;
  }
  messageError.textContent = "";
  return true;
}
// Dynamic validation during typing
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);
// Prevent invalid form submission
form.addEventListener("submit", function (event) {
  // Stops the browser's default form submission
  event.preventDefault();
  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  // Check all validation results
  if (isNameValid && isEmailValid && isMessageValid) {
    successMessage.textContent = "Form submitted successfully!";
    // Clear the form after valid submission
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});