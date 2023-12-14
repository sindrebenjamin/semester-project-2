import { inputImages } from "../listeners/forms/inputImages.js";
import { inputDate } from "../listeners/forms/inputDate.js";
import { inputTags, loadTags } from "../listeners/forms/inputTags.js";
import { inputTitle } from "../listeners/forms/inputTitle.js";
import { captureTags } from "../listeners/forms/inputTags.js";
import { captureImages } from "../listeners/forms/inputImages.js";
import { dateToISO } from "../utils/dateToIso.js";
import { postListing } from "../api/listings/postListing.js";
import { setError } from "../listeners/forms/setError.js";
import { getSingleListing } from "../api/listings/getSingleListing.js";
import { formatDate } from "../utils/formatDate.js";
import { loadImages } from "../listeners/forms/inputImages.js";
import { descriptionInput } from "../listeners/forms/inputDescription.js";

inputImages("Add up to 8 photos");
inputDate();
inputTags("Press enter to add tag");
inputTitle();
descriptionInput();

const listingForm = document.querySelector("#listing-form");
const editId = new URLSearchParams(window.location.search).get("edit");

if (editId) {
  setEdit();
}

async function setEdit() {
  const listingData = await getSingleListing(editId);
  document.querySelector("h1").innerText = "Edit Listing";
  document.querySelector("#submit").innerText = "Update Listing";
  document.querySelector("#title").value = listingData.title;
  document.querySelector("#description").value = listingData.description;
  document.querySelector("#end-date").value = formatDate(listingData.endsAt);
  loadImages(listingData.media);
  loadTags(listingData.tags);
  editId && descriptionInput();
}

listingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dateTest = runTest("end-date", "Please choose an end date");
  const titleTest = runTest("title", "Title must be included");

  const body = {
    title: data.get("title"),
    description: data.get("description"),
    tags: captureTags(),
    media: captureImages(),
    endsAt: dateToISO(data.get("end-date")),
  };

  if (dateTest && titleTest) {
    postListing(body, editId ? "PUT" : "POST", editId);
  }
});

// Check if required information is missing
const runTest = (type, message) => {
  const input = document.querySelector(`#${type}`);
  const label = document.querySelector(`#${type}-label`);
  const hint = document.querySelector(`#${type}-hint`);
  const test = !input.value ? false : true;
  setError(test, input, hint, label, message);
  return test;
};
