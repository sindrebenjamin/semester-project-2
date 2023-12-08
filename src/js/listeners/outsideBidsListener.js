import { updateBids } from "../api/updateBids.js";
import { getSingleListing } from "../api/listings/getSingleListing.js";
import { animateListing } from "../api/animateListing.js";
const id = new URLSearchParams(window.location.search).get("id");

const data = await getSingleListing(id);
let bidsLength = data.bids.length;

//getData();

async function lookForBids() {
  console.log("Looking...");

  const dataCheck = await getSingleListing(id);
  let checkedLength = dataCheck.bids.length;
  console.log(checkedLength);

  if (checkedLength > bidsLength) {
    console.log("new bid!");
    await updateBids();
    animateListing();
    bidsLength = checkedLength;
  }
}

let interval = setInterval(lookForBids, 5000);

export const updateBidsLength = (updatedLength) => {
  //clearInterval(interval);
  bidsLength = updatedLength;
};
