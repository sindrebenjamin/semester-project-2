import { checkMedia } from "../utils/checkMedia.js";
import { dateToDays } from "../utils/dateToDays.js";
import { currentBid } from "../utils/currentBid.js";
import { checkTitle } from "../utils/checkTitle.js";

export const Card = async (listing) => {
  const media = await checkMedia(listing.media[0]);
  const daysLeft = dateToDays(listing.endsAt);
  const bid = currentBid(listing.bids);
  const title = checkTitle(listing.title);

  return `<a class="hover:opacity-50 transition-all flex flex-col gap-4" href="listing.html?id=${listing.id}">
    <div class="h-40">
      <img
        class="object-cover w-full h-full"
        src="${media}"
        alt=""
      />
    </div>

    <h3 class="text-secondary-800 text-xl font-bold">${title}</h3>
    <div>
      <p>Current bid</p>
      <p class="font-bold">$${bid}</p>
    </div>
    <p class="text-secondary-100">${daysLeft}</p>
  </a>`;
};

export const printListings = async (listings) => {
  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    document.querySelector(".cards").appendChild(card);
  }
};
