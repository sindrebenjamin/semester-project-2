import { Card } from "../../components/Card.js";

export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  let child = 0;

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);

    container.insertBefore(card, container.children[child]);

    const loadItems = container.querySelectorAll(".loader-item");
    loadItems.length > 0 && loadItems[0].remove();

    child++;
  }
};
