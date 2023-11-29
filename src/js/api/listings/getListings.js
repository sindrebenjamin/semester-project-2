import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { printListings } from "./printListings.js";
import { checkErrors } from "../checkErrors.js";
import { displayErrors } from "../displayErrors.js";
const search = new URLSearchParams(window.location.search).get("search");

export async function getListings(contentHolder, queryString) {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings?_active=true&_bids=true${queryString}`,
      options
    );
    const result = await response.json();
    let endReached = false;

    checkErrors(result);
    if (response.ok) {
      printListings(result, contentHolder);
      if (search && result.length === 0) {
        document.querySelector(contentHolder).innerHTML = "No results";
      } else if (result.length === 0 && !endReached) {
        endReached = true;
        document.querySelector(contentHolder).innerHTML +=
          "You have reached the end";
      }
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
