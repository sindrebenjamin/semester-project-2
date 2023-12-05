import { load } from "../api/storage/load.js";
import { NavMenu } from "./NavMenu.js";
import { checkAvatar } from "../utils/checkAvatar.js";
const profilePage = new URLSearchParams(window.location.search).get("user");
const registerLink = !profilePage
  ? `register.html`
  : `register.html?user=${profilePage}`;
const loginLink = !profilePage
  ? `login.html`
  : `login.html?user=${profilePage}`;
const profile = load("profile");

export const Nav = () => {
  if (profile) {
    const avatar = checkAvatar(profile.avatar);
    return `<nav class="ml-4 md:ml-6 relative">
    <div class=" w-[44px] h-[44px] hover:opacity-50 transition-all cursor-pointer" id="header-profile">
    <img class="w-[44px] h-[44px] rounded-full object-cover" src="${avatar}" alt="" />
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
    </div>
    ${NavMenu(profile.name, profile.credits)}

  </nav> `;
  } else {
    return `
    <nav class="ml-4 md:ml-6 flex gap-2 items-center">
    <a
    class="whitespace-nowrap text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700"
    href="${registerLink}"
    >Sign up</a> 

    <p class="text-secondary-400">or</p>

    <a href="${loginLink}" class="rounded w-fit text-white text-sm font-bold bg-primary-400 py-2 px-6 hover:bg-primary-300 focus:outline-none focus:ring focus:ring-primary-700 transition-all cursor-pointer">Login</a>

    </nav>
    
    `;
  }
};
