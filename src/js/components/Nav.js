import { load } from "../api/storage/load.js";
import { NavMenu } from "./NavMenu.js";

const profile = load("profile");

export const Nav = () => {
  if (profile) {
    return `<nav id="header-profile" class="relative w-[44px] h-[44px]">
    <img class="w-[44px] h-[44px] rounded-full object-cover" src="${
      profile.avatar
    }" alt="" />
    <svg
      class="absolute z-10 bottom-0 right-0 "
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#F6F6F6" />
      <path
        d="M4 5L6 7L8 5"
        stroke="#096745"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    ${NavMenu(profile.name, profile.credits)}
  </nav> `;
  } else {
    return `
    <div class="flex gap-2 items-center">
    <a
    class="text-primary-300 hover:text-primary-500 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
    href="register.html"
    >Sign up</a> 

    <p class="text-secondary-400">or</p>

    <a href="login.html" class="w-fit text-white text-sm font-bold bg-primary-400 py-2 px-6 hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-700 transition-all cursor-pointer">Login</a>

    </div>
    
    `;
  }
};
