import { updateBids } from "../api/updateBids.js";
import { getSingleListing } from "../api/listings/getSingleListing.js";
import { animateBid } from "../api/animateBid.js";
const id = new URLSearchParams(window.location.search).get("id");

const data = await getSingleListing(id);
let bidsLength = data.bids.length;

async function lookForBids() {
  const dataCheck = await getSingleListing(id);
  let checkedLength = dataCheck.bids.length;

  if (checkedLength > bidsLength) {
    await updateBids();
    animateBid();
    bidsLength = checkedLength;
  }
}

let interval = setInterval(lookForBids, 5000);

export const updateBidsLength = (updatedLength) => {
  bidsLength = updatedLength;
};

let forceUpdate = setInterval(updateBids, 60000);
