import { checkAvatar } from "../utils/checkAvatar.js";
import { load } from "../api/storage/load.js";

export const Profile = (user) => {
  // Change avatar
  const localProfile = load("profile");

  const changeAvatar =
    localProfile.name === user.name
      ? `<button aria-label="change avatar" id="change-avatar" class="active:scale-90  hover:bg-secondary-400 absolute bottom-0 right-0 cursor-pointer border-white border-2 bg-secondary-700 rounded-full w-[44px] h-[44px] flex justify-center items-center transition-all underline focus:outline-none focus:ring focus:ring-primary-700"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9875 2.01208L21.9875 5.01208L19.7005 7.30008L16.7005 4.30008L18.9875 2.01208ZM7.99951 16.0001H10.9995L18.2865 8.71308L15.2865 5.71308L7.99951 13.0001V16.0001Z" fill="white"/>
      <path d="M19 19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.896 3 5V19C3 20.104 3.897 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10.332L19 12.332V19Z" fill="white"/>
      </svg>
      </a>`
      : "";

  // Avatar
  const avatar = document.createElement("img");
  avatar.id = localProfile.name === user.name ? "avatar-img" : "";
  avatar.alt = "Profile avatar";
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

  // Name & email for settings
  document.querySelector("#settings-name").innerText = user.name;
  document.querySelector("#settings-email").innerText = user.email;

  // Return component
  return `
  <div class="flex flex-col items-center gap-3">
  <div class="relative">
  ${avatar.outerHTML}
  ${changeAvatar}
  </div>
  <div class="flex flex-col items-center">
  ${titleName.outerHTML}
  ${email.outerHTML}
  </div>

  </div>
  `;
};
