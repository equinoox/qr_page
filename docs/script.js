const VALID_ACTIVATION_CODE = "ZET-PREMIUM";

const form = document.getElementById("activation-form");
const codeInput = document.getElementById("activation-code");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const downloadButton = document.getElementById("download-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredCode = codeInput.value.trim();
  const isValid =
    enteredCode.toLowerCase() === VALID_ACTIVATION_CODE.toLowerCase();

  if (isValid) {
    errorMessage.hidden = true;
    successMessage.hidden = false;
    downloadButton.hidden = false;
    return;
  }

  errorMessage.hidden = false;
  successMessage.hidden = true;
  downloadButton.hidden = true;
});
