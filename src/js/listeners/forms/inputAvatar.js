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

  input.onblur = async () => {
    const test = await checkUrl(input.value);
    setError(test, input, hint, label, "Must be a valid image URL", def);
  };
};

function checkUrl(url) {
  if (url === "") {
    return true;
  }
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(true);
    };

    img.onerror = function () {
      resolve(false);
    };

    img.src = url;
  });
}
