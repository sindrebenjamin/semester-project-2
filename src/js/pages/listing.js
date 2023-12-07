import { getSingleListing } from "../api/listings/getSingleListing.js";
import { MobileSlider } from "../components/MobileSlider.js";
import { DesktopSlider } from "../components/DesktopSlider.js";
const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const data = await getSingleListing(id);
  document.querySelector("title").innerText = `Bidnet | ${data.title}`;

  MobileSlider(data);
  DesktopSlider(data);
}

getData();

/*


// Slider
const slides = document.querySelectorAll(".slide");

// Current slide counter
let curSlide = 0;

// Next slide
const nextSlideBtn = document.querySelector("#right-arrow");

nextSlideBtn.onclick = () => {
  nextSlide();
};

function nextSlide() {
  curSlide = (curSlide + 1) % slides.length;
  showSlide();
}

// Previous slide
const prevSlideBtn = document.querySelector("#left-arrow");

prevSlideBtn.onclick = () => {
  prevSlide();
};

function prevSlide() {
  curSlide = (curSlide - 1 + slides.length) % slides.length;
  showSlide();
}

// Change slide based on curSlide
function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
}

showSlide();


*/

// FIRST ATTEMPT CAROUSEL
/*




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

*/

// SECOND ATTEMPT CAROUSEL

/*

const carousel = document.querySelector("#carousel");
const images = Array.from(document.querySelectorAll(".carousel-img"));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("dragstart", (e) => e.preventDefault());

  // Touch events
  image.addEventListener("touchstart", touchStart(index));
  image.addEventListener("touchend", touchEnd);
  image.addEventListener("touchmove", touchMove);

  // Mouse events
  image.addEventListener("mousedown", touchStart(index));
  image.addEventListener("mouseup", touchEnd);
  image.addEventListener("mouseleave", touchEnd);
  image.addEventListener("mousemove", touchMove);
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    carousel.classList.add("cursor-grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < images.length - 1) {
    currentIndex += 1;
  }

  if (movedBy > -100 && currentIndex < 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();

  carousel.classList.remove("cursor-grabbing");

  //console.log("end");
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    //console.log("move");
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  // currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}


*/
