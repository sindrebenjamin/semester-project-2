import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { login } from "./login.js";

export async function register(userData) {
  // Spinner
  const submitBtn = document.querySelector("#submit");
  submitBtn.innerHTML = `
   <div class="spinner"></div>
 `;
  const options = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${apiURL}/auction/auth/register`, options);
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      const registeredData = {
        email: userData.email,
        password: userData.password,
      };
      login(registeredData, true);
    }
  } catch (e) {
    displayErrors(e.message);
  } finally {
    submitBtn.innerHTML = `
    Create Account
  `;
  }
}
