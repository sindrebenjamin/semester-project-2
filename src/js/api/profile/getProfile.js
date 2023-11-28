import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { checkErrors } from "../checkErrors.js";
import { displayErrors } from "../displayErrors.js";

export async function getProfile(string) {
  const options = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(
      `${apiURL}/auction/profiles/${string}`,
      options
    );
    const result = await response.json();

    checkErrors(result);
    if (response.ok) {
      return result;
    }
  } catch (e) {
    displayErrors(e.message);
  }
}
