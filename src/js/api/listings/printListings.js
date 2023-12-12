import { Card } from "../../components/Card.js";

let child = 0;

export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    console.log(child);
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
