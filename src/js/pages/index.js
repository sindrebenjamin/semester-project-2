import { getListings } from "../api/listings/getListings.js";

getListings("#popular", true, "&sort=endsAt&sortOrder=asc&limit=100");
getListings("#ending-soon", false, "&sort=endsAt&sortOrder=asc&limit=4");
