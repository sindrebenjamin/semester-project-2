import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { checkErrors } from "../checkErrors.js";
import { printListings } from "../../components/Card.js";
import { displayErrors } from "../displayErrors.js";

export async function getListings() {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings?_active=true&_seller=true&_bids=true`,
      options
    );
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      console.log(result);
      printListings(result);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}

getListings();
