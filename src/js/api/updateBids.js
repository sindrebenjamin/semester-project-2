import { getSingleListing } from "./listings/getSingleListing.js";
import { Bids } from "../components/Bids.js";
import { inputBidListener } from "../listeners/forms/inputBid.js";
import { HighestBidEndsIn } from "../components/HighestBidEndsIn.js";
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
  const topSection = HighestBidEndsIn(data, highestBid);
  document.querySelector(".important-info").innerHTML = topSection;

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

  // Show view more if 5 or more bids
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewMore = document.querySelector("#view-more");
  const viewArrow = document.querySelector("#view-arrow");
  const moreBidsIsVisible = moreBidsContainer.classList.contains("hidden")
    ? false
    : true;

  viewMore.innerText = !moreBidsIsVisible
    ? `View more (${data.bids.length - 4})`
    : `Show less`;
  if (data.bids.length > 4) {
    viewMoreBtn.classList.remove("hidden");
  }

  // Toggle more results
  let open = moreBidsIsVisible ? true : false;
  viewMoreBtn.onclick = () => {
    open = !open;
    viewMore.innerText = !open
      ? `View more (${data.bids.length - 4})`
      : `Show less`;
    viewArrow.classList.toggle(`rotate-180`);

    document.querySelector("#more-bids").classList.toggle("hidden");
  };

  const returnData = {
    length: data.bids.length,
    highest: highestBid,
  };

  return data.bids.length;
};
