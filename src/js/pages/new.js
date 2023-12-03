import { inputImages } from "../listeners/forms/inputImages.js";

inputImages("Add up to 8 photos");

document.querySelector("#end-date").onfocus = () =>
  document.querySelector("#end-date").showPicker();
