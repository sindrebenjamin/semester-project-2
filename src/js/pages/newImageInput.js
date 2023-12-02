import { setError } from "../listeners/forms/setError.js";
import {
  addOpacityToOtherItems,
  removeOpacityFromAllItems,
  handleDragAndDrop,
  deleteImg,
} from "../utils/dragDropHelpers.js";

import { addRemove } from "../utils/addRemove.js";

const imgContainer = document.querySelector("#img-container");
const input = document.querySelector("#image-input");
const label = document.querySelector("#image-input-label");
const hint = document.querySelector("#image-input-hint");
export const imageInputListener = () => {
  input.oninput = async () => {
    hint.innerText = "Loading...";
    const test = await checkUrl(input.value);
    setError(
      test,
      input,
      hint,
      label,
      "Must be a valid image URL",
      "Add up to 8 photos"
    );
  };
};

function checkUrl(url) {
  if (url === "") {
    return true;
  }
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(true);
      createImage(url);
      input.value = "";
    };

    img.onerror = function () {
      resolve(false);
    };

    img.src = url;
  });
}

imageInputListener();

let imageArray = []; // Set this conditionally when using queryString to edit

// Counter

const counterMessage = document.querySelector("#counter-message");
const counterNumber = document.querySelector("#counter-number");

counterNumber.innerText = imageArray.length;

input.onfocus = () => {
  const placeholders = document.querySelectorAll(".placeholder");
  addRemove(["border-primary-100"], ["border-neutral-200"], placeholders[0]);
};

input.onblur = () => {
  const placeholders = document.querySelectorAll(".placeholder");
  addRemove(["border-neutral-200"], ["border-primary-100"], placeholders[0]);
};

// Create image when added
let child = 0;
function createImage(url) {
  input.blur();

  // imageItem
  const imageItem = document.createElement("div");
  imageItem.className = "img-item cursor-grab relative";
  imageItem.draggable = true;

  // image
  const image = document.createElement("img");
  image.className = "inner-img aspect-square object-cover w-full";
  image.src = url;
  imageItem.appendChild(image);

  // number
  const numHolder = document.createElement("div");
  numHolder.className =
    "absolute z-20 bg-white top-4 right-4 p-4 rounded-full flex justify-center items-center w-12 h-12";
  const num = document.createElement("p");
  num.className = "num";
  numHolder.appendChild(num);
  imageItem.appendChild(numHolder);

  // removeBtn
  const removeBtn = document.createElement("div");
  removeBtn.innerText = "Remove";
  removeBtn.className =
    "remove-btn py-4 cursor-pointer hover:opacity-50 transition-all text-center";
  imageItem.appendChild(removeBtn);

  // Append
  imgContainer.insertBefore(imageItem, imgContainer.children[child]);
  child++;
  imageArray.push(url);

  inputVisibility();

  // Remove placeholder
  const placeholders = document.querySelectorAll(".placeholder");
  placeholders[0].remove();
  console.log(placeholders);

  console.log(imageArray);

  updateNumbers();
  counterNumber.innerText = imageArray.length;
}

// Dragging

let draggedItem = null;

// Desktop EventListeners

imgContainer.addEventListener("dragstart", handleDragStart);
imgContainer.addEventListener("dragover", handleDragOver);
imgContainer.addEventListener("dragend", handleDragEnd);

// Mobile EventListeners

imgContainer.addEventListener("touchstart", handleTouchStart, {
  passive: false,
});

imgContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
imgContainer.addEventListener("touchend", handleTouchEnd);

// Drag start

function handleDragStart(e) {
  draggedItem = e.target.closest(".img-item");
  if (draggedItem) {
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox to allow drag
    draggedItem.classList.add("cursor-grabbing");
    addOpacityToOtherItems(draggedItem);
  }
}

function handleTouchStart(e) {
  e.preventDefault();
  const touchedElement = document.elementFromPoint(
    e.touches[0].clientX,
    e.touches[0].clientY
  );
  const removeBtn = touchedElement.closest(".remove-btn");
  if (removeBtn) {
    child--;
    deleteImg(removeBtn);
  }

  if (!removeBtn) {
    draggedItem = e.touches[0].target.closest(".img-item");
    if (draggedItem) {
      addOpacityToOtherItems(draggedItem);
    }
  }
}

// While dragging

function handleDragOver(e) {
  e.preventDefault();
  const mouseY = e.clientY;
  const targetItem = e.target.closest(".img-item");
  updateNumbers();
  handleDragAndDrop(targetItem, mouseY, draggedItem);
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const targetItem = document
    .elementFromPoint(touch.clientX, touch.clientY)
    .closest(".img-item");
  updateNumbers();
  handleDragAndDrop(targetItem, touch.clientY, draggedItem);
}

// Drag end

function handleDragEnd(e) {
  draggedItem.classList.remove("cursor-grabbing");
  draggedItem.null;

  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    imgItem.classList.remove("opacity-50");
  });
  updateArray();
}

function handleTouchEnd() {
  if (draggedItem) {
    draggedItem = null;
    removeOpacityFromAllItems();
  }
  updateArray();
}

// Helper Functions

// Remove

imgContainer.addEventListener("click", function (e) {
  const removeBtn = e.target.closest(".remove-btn");
  if (removeBtn) {
    child--;
    deleteImg(removeBtn);
  }
});

// Update

export function updateArray() {
  imageArray = [];
  const images = document.querySelectorAll(".inner-img");
  images.forEach((image) => {
    imageArray.push(image.src);
  });

  inputVisibility();
  updateNumbers();
  counterNumber.innerText = imageArray.length;
  console.log(imageArray);
}

function inputVisibility() {
  const maxImg = document.querySelector("#max-img");
  if (imageArray.length === 8) {
    input.classList.add("hidden");
    label.classList.add("hidden");
    hint.classList.add("hidden");
    maxImg.classList.remove("hidden");
  } else {
    input.classList.remove("hidden");
    label.classList.remove("hidden");
    hint.classList.remove("hidden");
    maxImg.classList.add("hidden");
  }
}

function updateNumbers() {
  const numbers = document.querySelectorAll(".num");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].innerText = i + 1;
  }
}

// num for the div...
// make the div movable...

// remove btn

// Clean code

// "dragg to rearrange msg when 2 or more images"

// remove btn...
// Create array and push items when images are added, update this array when pictures are moved around

// clear input, when image is added succesfully
// Hide input when 8 images, then show it again if an image gets removed.
// Number indicator of which image is first

//show placeholder for where image is coming, make it focused when input field is focused.. rly only need 1
