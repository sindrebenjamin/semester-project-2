import { getListings } from "../api/listings/getListings.js";

let offset = 0;
let sortString = `&sort=endsAt&sortOrder=asc`;
let tags = "";

const querySearch = new URLSearchParams(window.location.search).get("search");
querySearch && (tags = `&_tag=${querySearch}`);
let URL = `${sortString}&limit=100&offset=${offset}${tags}`;

getListings("#browse-listings", URL);

window.onscroll = () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    offset = offset + 100;
    getListings("#browse-listings", URL);
  }
};

const sortSelect = document.querySelector("#sort-select");
const sortMenu = document.querySelector("#sort-menu");
const sortEnding = document.querySelector("#sort-ending");
const sortNewest = document.querySelector("#sort-newest");
const current = document.querySelector("#sort-current");
const listingsContainer = document.querySelector("#browse-listings");
let currentText = "Ending soon";

sortSelect.onclick = () => {
  sortMenu.classList.toggle("hidden");
};

document.onclick = (event) => {
  const isClickInsideMenu = sortMenu.contains(event.target);
  const isClickInsideSelect = sortSelect.contains(event.target);
  if (!isClickInsideMenu && !isClickInsideSelect) {
    sortMenu.classList.add("hidden");
  }
};

const setNewest = () => {
  if (currentText === "Ending soon") {
    sortMenu.classList.add("hidden");
    currentText = "Newest";
    current.innerText = currentText;
    sortEnding.classList.remove("border-primary-200");
    sortEnding.classList.add("border-neutral-200");
    sortNewest.classList.remove("border-neutral-200");
    sortNewest.classList.add("border-primary-200");
    listingsContainer.innerHTML = "";
    sortString = `&sort=created&sortOrder=desc`;
    URL = `${sortString}&limit=100&offset=${offset}${tags}`;
    getListings("#browse-listings", URL);
  }
};

const setEnding = () => {
  if (currentText === "Newest") {
    sortMenu.classList.add("hidden");
    currentText = "Ending soon";
    current.innerText = currentText;
    sortNewest.classList.remove("border-primary-200");
    sortNewest.classList.add("border-neutral-200");
    sortEnding.classList.remove("border-neutral-200");
    sortEnding.classList.add("border-primary-200");
    listingsContainer.innerHTML = "";
    sortString = `&sort=endsAt&sortOrder=asc`;
    URL = `${sortString}&limit=100&offset=${offset}${tags}`;
    getListings("#browse-listings", URL);
  }
};

sortNewest.onclick = () => {
  setNewest();
};

sortEnding.onclick = () => {
  setEnding();
};

const queryOrder = new URLSearchParams(window.location.search).get("order");

if (queryOrder === "newest") {
  setNewest();
}
