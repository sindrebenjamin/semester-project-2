import { setError } from "./setError.js";

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputAvatarListener = (def) => {
  const input = document.querySelector("#avatar");
  const label = document.querySelector("#avatar-label");
  const hint = document.querySelector("#avatar-hint");

  input.onkeyup = async () => {
    const test = await checkUrl(input.value);
    setError(test, input, hint, label, "Must be a valid image URL", def);
  };
};

function checkUrl(url) {
  const currentAvatar = document.querySelector("#current-avatar");
  if (url === "") {
    currentAvatar.src = "./public/noavatar.png";
    return true;
  }
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      currentAvatar.src = url;
      resolve(true);
    };

    img.onerror = function () {
      currentAvatar.src = "./public/noavatar.png";
      resolve(false);
    };

    img.src = url;
  });
}
