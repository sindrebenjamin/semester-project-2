import { getListings } from "../api/listings/getListings.js";

let offset = 0;
let sortString = `&sort=endsAt&sortOrder=asc`;

getListings("#browse-listings", `${sortString}&limit=100`);

window.onscroll = () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    offset = offset + 100;
    getListings("#browse-listings", `${sortString}&limit=100&offset=${offset}`);
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
  console.log("hei");
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
    getListings("#browse-listings", `${sortString}&limit=100`);
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
    getListings("#browse-listings", `${sortString}&limit=100`);
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
