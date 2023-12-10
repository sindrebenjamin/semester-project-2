import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { save } from "../storage/save.js";
import { checkErrors } from "../checkErrors.js";
const profile = new URLSearchParams(window.location.search).get("user");
const listing = new URLSearchParams(window.location.search).get("listing");

export async function login(userData, fromRegistration) {
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
    const response = await fetch(`${apiURL}/auction/auth/login`, options);
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      save("token", result.accessToken);
      delete result.accessToken;
      save("profile", result);

      if (profile) {
        window.location.href = `profile.html?user=${profile}`;
      } else if (listing) {
        window.location.href = `listing.html?id=${listing}`;
      } else {
        window.location.href = `index.html`;
      }
    }
  } catch (e) {
    displayErrors(e.message);
  } finally {
    submitBtn.innerHTML = !fromRegistration
      ? `
    Login
  `
      : `Create Account`;
  }
}
