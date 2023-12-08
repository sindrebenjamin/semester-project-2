import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { updateBids } from "../updateBids.js";
import { updateBidsLength } from "../../listeners/outsideBidsListener.js";
import { animateListing } from "../animateListing.js";

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
      const newLength = await updateBids();
      updateBidsLength(newLength);
      animateListing();
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
