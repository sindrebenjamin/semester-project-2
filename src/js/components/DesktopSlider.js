import { addRemove } from "../utils/addRemove.js";

export const DesktopSlider = (checkedPhotos) => {
  const slider = document.querySelector(".slider");
  const slideIndicatorsDesktop = document.querySelector(
    ".slide-indicators-desktop"
  );
  const arrowBtns = document.querySelectorAll(".arrow-btn");

  // Create slide for each image
  function createSlides(images) {
    // Hide arrow buttons if no photos
    if (images.length <= 1) {
      arrowBtns.forEach((btn) => {
        btn.classList.add("hidden");
      });
    }

    images.forEach((image) => {
      // Slide
      const slide = document.createElement("div");
      slide.className =
        "top-0 left-0 slide transition-all w-full h-[450px] absolute";

      // Image
      const img = document.createElement("img");
      img.className = "object-cover w-full h-full";
      img.src = image;

      // Append slide
      slide.appendChild(img);
      slider.appendChild(slide);

      if (images.length > 1) {
        // Indicator
        const indicator = document.createElement("div");
        indicator.className =
          "indicator-desktop w-[10px] h-[10px] rounded-full bg-white opacity-50 cursor-pointer";

        // Append indicator
        slideIndicatorsDesktop.appendChild(indicator);
      }
    });

    // Set placeholder image if there are no photos
    if (images.length < 1) {
      const slide = document.createElement("div");
      slide.className =
        "top-0 left-0 slide transition-all w-full h-[350px] absolute";

      const img = document.createElement("img");
      img.className = "object-cover w-full h-[450px]";
      img.src = "./public/nomedia.png";
      // Append slide
      slide.appendChild(img);
      slider.appendChild(slide);
    }
  }

  createSlides(checkedPhotos);

  const slides = document.querySelectorAll(".slide");
  const slideIndicators = document.querySelectorAll(".indicator-desktop");

  // Current slide counter
  let curSlide = 0;

  function updateIndicators() {
    slideIndicators.forEach((indicator, index) => {
      if (index === curSlide) {
        addRemove(["opacity-80"], ["opacity-50"], indicator);
      } else {
        addRemove(["opacity-50"], ["opacity-80"], indicator);
      }
    });
  }

  updateIndicators();

  // Next slide
  const nextSlideBtn = document.querySelector("#right-arrow");

  nextSlideBtn.onclick = () => {
    nextSlide();
    updateIndicators();
  };

  function nextSlide() {
    curSlide = (curSlide + 1) % slides.length;
    showSlide();
  }

  // Previous slide
  const prevSlideBtn = document.querySelector("#left-arrow");

  prevSlideBtn.onclick = () => {
    prevSlide();
    updateIndicators();
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

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
      updateIndicators();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
      updateIndicators();
    }
  });

  slideIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      curSlide = index;
      showSlide();
      updateIndicators();
    });
  });
};
