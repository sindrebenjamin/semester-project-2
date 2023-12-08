export const animateListing = () => {
  const bidItems = document.querySelectorAll(".bid-item");

  // Add green background and duration
  bidItems[0].className =
    "grid transition duration-1000 bg-primary-100 bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 py-2";

  // Slowly remove green background
  setTimeout(() => {
    bidItems[0].classList.remove("bg-primary-100");
  }, 2000);

  // Remove duration when animation is over
  setTimeout(() => {
    bidItems[0].className =
      "grid transition-all bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 py-2";
  }, 3000);
};
