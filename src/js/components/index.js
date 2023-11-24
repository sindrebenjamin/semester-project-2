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
const navMenu = document.querySelector("#nav-menu");

headerProfile.onclick = () => {
  navMenu.classList.toggle("hidden");
  headerProfile.classList.toggle("opacity-50");
};

document.onclick = (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickInsideAvatar = headerProfile.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideAvatar) {
    navMenu.classList.add("hidden");
    headerProfile.classList.remove("opacity-50");
  }
};

// Logout

const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.onclick = () => logout();

// Toggle searchbar visibility

const searchForm = document.querySelector("#search-form");
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search");
const nav = document.querySelector("nav");

searchBtn.onclick = () => {
  nav.classList.add("hidden");
  searchForm.classList.remove("hidden");
  searchBtn.classList.add("hidden");
  searchBar.focus();
};

searchBar.onblur = () => {
  nav.classList.remove("hidden");
  searchForm.classList.add("hidden");
  searchBtn.classList.remove("hidden");
};
