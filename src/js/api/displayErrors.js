export function displayErrors(errorMessage) {
  const errorElement = document.querySelector(".error-element");
  const errors = errorMessage.split("^ ");
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
}
