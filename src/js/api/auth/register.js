import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";
import { login } from "./login.js";

export async function register(userData) {
  const options = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${apiURL}/auction/auth/register`, options);
    const result = await response.json();
    console.log(result);

    checkErrors(result);
    if (response.ok) {
      const registeredData = {
        email: userData.email,
        password: userData.password,
      };
      login(registeredData);
    }
  } catch (e) {
    displayErrors(e.message);
  }
}

/*

const userData = {
    name: "sindrelinerereeerereo",
    email: "sindbert1@stud.noroff.nyyo",
    password: "1234568"
}

register(userData);

*/
