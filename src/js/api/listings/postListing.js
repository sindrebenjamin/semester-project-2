import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";

export async function postListing(data, requestType, id) {
  // Button loader
  const submitBtn = document.querySelector("#submit");
  submitBtn.innerHTML = `
    <div class="spinner"></div>
  `;

  const editId = id ? "/" + id : "";
  const options = {
    method: requestType,
    headers: headers("application/json"),
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings${editId}`,
      options
    );
    const result = await response.json();

    checkErrors(result);

    if (response.ok) {
      window.location.href = `listing.html?id=${result.id}`;
    }
  } catch (e) {
    displayErrors(e.message);
  } finally {
    submitBtn.innerHTML =
      requestType === "POST"
        ? `
    Create Listing
  `
        : "Update Listing";
  }
}
