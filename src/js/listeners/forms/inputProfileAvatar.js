import { setError } from './setError.js';

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputAvatarListener = (def, callback) => {
  const input = document.querySelector('#avatar');
  const label = document.querySelector('#avatar-label');
  const hint = document.querySelector('#avatar-hint');

  input.oninput = async () => {
    const test = await checkUrl(input.value);
    setError(test, input, hint, label, 'Must be a valid image URL', def);
    callback(test, input);
  };
};

function checkUrl(url) {
  if (url === '') {
    return true;
  }
  return new Promise((resolve) => {
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
