import { getProfile } from "./getProfile.js";
import { Profile } from "../../components/Profile.js";
import { Bids } from "../../components/Bids.js";
import { printListings } from "../listings/printListings.js";
import { load } from "../storage/load.js";

export const printProfile = async (user) => {
  // Requests
  const profileResult = await getProfile(user);
  const listingsResult = await getProfile(
    user + "/listings?_seller=true&_bids=true"
  );
  const bidResults = await getProfile(user + "/bids?_listings=true");

  // Variables
  const profile = load("profile");
  const currentProfile = profile.name === user ? true : false;
  const noListings = currentProfile
    ? `<p>You don't have any listings yet. <a href="new.html" class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700">Create your first listing here</a></p>`
    : `<p>This user don't have any listings yet.</p>`;
  const noBids = currentProfile
    ? `<p>You haven't made any bids yet. <a href="browse.html" class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700">Browse listings here</a></p>`
    : `This user haven't made any bids yet.`;
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewArrow = document.querySelector("#view-arrow");

  // Components
  const topSection = Profile(profileResult);
  const bidSection =
    bidResults.length === 0 ? noBids : Bids(bidResults, 0, true, true);
  const moreBids = Bids(bidResults, 4, false, true);
  printListings(listingsResult, "#listings");

  // Conditional rendering
  if (listingsResult.length === 0) {
    const listings = document.querySelector("#listings");
    listings.innerHTML = noListings;
    listings.classList.remove("grid");
  }

  if (bidResults.length === 0) {
    const bids = document.querySelector("#bids-wrapper");
    bids.classList.remove("md:max-w-[360px]");
    bids.classList.add("md:max-w-[400px]");
  }

  // Print content
  const viewMore = document.querySelector("#view-more");
  viewMore.innerText = `View more (${bidResults.length - 4})`;
  if (bidResults.length > 4) {
    viewMoreBtn.classList.remove("hidden");
  }
  document.querySelector("#profile").innerHTML = topSection;
  document.querySelector("#bids").innerHTML =
    `<h2 class="mb-6 md:mb-8 font-bold text-2xl md:text-3xl">Bid History</h2>` +
    bidSection;
  document.querySelector("#more-bids").innerHTML = moreBids;
  document.querySelector("#listings-heading").innerText = currentProfile
    ? `Your Listings`
    : `Listings Offered by ${user}`;

  // Toggle more results
  let open = false;
  viewMoreBtn.onclick = () => {
    open = !open;
    viewMore.innerText = !open
      ? `View more (${bidResults.length - 4})`
      : `Show less`;
    viewArrow.classList.toggle(`rotate-180`);

    document.querySelector("#more-bids").classList.toggle("hidden");
  };
};
