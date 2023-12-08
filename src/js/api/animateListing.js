export const animateListing = () => {
  const bidItems = document.querySelectorAll(".bid-item");

  // Fade in opacity
  bidItems[0].className =
    "opacity-0 grid transition-all bg-primary-100 duration-75 bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 p-2 rounded";

  // Add green background and duration
  setTimeout(() => {
    bidItems[0].className =
      "opacity-100 grid transition-all duration-1000 bg-primary-100 bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 p-2 rounded";
  }, 75);

  // Slowly remove green background
  setTimeout(() => {
    bidItems[0].classList.remove("bg-primary-100");
  }, 2000);

  // Remove duration when animation is over
  setTimeout(() => {
    bidItems[0].className =
      "grid transition-all bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 p-2 rounded";
  }, 3000);
};
