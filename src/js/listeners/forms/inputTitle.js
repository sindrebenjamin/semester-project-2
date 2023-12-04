import { setError } from "./setError.js";

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputTitle = (def) => {
  const input = document.querySelector("#title");
  const label = document.querySelector("#title-label");
  const hint = document.querySelector("#title-hint");

  input.onblur = () => {
    const test = !input.value ? false : true;
    setError(test, input, hint, label, "Title must be included", def);
  };
};
