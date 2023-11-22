import { headers } from "../headers.js";
import { apiURL } from "../constants.js";
import { displayErrors } from "../displayErrors.js";
import { checkErrors } from "../checkErrors.js";

export async function register(userData) {
    const options = {
        method: "POST",
        headers: headers("application/json"),
        body: JSON.stringify(userData),
    };
    
    try {
        const response = await fetch(`${apiURL}/auction/auth/register`, options)
        const result = await response.json();
        console.log(result);
        
      checkErrors(result);

    } catch(e) {
        console.log(e.message);
        displayErrors(e.message);
    }
}

const userData = {
    name: "sindrelinerereeerereo",
    email: "sindbert1@stud.noroff.nyyo",
    password: "1234568"
}

register(userData);