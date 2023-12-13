import { checkAvatar } from "../utils/checkAvatar.js";

export const ListedBy = async (data) => {
  const profile = document.createElement("a");
  profile.className = "flex items-center gap-2 transition-all hover:opacity-50";
  profile.href = `profile.html?user=${data.seller.name}`;

  const avatar = document.createElement("img");
  avatar.className = "rounded-full object-cover h-[40px] w-[40px]";
  avatar.src = await checkAvatar(data.seller.avatar);
  avatar.alt = "Profile avatar";

  const name = document.createElement("p");
  name.innerText = data.seller.name;

  profile.append(avatar, name);

  document.querySelector("#listed-by").innerHTML = profile.outerHTML;
};
