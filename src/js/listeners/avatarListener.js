import { load } from "../api/storage/load.js";
import { checkAvatar } from "../utils/checkAvatar.js";
import { inputAvatarListener } from "./forms/inputProfileAvatar.js";
import { putAvatar } from "../api/profile/putAvatar.js";
import { setError } from "./forms/setError.js";

const profile = load("profile");

const profileAvatar = checkAvatar(profile.avatar);
const currentAvatar = document.querySelector("#current-avatar");
const settingsForm = document.querySelector("#settings-form");
const inputField = document.querySelector("#avatar");
const discardBtn = document.querySelector("#discard-btn");
const settingsWrapper = document.querySelector("#settings-wrapper");
const profileSection = document.querySelector("#profile");

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
  const body = {
    avatar: inputField.value,
  };
  testResult && putAvatar(body);
});

// Discard changes

discardBtn.onclick = (e) => {
  e.preventDefault();
  discard();
};

function discard() {
  inputField.value = profile.avatar ? profileAvatar : "";
  currentAvatar.src = profileAvatar;
  settingsWrapper.classList.add("hidden");
  profileSection.classList.remove("hidden");
}

currentAvatar.onclick = () => {
  inputField.focus();
};

// Settings visibility

const label = document.querySelector("#avatar-label");
const hint = document.querySelector("#avatar-hint");

document.addEventListener("click", (e) => {
  if (
    e.target === "change-avatar" ||
    e.target.closest("#change-avatar") ||
    e.target === "avatar-img" ||
    e.target.closest("#avatar-img")
  ) {
    testResult = true;
    setError(testResult, inputField, hint, label);
    settingsWrapper.classList.remove("hidden");
    profileSection.classList.add("hidden");
    inputField.focus();
  }

  if (
    !(
      e.target === "change-avatar" ||
      e.target.closest("#change-avatar") ||
      e.target === "avatar-img" ||
      e.target.closest("#avatar-img") ||
      settingsWrapper.contains(e.target)
    )
  ) {
    discard();
  }
});
