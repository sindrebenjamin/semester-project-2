import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { load } from "../storage/load.js";
import { save } from "../storage/save.js";
const profile = load("profile");

export async function putAvatar(avatar) {
  console.log(profile);

  const options = {
    method: "PUT",
    headers: headers("application/json"),
    body: JSON.stringify(avatar),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/profiles/${profile.name}/media`,
      options
    );
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      profile.avatar = result.avatar;
      save("profile", profile);
      //window.location.href = `profile.html?user=${profile.name}`;
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
