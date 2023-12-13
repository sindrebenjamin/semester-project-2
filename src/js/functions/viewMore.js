/**
 * Handle logic surrounding view more button and view more container
 * @param {array} bidResults Array of bids
 */
export const viewMore = (bidResults) => {
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewArrow = document.querySelector("#view-arrow");
  const viewMore = document.querySelector("#view-more");
  viewMore.innerText = `View more (${bidResults.length - 4})`;
  if (bidResults.length > 4) {
    viewMoreBtn.classList.remove("hidden");
  }

  // Toggle more results
  let open = false;
  viewMoreBtn.onclick = () => {
    open = !open;
    viewMore.innerText = !open
      ? `View more (${bidResults.length - 4})`
      : `Show less`;
    viewArrow.classList.toggle(`rotate-180`);
    document.querySelector("#more-bids").classList.toggle("hidden");
  };
};
