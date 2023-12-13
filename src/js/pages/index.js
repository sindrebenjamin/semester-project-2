import { getListings } from "../api/listings/getListings.js";
import { setPrintListingsChild } from "../api/listings/printListings.js";

async function indexListings() {
  await getListings("#ending-soon", "&sort=endsAt&sortOrder=asc&limit=4");
  setPrintListingsChild(0); // Reset child variable
  await getListings("#newest", "&sort=created&sortOrder=desc&limit=4");
}
indexListings();
