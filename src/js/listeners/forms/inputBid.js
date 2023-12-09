import { setError } from "./setError.js";

export const inputBidListener = (highestBid) => {
  const input = document.querySelector("#bid-input");
  const label = document.querySelector("#bid-input-label");
  const hint = document.querySelector("#error-element");

  input.onkeyup = () => {
    const parsedNum = input.value.includes("$")
      ? parseInt(input.value.slice(1))
      : parseInt(input.value);

    const test = parsedNum > highestBid ? true : false;
    hint.innerText = test
      ? ""
      : "Amount must be higher than currently highest bid";
    setError(test, input, "", label, "", "");
  };
};
