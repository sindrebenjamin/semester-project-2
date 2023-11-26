import { Card } from "../../components/Card.js";

export const printListings = async (listings, contentHolder) => {
  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    document.querySelector(contentHolder).appendChild(card);
  }
};
