export const disableBidForm = () => {
  const input = document.querySelector("#bid-input");
  const button = document.querySelector("#submit");
  input.disabled = true;
  button.disabled = true;
  button.className =
    "flex justify-center rounded w-full text-white text-sm font-bold bg-primary-400 p-4 focus:outline-none focus:ring focus:ring-primary-700 transition-all cursor-standard opacity-50";
};
