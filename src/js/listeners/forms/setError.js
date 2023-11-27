import { addRemove } from "../../utils/addRemove.js";

/**
 *
 * @param {*} test
 * @param {*} input
 * @param {*} hint
 * @param {*} label
 * @param {*} message
 * Changes style for input and displays message if value is invalid.
 */

export const setError = (test, input, hint, label, message, def) => {
  if (test) {
    def ? (hint.innerText = def) : (hint.innerText = "");
    hint.classList.add("text-secondary-200");
    hint.classList.remove("text-red");
    addRemove(
      ["border-secondary-50", "placeholder-shown:border-secondary-50"],
      ["border-red"],
      input
    );

    label.classList.add("text-secondary-200");
    label.classList.remove("text-red");
  } else {
    hint.innerText = message;
    addRemove(["text-red"], ["text-secondary-200"], hint);
    addRemove(
      ["border-red"],
      ["border-secondary-50", "placeholder-shown:border-secondary-50"],
      input
    );

    label.classList.remove("text-secondary-200");
    label.classList.add("text-red");
  }
};
