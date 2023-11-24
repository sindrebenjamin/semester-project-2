import { Logo } from "./Logo.js";
import { Nav } from "./Nav.js";
import { Searchbar } from "./Searchbar.js";
import { Searchbutton } from "./Searchbutton.js";

export const Header = () => {
  return `<div class="m-auto max-w-[1200px] items-center flex justify-between w-full">
  <div class="mr-4">${Logo("fill-primary-400")} 
  </div>
  ${Searchbar()} 
  <div class="flex gap-8 items-center">
  ${Searchbutton()}
  ${Nav()}
  </div>
  </div>`;
};
