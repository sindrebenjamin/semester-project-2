export function displayErrors(errorMessage) {
  const errorElements = document.querySelectorAll(".error-element");
  const errors = errorMessage.split("^ ");

  errorElements.forEach((errorElement) => {
    errorElement.innerText = "";
    if (errors.length < 2) {
      errorElement.innerText = errorMessage;
    } else {
      const ul = document.createElement("ul");
      errors.forEach((error) => {
        const li = document.createElement("li");
        li.innerText = "• " + error;
        ul.appendChild(li);
      });
      errorElement.appendChild(ul);
    }
  });
}
