import { load } from "../api/storage/load.js";
import { checkAvatar } from "../utils/checkAvatar.js";
import { inputAvatarListener } from "./forms/inputProfileAvatar.js";
import { putAvatar } from "../api/profile/putAvatar.js";

const profile = load("profile");
const profileAvatar = checkAvatar(profile.media);
const currentAvatar = document.querySelector("#current-avatar");
const settingsForm = document.querySelector("#settings-form");

currentAvatar.src = profileAvatar;

let testResult = true;

inputAvatarListener("", testing);
function testing(test, input) {
  testResult = test;
  // Update avatar preview oninput
  if (test && input.value) {
    currentAvatar.src = input.value;
  } else if (input.value === "") {
    currentAvatar.src = "./public/noavatar.png";
  }
}

// PUT request

settingsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(testResult);
  const inputValue = document.querySelector("#avatar").value;
  const body = {
    avatar: inputValue,
  };
  testResult && putAvatar(body);
});
