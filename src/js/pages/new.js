import { inputImages } from "../listeners/forms/inputImages.js";
import { inputDate } from "../listeners/forms/inputDate.js";
import { inputTags } from "../listeners/forms/inputTags.js";
import { inputTitle } from "../listeners/forms/inputTitle.js";
import { captureTags } from "../listeners/forms/inputTags.js";
import { captureImages } from "../listeners/forms/inputImages.js";
import { dateToISO } from "../utils/dateToIso.js";
import { postListing } from "../api/listings/postListing.js";
import { setError } from "../listeners/forms/setError.js";

inputImages("Add up to 8 photos");
inputDate();
inputTags("Press enter to add tag");
inputTitle();

const listingForm = document.querySelector("#listing-form");

listingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dateTest = testDate();
  const titleTest = testTitle();

  const body = {
    title: data.get("title"),
    description: data.get("description"),
    tags: captureTags(),
    media: captureImages(),
    endsAt: dateToISO(data.get("end-date")),
  };

  if (dateTest && titleTest) {
    postListing(body, "POST");
  }
});

// Check if required information is missing
const testDate = () => {
  const input = document.querySelector("#end-date");
  const label = document.querySelector("#end-date-label");
  const hint = document.querySelector("#end-date-hint");
  const test = !input.value ? false : true;
  setError(test, input, hint, label, "Please choose an end date");
  return test;
};

const testTitle = () => {
  const input = document.querySelector("#title");
  const label = document.querySelector("#title-label");
  const hint = document.querySelector("#title-hint");
  const test = !input.value ? false : true;
  setError(test, input, hint, label, "Title must be included");
  return test;
};
