import { checkTitle } from "../utils/checkTitle.js";
import { dateToDays } from "../utils/dateToDays.js";

/**
 *
 * @param {*} bids Array containing bids
 * @param {*} int Index for loop
 * @param {*} loopBreak Set to true to break loop at 3
 * @param {*} profilePage Set to true if profilePage
 * @returns
 */

export const Bids = (bids, int, loopBreak, profilePage) => {
  const allBids = document.createElement("div");
  allBids.classList.add("text-xs", "flex", "flex-col");

  for (let i = int; i < bids.length; i++) {
    // Title
    const listingTitle = document.createElement("p");
    listingTitle.innerText = profilePage
      ? checkTitle(bids[i].listing.title)
      : bids[i].bidderName;
    listingTitle.classList.add("whitespace-nowrap", "col-span-2");

    // Days ago
    const daysAgo = document.createElement("p");
    daysAgo.innerText = dateToDays(bids[i].created, true) + ` ago`;
    daysAgo.classList.add("text-secondary-100", "text-right", "sm:text-left");

    // Amount
    const amount = document.createElement("p");
    amount.innerText = "$" + bids[i].amount;
    amount.classList.add("font-bold", "text-right");

    // Append
    const bidContainer = document.createElement("a");
    bidContainer.href = profilePage
      ? `listing.html?id=${bids[i].listing.id}`
      : `profile.html?user=${bids[i].bidderName}`;
    bidContainer.classList.add(
      "grid",
      "transition-all",
      "bid-item",
      "grid-cols-4",
      "sm:grid-cols-4",
      "hover:bg-neutral-100",
      "py-2"
    );
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
