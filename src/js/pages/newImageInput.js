import { setError } from "../listeners/forms/setError.js";
import {
  addOpacityToOtherItems,
  removeOpacityFromAllItems,
  handleDragAndDrop,
} from "../utils/dragDropHelpers.js";

const imgContainer = document.querySelector("#img-container");
const input = document.querySelector("#image-input");
const label = document.querySelector("#image-input-label");
export const imageInputListener = () => {
  const hint = document.querySelector("#image-input-hint");

  input.oninput = async () => {
    const test = await checkUrl(input.value);
    setError(test, input, hint, label, "Must be a valid image URL");

    //callback(test, input);
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

// Create image when added (make logic for when 8 images)

let imageArray = [];

function createImage(url) {
  // imageItem
  const imageItem = document.createElement("div");
  imageItem.className = "img-item cursor-grab";
  imageItem.draggable = true;

  // image
  const image = document.createElement("img");
  image.className = "inner-img aspect-square object-cover";
  image.src = url;
  imageItem.appendChild(image);

  // removeBtn
  const removeBtn = document.createElement("div");
  removeBtn.innerText = "Remove";
  removeBtn.className = "remove-btn";
  imageItem.appendChild(removeBtn);

  // Append
  imgContainer.appendChild(imageItem);
  imageArray.push(url);

  inputVisibility();

  console.log(imageArray);

  // Delete function
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn) => {
    btn.onclick = (e) => {
      e.target.closest(".img-item").remove();
      updateArray();
    };
  });
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

// Start

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
  draggedItem = e.touches[0].target.closest(".img-item");
  if (draggedItem) {
    addOpacityToOtherItems(draggedItem);
  }
}

// While dragging

function handleDragOver(e) {
  e.preventDefault();
  const mouseY = e.clientY;
  const targetItem = e.target.closest(".img-item");
  handleDragAndDrop(targetItem, mouseY, draggedItem);
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const targetItem = document
    .elementFromPoint(touch.clientX, touch.clientY)
    .closest(".img-item");
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

function updateArray() {
  imageArray = [];
  const images = document.querySelectorAll(".inner-img");
  images.forEach((image) => {
    imageArray.push(image.src);
  });

  inputVisibility();

  console.log(imageArray);
}

function inputVisibility() {
  if (imageArray.length === 8) {
    input.classList.add("hidden");
    label.classList.add("hidden");
  } else {
    input.classList.remove("hidden");
    label.classList.remove("hidden");
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
