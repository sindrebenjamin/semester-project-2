import { setError } from "./setError.js";

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputPasswordListener = (def) => {
  const input = document.querySelector("#password");
  const label = document.querySelector("#password-label");
  const hint = document.querySelector("#password-hint");

  input.onblur = () => {
    const test = input.value.length >= 8 ? true : false;
    setError(
      test,
      input,
      hint,
      label,
      "Password must be at least 8 characters",
      def
    );
  };
};
