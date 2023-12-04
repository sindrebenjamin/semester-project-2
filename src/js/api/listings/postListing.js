import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";

export async function postListing(data, requestType, id) {
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
      console.log(result);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
