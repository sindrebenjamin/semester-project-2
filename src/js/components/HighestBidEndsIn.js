import { timeTicker } from "../utils/timeTicker.js";

export const HighestBidEndsIn = (data, highestBid) => {
  timeTicker(data.endsAt);

  document.querySelectorAll(".highest-bid").forEach((highest) => {
    highest.innerText = "$" + highestBid;
  });
};
