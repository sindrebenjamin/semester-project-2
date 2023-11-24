import { Header } from "./Header.js";
import { logout } from "../api/auth/logout.js";
import { addClasses } from "../utils/addClasses.js";

// Header

const headerElement = document.createElement("header");
addClasses(headerElement, ["bg-white", "py-3", "px-4"]);
headerElement.innerHTML = Header();
document.body.prepend(headerElement);

// Toggle NavMenu visibility

const headerProfile = document.querySelector("#header-profile");
headerProfile.onclick = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("hidden");
};

// Logout

const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.onclick = () => logout();
