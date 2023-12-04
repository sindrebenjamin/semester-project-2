import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { checkErrors } from "../checkErrors.js";
import { displayErrors } from "../displayErrors.js";

export async function getSingleListing(id) {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings/${id}?_seller=true&_active=true&_bids=true`,
      options
    );
    const result = await response.json();

    checkErrors(result);

    if (response.ok) {
      return result;
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
