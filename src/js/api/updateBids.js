import { getSingleListing } from "./listings/getSingleListing.js";
import { Bids } from "../components/Bids.js";
import { inputBidListener } from "../listeners/forms/inputBid.js";
const id = new URLSearchParams(window.location.search).get("id");

export const updateBids = async () => {
  // Fetch data
  const data = await getSingleListing(id);

  // Sort bids
  const sortedBids = data.bids.sort(function (a, b) {
    return a.amount - b.amount;
  });

  // Highest bid
  const highestBid =
    data.bids.length > 0 ? sortedBids[sortedBids.length - 1].amount : 0;
  const minimumBid = highestBid + 1;
  document.querySelector("#bid-input").value = "$" + minimumBid;

  inputBidListener(highestBid);

  // Bid history

  const bids = Bids(sortedBids.reverse(), 0, true, false);
  document.querySelector("#bids").innerHTML = bids;
  const moreBids = Bids(sortedBids.reverse(), 4, false, false);
  document.querySelector("#more-bids").innerHTML = moreBids;

  // Show view more if 5 or more bids
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewMore = document.querySelector("#view-more");

  viewMore.innerText = `View more (${data.bids.length - 4})`;
  if (data.bids.length > 4) {
    viewMoreBtn.classList.remove("hidden");
  }

  return data.bids.length;
};
