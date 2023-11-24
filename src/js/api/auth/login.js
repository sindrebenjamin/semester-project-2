import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { save } from "../storage/save.js";
import { checkErrors } from "../checkErrors.js";

export async function login(userData) {
  const options = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${apiURL}/auction/auth/login`, options);
    const result = await response.json();
    console.log(result);

    checkErrors(result);
    if (response.ok) {
      save("token", result.accessToken);
      delete result.accessToken;
      save("profile", result);
      return result;
    }
  } catch (e) {
    displayErrors(e.message);
  }
}

/*

const userData = {
    email: "sindbert@stud.noroff.no",
    password: "1234568"
}

login(userData);


*/
