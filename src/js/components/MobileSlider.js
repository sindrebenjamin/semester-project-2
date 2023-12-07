import { addRemove } from "../utils/addRemove.js";

export const MobileSlider = async (checkedPhotos) => {
  const mobileSlider = document.querySelector(".mobile-slider");
  const slideIndicators = document.querySelector(".slide-indicators");

  function createSlides(images) {
    images.forEach((image) => {
      // Slide
      const slide = document.createElement("div");
      slide.className = "mobile-slide w-full snap-start flex-none h-[400px]";

      // Image
      const img = document.createElement("img");
      img.className = "object-cover w-full h-full";
      img.src = image;

      // Append slide
      slide.appendChild(img);
      mobileSlider.appendChild(slide);

      if (images.length > 1) {
        // Indicator
        const indicator = document.createElement("div");
        indicator.className =
          "indicator w-[10px] h-[10px] rounded-full bg-white opacity-50";

        // Append indicator
        slideIndicators.appendChild(indicator);
      }
    });

    // If no photos
    if (images.length < 1) {
      const slide = document.createElement("div");
      slide.className = "mobile-slide w-full snap-start flex-none";

      const img = document.createElement("img");
      img.className = "object-cover w-full h-full";
      img.src = "./public/nomedia.png";
      // Append slide
      slide.appendChild(img);
      mobileSlider.appendChild(slide);
    }
  }

  createSlides(checkedPhotos);

  const mobileIndicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  function updateIndicators() {
    mobileIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        addRemove(["opacity-80"], ["opacity-50"], indicator);
      } else {
        addRemove(["opacity-50"], ["opacity-80"], indicator);
      }
    });
  }

  updateIndicators();

  function goToSlide(index) {
    currentIndex = index;
    updateIndicators();
    mobileSlider.scrollLeft = currentIndex * window.innerWidth;
  }

  mobileIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  mobileSlider.addEventListener("scroll", () => {
    const newSlideIndex = Math.round(
      mobileSlider.scrollLeft / window.innerWidth
    );
    if (newSlideIndex !== currentIndex) {
      currentIndex = newSlideIndex;
      updateIndicators();
    }
  });
};
