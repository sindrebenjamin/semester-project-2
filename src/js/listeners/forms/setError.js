import { addRemove } from "../../utils/addRemove.js";

/**
 *
 * @param {boolean} test True or false value based on test
 * @param {*} input Input field from form
 * @param {*} hint Hint element associated with input
 * @param {*} label Label associated with input
 * @param {*} message Message to display inside hint element
 * @param {*} def Default message for hint element
 *
 * Changes style for input and displays message if value is invalid.
 */

export const setError = (test, input, hint, label, message, def) => {
  if (test) {
    def ? (hint.innerText = def) : (hint.innerText = "");
    addRemove(["text-secondary-200"], ["text-red"], hint);
    addRemove(
      ["border-secondary-50", "placeholder-shown:border-secondary-50"],
      ["border-red"],
      input
    );
    addRemove(["text-secondary-200"], ["text-red"], label);
  } else {
    hint.innerText = message;
    addRemove(["text-red"], ["text-secondary-200"], hint);
    addRemove(
      ["border-red"],
      ["border-secondary-50", "placeholder-shown:border-secondary-50"],
      input
    );
    addRemove(["text-red"], ["text-secondary-200"], label);
  }
};
