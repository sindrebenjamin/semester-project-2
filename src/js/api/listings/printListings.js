import { Card } from "../../components/Card.js";

export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    container.appendChild(card);
  }
};
