import { setError } from "./setError.js";

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputNameListener = (def) => {
  const input = document.querySelector("#username");
  const label = document.querySelector("#username-label");
  const hint = document.querySelector("#username-hint");

  input.onblur = () => {
    const test = input.value.length <= 20 ? true : false;
    setError(
      test,
      input,
      hint,
      label,
      "Name can't be longer than 20 characters",
      def
    );
  };
};
