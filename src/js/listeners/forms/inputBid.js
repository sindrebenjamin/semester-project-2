import { setError } from "./setError.js";

export const inputBidListener = (highestBid) => {
  const input = document.querySelector("#bid-input");
  const label = document.querySelector("#bid-input-label");
  const hint = document.querySelector("#bid-input-hint");

  input.onkeyup = () => {
    const parsedNum = input.value.includes("$")
      ? parseInt(input.value.slice(1))
      : parseInt(input.value);

    console.log(parsedNum);

    const test = parsedNum > highestBid ? true : false;
    setError(
      test,
      input,
      hint,
      label,
      "Amount must be higher than currently highest bid",
      ""
    );
  };
};
