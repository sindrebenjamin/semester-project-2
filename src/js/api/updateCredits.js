import { load } from "./storage/load.js";
import { save } from "./storage/save.js";

/**
 * Update credits owned by profile when placing bids
 * @param {number} amount
 */
export const updateCredits = (amount) => {
  const profile = load("profile");

  // Update credits in local storage
  profile.credits = profile.credits - amount;
  save("profile", profile);

  // Fake update
  document.querySelector("#my-balance").innerText = "$" + profile.credits;
};
