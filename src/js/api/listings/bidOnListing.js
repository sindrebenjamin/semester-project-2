import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { load } from "../storage/load.js";

//const profile = load("profile").name;

export async function bidOnListing(data, id) {
  const options = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/listings/${id}/bids`,
      options
    );
    const result = await response.json();

    checkErrors(result);

    if (response.ok) {
      //window.location.href = `profile.html?user=${profile}`;
      console.log(result);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
