import { checkMedia } from "../utils/checkMedia.js";

export const Card = (listing) => {
  const media = checkMedia(listing.media[0]);
  return `<a class="flex flex-col gap-4 w-[200px]" href="listing.html?id=${listing.id}">
    <div class="h-40">
      <img
        class="object-cover w-full h-full"
        src="${media}"
        alt=""
      />
    </div>

    <h3 class="text-secondary-800 text-xl font-bold">Playstation 5</h3>
    <div>
      <p>Current bid</p>
      <p class="font-bold">$334</p>
    </div>
    <p class="text-secondary-100">Ends in 2 days</p>
  </a>`;
};

export const printListings = (listings) => {
  listings.forEach((listing) => {
    const card = document.createElement("div");
    card.innerHTML = Card(listing);
    document.querySelector(".cards").appendChild(card);
  });
};
