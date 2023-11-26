import { getListings } from "../api/listings/getListings.js";

getListings(
  "#browse-listings",
  false,
  "&sort=created&sortOrder=desc&limit=100"
);

let offset = 0;

window.onscroll = () => {
  console.log(offset);
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    offset = offset + 100;

    getListings(
      "#browse-listings",
      false,
      `&sort=created&sortOrder=desc&limit=100&offset=${offset}`
    );
  }
};
