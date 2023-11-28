import { checkTitle } from "../utils/checkTitle.js";
import { dateToDays } from "../utils/dateToDays.js";

/**
 *
 * @param {*} bids Array containing bids
 * @param {*} int Index for loop
 * @param {*} loopBreak Set to true to break loop at 3
 * @returns
 */

export const Bids = (bids, int, loopBreak) => {
  const allBids = document.createElement("div");
  allBids.classList.add(
    "text-xs",
    "max-w-[370px]",
    "flex",
    "flex-col",
    "gap-3"
  );

  for (let i = int; i < bids.length; i++) {
    // Title
    const listingTitle = document.createElement("p");
    listingTitle.innerText = checkTitle(bids[i].listing.title);
    listingTitle.classList.add("whitespace-nowrap", "col-span-2");

    // Days ago
    const daysAgo = document.createElement("p");
    daysAgo.innerText = dateToDays(bids[i].created, true) + ` ago`;
    daysAgo.classList.add("text-secondary-100", "text-right");

    // Amount
    const amount = document.createElement("p");
    amount.innerText = "$" + bids[i].amount;
    amount.classList.add("font-bold", "text-right");

    // Append
    const bidContainer = document.createElement("div");
    bidContainer.classList.add("grid", "grid-cols-4");
    bidContainer.appendChild(listingTitle);
    bidContainer.appendChild(daysAgo);
    bidContainer.appendChild(amount);

    // Append top
    allBids.appendChild(bidContainer);

    if (loopBreak) {
      if (i === 3) {
        break;
      }
    }
  }

  return allBids.outerHTML;
};
