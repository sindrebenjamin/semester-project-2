import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { updateBids } from "../updateBids.js";
import { updateBidsLength } from "../../listeners/outsideBidsListener.js";

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
      const bidItems = document.querySelectorAll(".bid-item");
      bidItems[0].classList.add("bg-primary-100");
      setTimeout(() => {
        bidItems[0].classList.remove("bg-primary-100");
      }, 1000);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
