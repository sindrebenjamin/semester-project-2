import { Card } from "../../components/Card.js";

export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  let child = 0;

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);

    if (child < 9) {
      container.insertBefore(card, container.children[child]);
    } else {
      container.append(card);
    }

    const loadItems = container.querySelectorAll(".loader-item");
    loadItems.length > 0 && loadItems[0].remove();

    child++;
  }
};
