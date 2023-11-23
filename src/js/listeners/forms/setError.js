/**
 *
 * @param {*} test
 * @param {*} input
 * @param {*} hint
 * @param {*} label
 * @param {*} message
 * Changes style for input and displays message if value is invalid.
 */

export const setError = (test, input, hint, label, message) => {
  if (test) {
    hint.innerText = "";
    hint.classList.add("text-secondary-200");
    hint.classList.remove("text-red");
    input.classList.add("border-secondary-50");
    input.classList.remove("border-red");
    label.classList.add("text-secondary-200");
    label.classList.remove("text-red");
  } else {
    hint.classList.remove("text-secondary-200");
    hint.classList.add("text-red");
    hint.innerText = message;
    input.classList.remove("border-secondary-50");
    input.classList.add("border-red");
    label.classList.remove("text-secondary-200");
    label.classList.add("text-red");
  }
};
