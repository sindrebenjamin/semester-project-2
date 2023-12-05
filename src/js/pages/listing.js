import { getSingleListing } from "../api/listings/getSingleListing.js";
const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const data = await getSingleListing(id);
  console.log(data);
}

getData();

const images = document.querySelectorAll(".carousel-img");

let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    next();
  } else if (e.key === "ArrowLeft") {
    prev();
  }
});
