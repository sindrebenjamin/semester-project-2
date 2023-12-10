import { getListings } from "../api/listings/getListings.js";
import { CardLoader } from "../components/CardLoader.js";

/*
document.querySelector(
  "#ending-soon"
).innerHTML = `${CardLoader()} ${CardLoader()} ${CardLoader()} ${CardLoader()}`;

document.querySelector(
  "#newest"
).innerHTML = `${CardLoader()} ${CardLoader()} ${CardLoader()} ${CardLoader()}`;

*/

getListings("#ending-soon", "&sort=endsAt&sortOrder=asc&limit=4");
getListings("#newest", "&sort=created&sortOrder=desc&limit=4");
