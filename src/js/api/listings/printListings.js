import { Card } from "../../components/Card.js";
import { sortByPopular } from "../../utils/sortByPopular.js";

export const printListings = async (listings, contentHolder, byPopular) => {
  let listingsArray = listings;
  byPopular && (listingsArray = sortByPopular(listings));
  console.log(listingsArray);

  for (const listing of listingsArray) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    document.querySelector(contentHolder).appendChild(card);
  }
};
