import { Card } from "../../components/Card.js";

export const printListings = async (listings, contentHolder, titleArg) => {
  const title = document.createElement("h2");
  title.innerText = titleArg;
  title.classList.add(
    "mb-6",
    "md:mb-8",
    "font-bold",
    "text-2xl",
    "md:text-3xl"
  );
  const container = document.querySelector(contentHolder);
  titleArg && container.appendChild(title);

  for (const listing of listings) {
    const card = document.createElement("div");
    card.innerHTML = await Card(listing);
    container.appendChild(card);
  }
};
