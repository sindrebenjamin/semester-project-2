import { bidOnListing } from "../api/listings/bidOnListing.js";

const form = document.querySelector("#bid-form");
const input = document.querySelector("#bid-input");
const postId = new URLSearchParams(window.location.search).get("id");
const button = document.querySelector("#submit");

//button.onclick = () => {};

// Add $ symbol for flavor
input.onblur = () => {
  !input.value.includes("$") && (input.value = "$" + input.value);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create usable value from input
  const amt = parseInt(input.value.slice(1));

  const body = {
    amount: amt,
  };

  bidOnListing(body, postId);
});
