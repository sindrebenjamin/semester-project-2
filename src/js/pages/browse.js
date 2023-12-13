import { getListings } from "../api/listings/getListings.js";
import { addRemove } from "../utils/addRemove.js";
import { CardLoaders } from "../components/CardLoaders.js";
import { setPrintListingsChild } from "../api/listings/printListings.js";

let offset = 0;
let sortString = `&sort=endsAt&sortOrder=asc`;
let tags = "";

// Check if searching or not
const querySearchPre = new URLSearchParams(window.location.search).get(
  "search"
);
const querySearch = querySearchPre && querySearchPre.toLowerCase();
querySearch && (tags = `&_tag=${querySearch}`);

// Set URL
const updateURL = () => `${sortString}&limit=25&offset=${offset}${tags}`;
let URL = updateURL();

// Initial fetch of listings
async function browseListings() {
  const noResults = await getListings("#browse-listings", URL);
  noResults &&
    (document.querySelector("#bottom-message").innerHTML = `<p>No results</p>`);

  // Remove remaining loaders
  document.querySelectorAll(".loader-item").forEach((loader) => {
    loader.remove();
  });
}
browseListings();

// Infinite scrolling
let fetching = false;
const bottomSpinner = document.querySelector("#bottom-spinner");
window.onscroll = async () => {
  if (
    fetching ||
    document
      .querySelector("body")
      .innerHTML.includes("You have reached the end")
  ) {
    return;
  }
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
    fetching = true;
    bottomSpinner.classList.remove("hidden");
    offset = offset + 25;
    URL = updateURL();

    try {
      await getListings("#browse-listings", URL);
    } catch (e) {
      console.log(e);
    } finally {
      fetching = false;
      bottomSpinner.classList.add("hidden");
    }
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
    listingsContainer.innerHTML = CardLoaders(8);
    setPrintListingsChild(0);
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
    listingsContainer.innerHTML = CardLoaders(8);
    setPrintListingsChild(0);
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

document.addEventListener("click", function (event) {
  if (!sortMenu.contains(event.target) && !sortSelect.contains(event.target)) {
    sortMenu.classList.add("hidden");
  }
});

// Change fetch endpoint based on what link user clicks on from homepage
const queryOrder = new URLSearchParams(window.location.search).get("order");
if (queryOrder === "newest") {
  setNewest();
}
