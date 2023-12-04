import { inputImages } from "../listeners/forms/inputImages.js";
import { inputDate } from "../listeners/forms/inputDate.js";
import { inputTags } from "../listeners/forms/inputTags.js";
import { captureTags } from "../listeners/forms/inputTags.js";
import { captureImages } from "../listeners/forms/inputImages.js";
import { dateToISO } from "../utils/dateToIso.js";
import { postListing } from "../api/listings/postListing.js";

inputImages("Add up to 8 photos");
inputDate();
inputTags("Press enter to add tag");

const listingForm = document.querySelector("#listing-form");

listingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = {
    title: data.get("title"),
    description: data.get("description"),
    tags: captureTags(),
    media: captureImages(),
    endsAt: dateToISO(data.get("end-date")),
  };

  postListing(body, "POST");
});
