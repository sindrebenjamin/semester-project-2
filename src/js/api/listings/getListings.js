import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { printListings } from "./printListings.js";
import { checkErrors } from "../checkErrors.js";
import { displayErrors } from "../displayErrors.js";
const search = new URLSearchParams(window.location.search).get("search");
let endReached = false;

export async function getListings(contentHolder, queryString) {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings?_seller=true&_active=true&_bids=true${queryString}`,
      options
    );
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      await printListings(result, contentHolder);

      // Check if "bottom" is reached
      if (result.length === 0 && !endReached) {
        endReached = true;
        document.querySelector(
          contentHolder
        ).innerHTML += `<div class="text-center mt-[80px] text-xl col-span-4">You have reached the end</div>`;
      }

      // Search returned no result
      if (search && result.length === 0) {
        return true;
      }
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
