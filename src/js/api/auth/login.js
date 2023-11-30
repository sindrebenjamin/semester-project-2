import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { save } from "../storage/save.js";
import { checkErrors } from "../checkErrors.js";
const profile = new URLSearchParams(window.location.search).get("user");

export async function login(userData) {
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
      !profile
        ? (window.location.href = "index.html")
        : (window.location.href = `profile.html?user=${profile}`);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
