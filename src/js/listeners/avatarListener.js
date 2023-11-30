import { load } from "../api/storage/load.js";
import { checkAvatar } from "../utils/checkAvatar.js";
import { inputAvatarListener } from "./forms/inputProfileAvatar.js";
import { putAvatar } from "../api/profile/putAvatar.js";

const profile = load("profile");
const profileAvatar = checkAvatar(profile.avatar);
const currentAvatar = document.querySelector("#current-avatar");
const settingsForm = document.querySelector("#settings-form");
const inputField = document.querySelector("#avatar");
const removeBtn = document.querySelector("#remove-btn");

currentAvatar.src = profileAvatar;
profile.avatar && (inputField.value = profileAvatar);

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
  const body = {
    avatar: inputField.value,
  };
  testResult && putAvatar(body);
});

removeBtn.onclick = (e) => {
  e.preventDefault();
  inputField.value = "";
  currentAvatar.src = "./public/noavatar.png";
};
