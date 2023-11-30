import { checkAvatar } from "../utils/checkAvatar.js";
import { load } from "../api/storage/load.js";

export const Profile = (user) => {
  // Avatar
  const avatar = document.createElement("img");
  avatar.id = "avatar-img";
  avatar.src = checkAvatar(user.avatar);
  avatar.classList.add(
    "rounded-full",
    "object-cover",
    "h-[160px]",
    "w-[160px]"
  );

  // Name
  const titleName = document.createElement("h1");
  titleName.innerText = user.name;
  titleName.classList.add(
    "font-bold",
    "text-3xl",
    "md:text-4xl",
    "text-secondary-800"
  );

  // Email
  const email = document.createElement("p");
  email.innerText = user.email;
  email.classList.add("text-secondary-200", "text-sm");

  // Change avatar
  const localProfile = load("profile");
  const changeAvatar =
    localProfile.name === user.name
      ? `<a id="change-avatar" class="cursor-pointer text-primary-300 hover:opacity-50 transition-all underline focus:outline-none focus:ring focus:ring-primary-700">Change avatar</a>`
      : "";

  // Return component
  return `
  <div class="flex flex-col items-center gap-3">
  ${avatar.outerHTML}

  <div class="flex flex-col items-center">
  ${titleName.outerHTML}
  ${email.outerHTML}
  </div>

  ${changeAvatar}
  </div>
  `;
};
