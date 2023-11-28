import { getProfile } from "./getProfile.js";
import { Profile } from "../../components/Profile.js";

export const printProfile = async (user) => {
  const profileResult = await getProfile(user);
  const listingsResult = await getProfile(
    user + "/listings?_seller=true&_bids=true"
  );
  const bidResults = await getProfile(user + "/bids?_listings=true");
  console.log(profileResult);
  //console.log(listingsResult);
  //console.log(bidResults);

  const topSection = Profile(profileResult);

  document.querySelector("#profile").innerHTML = `${topSection}`;
};