export const animateListing = () => {
  const bidItems = document.querySelectorAll(".bid-item");

  bidItems[0].className =
    "grid transition duration-1000 bg-primary-100 bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 py-2";

  setTimeout(() => {
    bidItems[0].classList.remove("bg-primary-100");
  }, 2000);

  setTimeout(() => {
    bidItems[0].className =
      "grid transition-all bid-item grid-cols-4 sm:grid-cols-4 hover:bg-neutral-100 py-2";
  }, 3000);
};

/*

const bidItems = document.querySelectorAll(".bid-item");
  bidItems[0].classList.remove("transition-all");
  bidItems[0].classList.add("duration-1000");
  bidItems[0].classList.add("transition");
  //bidItems[0].classList.add("bg-white");
  bidItems[0].classList.add("bg-primary-100");

  setTimeout(() => {
    bidItems[0].classList.remove("bg-primary-100");
    bidItems[0].classList.remove("duration-1000");
  }, 1000);


  */
