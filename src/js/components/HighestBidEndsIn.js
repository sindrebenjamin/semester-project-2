import { timeTicker } from "../utils/timeTicker.js";

export const HighestBidEndsIn = (data, highestBid) => {
  timeTicker(data.endsAt);
  document.querySelector("#highest-bid").innerText = "$" + highestBid;
};
