import { getListings } from "../api/listings/getListings.js";

getListings("#ending-soon", "&sort=endsAt&sortOrder=asc&limit=4");
getListings("#latest", "&sort=created&sortOrder=desc&limit=4");
