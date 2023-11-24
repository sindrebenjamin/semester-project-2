import { setError } from "./setError.js";

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputEmailListener = (def) => {
  let regex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
  const input = document.querySelector("#email");
  const label = document.querySelector("#email-label");
  const hint = document.querySelector("#email-hint");
  input.onblur = () => {
    const test = regex.test(input.value);
    setError(
      test,
      input,
      hint,
      label,
      "Email must end with @stud.noroff.no",
      def
    );
  };
};
