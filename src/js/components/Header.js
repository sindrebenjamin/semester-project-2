import { Logo } from "./Logo.js";
import { Nav } from "./Nav.js";

Nav();

export const Header = () => {
  return `<div class="flex justify-between w-full">${Logo(
    "fill-primary-400"
  )} ${Nav()}</div>`;
};

/*

const headerProfile = document.querySelector("#header-profile");
headerProfile.onclick = () => {
  console.log("hei");
};


*/
