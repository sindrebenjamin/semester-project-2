import { getListings } from "../api/listings/getListings.js";
import { addRemove } from "../utils/addRemove.js";

let offset = 0;
let sortString = `&sort=endsAt&sortOrder=asc`;
let tags = "";

// Check if searching or not

const querySearch = new URLSearchParams(window.location.search).get("search");
querySearch && (tags = `&_tag=${querySearch}`);

// Set URL

const updateURL = () => `${sortString}&limit=100&offset=${offset}${tags}`;
let URL = updateURL();

// Fetch listings

getListings("#browse-listings", URL);

// Infinite scrolling

window.onscroll = () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    offset = offset + 100;
    URL = updateURL();
    getListings("#browse-listings", URL);
  }
};

// Set styling and handle logic for sorting

const sortSelect = document.querySelector("#sort-select");
const sortMenu = document.querySelector("#sort-menu");
const sortEnding = document.querySelector("#sort-ending");
const sortNewest = document.querySelector("#sort-newest");
const current = document.querySelector("#sort-current");
const listingsContainer = document.querySelector("#browse-listings");
let currentText = "Ending soon";

const setNewest = () => {
  if (currentText === "Ending soon") {
    sortMenu.classList.add("hidden");
    currentText = "Newest";
    current.innerText = currentText;
    addRemove(["border-neutral-200"], ["border-primary-200"], sortEnding);
    addRemove(["border-primary-200"], ["border-neutral-200"], sortNewest);
    listingsContainer.innerHTML = "";
    sortString = `&sort=created&sortOrder=desc`;
    URL = updateURL();
    getListings("#browse-listings", URL);
  }
};

const setEnding = () => {
  if (currentText === "Newest") {
    sortMenu.classList.add("hidden");
    currentText = "Ending soon";
    current.innerText = currentText;
    addRemove(["border-neutral-200"], ["border-primary-200"], sortNewest);
    addRemove(["border-primary-200"], ["border-neutral-200"], sortEnding);
    listingsContainer.innerHTML = "";
    sortString = `&sort=endsAt&sortOrder=asc`;
    URL = updateURL();
    getListings("#browse-listings", URL);
  }
};

sortNewest.onclick = () => {
  setNewest();
};

sortEnding.onclick = () => {
  setEnding();
};

// Toggles visibility for sortmenu

sortSelect.onclick = () => {
  sortMenu.classList.toggle("hidden");
};

document.onclick = (event) => {
  if (!sortMenu.contains(event.target) && !sortSelect.contains(event.target)) {
    sortMenu.classList.add("hidden");
  }
};

// Change fetch endpoint based on what link user clicks on from homepage

const queryOrder = new URLSearchParams(window.location.search).get("order");
if (queryOrder === "newest") {
  setNewest();
}
