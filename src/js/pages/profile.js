import { printProfile } from "../api/profile/printProfile.js";
import { load } from "../api/storage/load.js";

const user = new URLSearchParams(window.location.search).get("user");
const token = load("token");

token
  ? printProfile(user)
  : (document.querySelector(
      "main"
    ).innerHTML = `<div class="h-screen flex justify-center items-center"><p>You have to be logged in to view this profile. <a
    class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
    href="login.html?user=${user}"
    >Log in</a
  > or <a
  class="text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
  href="register.html?user=${user}"
  >create a user</a
> </p></div>`);
