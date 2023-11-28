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
  const bidSection = Bids(bidResults);

  const viewMore = bidResults.length > 4 ? document.createElement("p") : ``;
  viewMore.innerText = `View more (${bidResults.length - 4})`;
  viewMore.id = "view-more";

  const profileContainer = document.querySelector("#profile");
  profileContainer.innerHTML = `${topSection} ${bidSection} ${viewMore.outerHTML}`;

  document.querySelector("#view-more").onclick = () => {
    let open = false;
    open = !open;
    console.log(open);
    viewMore.innerText = open ? "Hide results" : "View more";
    profileContainer.innerHTML = `${topSection} ${bidSection}`;
  };
};
