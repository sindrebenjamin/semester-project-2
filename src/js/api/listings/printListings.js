import { Card } from "../../components/Card.js";

let child = 0;

/**
 *
 * @param {number} number Set child variable to number passed as argument
 */
export const setPrintListingsChild = (number) => {
  child = number;
};

/**
 * Create cards from listing array and add them to the DOM element passed as contentHolder
 * @param {array} listings Array of listings
 * @param {string} contentHolder ID or classname for container listings will be added
 */
export const printListings = async (listings, contentHolder) => {
  const container = document.querySelector(contentHolder);

  for (const listing of listings) {
    const card = document.createElement("article");
    card.innerHTML = await Card(listing);

    if (contentHolder === "#listings" && child < 3) {
      // Profile page listings
      container.insertBefore(card, container.children[child]);
    } else if (child < 8) {
      // Browser page listings
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
