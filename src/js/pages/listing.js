import { getSingleListing } from "../api/listings/getSingleListing.js";
const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const data = await getSingleListing(id);
  console.log(data);
}

getData();
