import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { printListings } from "./printListings.js";
import { checkErrors } from "../checkErrors.js";
import { displayErrors } from "../displayErrors.js";

export async function getListings(contentHolder, sortByPopular) {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings?_active=true&_bids=true&sort=endsAt&sortOrder=asc&limit=10`,
      options
    );
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      console.log(result);
      printListings(result, contentHolder, sortByPopular);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}

getListings("#ending-soon", true);

// `${apiURL}/auction/listings?_active=true&_bids=true&sort=endsAt&sortOrder=asc`
