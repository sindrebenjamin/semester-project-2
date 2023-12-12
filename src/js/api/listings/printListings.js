import { Card } from "../../components/Card.js";

let child = 0;

export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);

    if (contentHolder === "#listings" && child < 3) {
      container.insertBefore(card, container.children[child]);
    } else if (child < 8) {
      container.insertBefore(card, container.children[child]);
    } else {
      container.append(card);
    }

    // Remove a loader every time a card has beed created
    const loadItems = container.querySelectorAll(".loader-item");
    loadItems.length > 0 && loadItems[0].remove();

    child++;
  }
};
