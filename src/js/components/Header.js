import { Logo } from "./Logo.js";
import { Nav } from "./Nav.js";

Nav();

export const Header = () => {
  return `<div class="m-auto max-w-[1200px] flex justify-between w-full">${Logo(
    "fill-primary-400"
  )} ${Nav()}</div>`;
};
