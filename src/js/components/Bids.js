import { checkTitle } from "../utils/checkTitle.js";
import { dateToDays } from "../utils/dateToDays.js";

export const Bids = (bids) => {
  console.log(bids);

  const allBids = document.createElement("div");
  allBids.classList.add("text-sm");

  for (let i = 0; i < bids.length; i++) {
    // Title
    const listingTitle = document.createElement("p");
    listingTitle.innerText = checkTitle(bids[i].listing.title);
    listingTitle.classList.add("w-[140px]");

    // Days ago
    const daysAgo = document.createElement("p");
    daysAgo.innerText = dateToDays(bids[i].created, true) + ` ago`;
    daysAgo.classList.add("text-secondary-100");

    // Amount
    const amount = document.createElement("p");
    amount.innerText = "$" + bids[i].amount;
    amount.classList.add("font-bold");

    // Append
    const bidContainer = document.createElement("div");
    bidContainer.classList.add("flex", "justify-between");
    bidContainer.appendChild(listingTitle);
    bidContainer.appendChild(daysAgo);
    bidContainer.appendChild(amount);

    // Append top
    allBids.appendChild(bidContainer);
  }

  return allBids.outerHTML;
};
