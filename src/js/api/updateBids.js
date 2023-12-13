import { getSingleListing } from "./listings/getSingleListing.js";
import { Bids } from "../components/Bids.js";
import { inputBidListener } from "../listeners/forms/inputBid.js";
import { HighestBidEndsIn } from "../components/HighestBidEndsIn.js";
import { viewMore } from "../functions/ViewMore.js";
const id = new URLSearchParams(window.location.search).get("id");

/**
 * Update everything related to bids and bid history
 * @returns Length of bid array after its updated
 */
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

  // Update reference point for place bid form
  inputBidListener(highestBid);

  // Topsection
  HighestBidEndsIn(data, highestBid);

  // Bid history
  const reversedBids = sortedBids.reverse();

  const bids =
    data.bids.length > 0
      ? Bids(reversedBids, 0, true, false)
      : "This listing has no bids yet.";
  document.querySelector("#bids").innerHTML = bids;
  const moreBids = Bids(reversedBids, 4, false, false);
  const moreBidsContainer = document.querySelector("#more-bids");
  moreBidsContainer.innerHTML = moreBids;

  viewMore(data.bids);

  return data.bids.length;
};
