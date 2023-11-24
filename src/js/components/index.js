import { Header } from "./Header.js";

// Header

const headerElement = document.createElement("header");
headerElement.innerHTML = Header();
document.body.prepend(headerElement);

// Toggle NavMenu visibility

const headerProfile = document.querySelector("#header-profile");
headerProfile.onclick = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("hidden");
};
