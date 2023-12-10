import { getListings } from "../api/listings/getListings.js";

async function indexListings() {
  await getListings("#ending-soon", "&sort=endsAt&sortOrder=asc&limit=4");
  await getListings("#newest", "&sort=created&sortOrder=desc&limit=4");
  document.querySelector("#big-spinner").classList.add("hidden");
}
indexListings();
