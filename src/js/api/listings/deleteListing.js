import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { load } from "../storage/load.js";

const profile = load("profile").name;

export async function deleteListing(id) {
  const options = {
    method: "DELETE",
    headers: headers("application/json"),
    // body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${apiURL}/auction/listings/${id}`, options);
    window.location.href = `profile.html?user=${profile}`;
    const result = await response.json();
    setTimeout(checkErrors(result), 2000);
  } catch (e) {
    displayErrors(e.message);
  }
}
