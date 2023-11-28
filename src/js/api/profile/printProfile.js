import { getProfile } from "./getProfile.js";
import { Profile } from "../../components/Profile.js";
import { Bids } from "../../components/Bids.js";

export const printProfile = async (user) => {
  const profileResult = await getProfile(user);
  const listingsResult = await getProfile(
    user + "/listings?_seller=true&_bids=true"
  );
  const bidResults = await getProfile(user + "/bids?_listings=true");
  //console.log(listingsResult);
  console.log(bidResults);

  const topSection = Profile(profileResult);
  const bidSection = Bids(bidResults, 0, true);
  const moreBids = Bids(bidResults, 4, false);

  const viewMore = document.querySelector("#view-more");
  viewMore.innerText =
    bidResults.length > 4 ? `View more (${bidResults.length - 4})` : ``;

  // Print content
  document.querySelector("#profile").innerHTML = topSection;
  document.querySelector("#bids").innerHTML = bidSection;
  document.querySelector("#more-bids").innerHTML = moreBids;

  // Toggle more results
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewArrow = document.querySelector("#view-arrow");

  let open = false;
  viewMoreBtn.onclick = () => {
    open = !open;
    console.log(open);
    viewMore.innerText = !open
      ? `View more (${bidResults.length - 4})`
      : `Show less results`;
    viewArrow.classList.toggle(`rotate-180`);

    document.querySelector("#more-bids").classList.toggle("hidden");
  };
};
