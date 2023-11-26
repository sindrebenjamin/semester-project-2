import { getListings } from "../api/listings/getListings.js";

let offset = 0;
let sortString = `&sort=endsAt&sortOrder=asc`;

getListings("#browse-listings", `${sortString}&limit=100`);

window.onscroll = () => {
  console.log(offset);
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    offset = offset + 100;

    getListings("#browse-listings", `${sortString}&limit=100&offset=${offset}`);
  }
};

//sortString = `&sort=created&sortOrder=desc`;

const sortSelect = document.querySelector("#sort-select");
const sortMenu = document.querySelector("#sort-menu");
const sortEnding = document.querySelector("#sort-ending");
const sortNewest = document.querySelector("#sort-newest");
const current = document.querySelector("#sort-current");
const listingsContainer = document.querySelector("#browse-listings");
let currentText = "Ending soon";

sortNewest.onclick = () => {
  if (currentText === "Ending soon") {
    currentText = "Newest";
    current.innerText = currentText;
    sortEnding.classList.remove("border-primary-200");
    sortEnding.classList.add("border-neutral-200");
    sortNewest.classList.remove("border-neutral-200");
    sortNewest.classList.add("border-primary-200");
    listingsContainer.innerHTML = "";
    getListings(
      "#browse-listings",
      `&sort=created&sortOrder=desc&limit=100&offset=${offset}`
    );
  }
};

sortEnding.onclick = () => {
  if (currentText === "Newest") {
    currentText = "Ending soon";
    current.innerText = currentText;
    sortNewest.classList.remove("border-primary-200");
    sortNewest.classList.add("border-neutral-200");
    sortEnding.classList.remove("border-neutral-200");
    sortEnding.classList.add("border-primary-200");
    listingsContainer.innerHTML = "";
    getListings(
      "#browse-listings",
      `&sort=created&sortOrder=desc&limit=100&offset=${offset}`
    );
  }
};
