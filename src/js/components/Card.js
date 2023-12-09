import { checkMedia } from "../utils/checkMedia.js";
import { dateToDays } from "../utils/dateToDays.js";
import { currentBid } from "../utils/currentBid.js";
import { checkTitle } from "../utils/checkTitle.js";
import { load } from "../api/storage/load.js";

export const Card = async (listing) => {
  const profile = load("profile");
  const profileName = profile && load("profile").name;
  const currentUser = profileName === listing.seller.name ? true : false;

  const media = await checkMedia(listing.media[0]);
  const daysLeft = dateToDays(listing.endsAt);
  const bid = document.createElement("p");
  bid.innerText = currentBid(listing.bids);
  bid.classList.add("font-bold");

  const title = document.createElement("h3");
  title.innerText = checkTitle(listing.title, 19);
  title.classList.add("text-secondary-800", "text-xl", "font-bold");

  const edit = document.createElement("a");
  edit.className =
    "text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700";
  edit.href = `new.html?edit=${listing.id}`;
  edit.innerText = "Edit";

  !currentUser && edit.classList.add("hidden");

  return `<div class="flex flex-col gap-2"><a class="hover:opacity-50 transition-all flex flex-col gap-4" href="listing.html?id=${listing.id}">
  <img
    class="object-cover w-full h-full aspect-square rounded"
    src="${media}"
    alt=""
  />

${title.outerHTML}
<div>
  <p>Current bid</p>
  ${bid.outerHTML}
</div>
<p class="text-secondary-100">${daysLeft}</p>
</a>
${edit.outerHTML}
</div>`;
};
