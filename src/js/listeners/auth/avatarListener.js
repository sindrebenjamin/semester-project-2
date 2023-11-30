import { load } from "../../api/storage/load.js";
import { checkAvatar } from "../../utils/checkAvatar.js";
import { inputAvatarListener } from "../forms/inputProfileAvatar.js";

const profile = load("profile");
const profileAvatar = checkAvatar(profile.media);
const currentAvatar = document.querySelector("#current-avatar");

currentAvatar.src = profileAvatar;

inputAvatarListener("", testing);
function testing(test, input) {
  if (test && input.value) {
    currentAvatar.src = input.value;
  } else if (input.value === "") {
    currentAvatar.src = "./public/noavatar.png";
  }
}
