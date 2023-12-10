import { Logo } from "./Logo.js";
import { Nav } from "./Nav.js";
import { Searchbar } from "./Searchbar.js";
import { Searchbutton } from "./Searchbutton.js";
import { logout } from "../api/auth/logout.js";

const Header = () => {
  return `<div class="m-auto max-w-[1200px] items-center flex justify-between w-full">
  <div class="mr-4 md:mr-6">${Logo("fill-primary-400")} 
  </div>
  ${Searchbar()} 
  <div class="flex sm:gap-8 items-center">
  ${Searchbutton()}
  ${Nav()}
  </div>
  </div>`;
};

export const setHeader = () => {
  const headerElement = document.createElement("header");
  headerElement.innerHTML = Header();
  headerElement.classList.add("bg-white", "py-3", "px-4", "md:px-6");

  document.body.prepend(headerElement);
  document.querySelector(".header-placeholder").classList.add("hidden");

  // Toggle NavMenu visibility

  const headerProfile = document.querySelector("#header-profile");
  const navMenu = document.querySelector("#nav-menu");

  if (headerProfile) {
    headerProfile.onclick = () => {
      navMenu.classList.toggle("hidden");
      headerProfile.classList.toggle("opacity-50");
    };

    document.addEventListener("DOMContentLoaded", function () {
      document.onclick = (event) => {
        if (
          !navMenu.contains(event.target) &&
          !headerProfile.contains(event.target)
        ) {
          navMenu.classList.add("hidden");
          headerProfile.classList.remove("opacity-50");
        }
      };
    });

    // Logout

    const logoutBtn = document.querySelector("#logout-btn");
    logoutBtn.onclick = () => logout();
  }

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
};
