import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { load } from "../storage/load.js";

const profile = load("profile").name;

export async function deleteListing(id) {
  // Button loader
  const deleteBtn = document.querySelector("#yes-delete");
  deleteBtn.innerHTML = `
    <div class="spinner red"></div>
  `;
  const options = {
    method: "DELETE",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(`${apiURL}/auction/listings/${id}`, options);
    window.location.href = `profile.html?user=${profile}`;
    const result = await response.json();
    checkErrors(result);
  } catch (e) {
    //setTimeout(displayErrors(e.message), 2000);
  } finally {
    deleteBtn.innerHTML = `Yes`;
  }
}
