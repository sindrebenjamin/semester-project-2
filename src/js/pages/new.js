import { setError } from "../listeners/forms/setError.js";

const imgContainer = document.querySelector("#img-container");

export const imageInputListener = () => {
  const input = document.querySelector("#image-input");
  const label = document.querySelector("#image-input-label");
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
  const imageItem = document.createElement("img");
  imageItem.className = "img-item";
  imageItem.classList.add("aspect-square", "object-cover", "cursor-grab");
  imageItem.src = url;
  imageItem.draggable = true;
  imgContainer.appendChild(imageItem);
  imageArray.push(url);
  console.log(imageArray);
}

// Dragging

let draggedItem = null;

imgContainer.addEventListener("dragstart", handleDragStart);
imgContainer.addEventListener("dragover", handleDragOver);
imgContainer.addEventListener("dragend", handleDragEnd);

function handleDragStart(e) {
  draggedItem = e.target.closest(".img-item");
  draggedItem.classList.add("cursor-grabbing");

  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    if (imgItem !== draggedItem) {
      imgItem.classList.add("opacity-50");
    }
  });
}

function handleDragOver(e) {
  e.preventDefault();
  const targetItem = e.target.closest(".img-item");
  if (targetItem && targetItem !== draggedItem) {
    const rect = targetItem.getBoundingClientRect();
    const mouseY = e.clientY;
    const isAbove = mouseY < rect.top + rect.height / 2;

    if (isAbove) {
      imgContainer.insertBefore(draggedItem, targetItem);
    } else {
      imgContainer.insertBefore(draggedItem, targetItem.nextSibling);
    }
  }
}

function handleDragEnd(e) {
  draggedItem.classList.remove("cursor-grabbing");
  draggedItem.null;

  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    imgItem.classList.remove("opacity-50");
  });
  updateArray();
}

// Dragging mobile devices

imgContainer.addEventListener("touchstart", handleTouchStart, {
  passive: false,
});
imgContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
imgContainer.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(e) {
  e.preventDefault();
  draggedItem = e.touches[0].target.closest(".img-item");
  if (draggedItem) {
    addOpacityToOtherItems(draggedItem);
  }
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const targetItem = document
    .elementFromPoint(touch.clientX, touch.clientY)
    .closest(".img-item");
  handleDragAndDrop(targetItem, touch.clientY);
}

function handleTouchEnd() {
  if (draggedItem) {
    draggedItem = null;
    removeOpacityFromAllItems();
  }
  updateArray();
}

// Helper Functions

function addOpacityToOtherItems(excludeItem) {
  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    if (imgItem !== excludeItem) {
      imgItem.classList.add("opacity-50");
    }
  });
}

function removeOpacityFromAllItems() {
  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    imgItem.classList.remove("opacity-50");
  });
}

function handleDragAndDrop(targetItem, mouseY) {
  if (targetItem && targetItem !== draggedItem) {
    const rect = targetItem.getBoundingClientRect();
    const isAbove = mouseY < rect.top + rect.height / 2;

    if (isAbove) {
      imgContainer.insertBefore(draggedItem, targetItem);
    } else {
      imgContainer.insertBefore(draggedItem, targetItem.nextSibling);
    }
  }
}

function updateArray() {
  imageArray = [];
  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    imageArray.push(imgItem.src);
  });
  console.log(imageArray);
}

// Make array at handledragend that can be passed ... or update exisiting array or smt? Clean up code eventually

// num for the div...
// make the div movable...

// remove btn

// Clean code

// "dragg to rearrange msg when 2 or more images"

// remove btn...
// Create array and push items when images are added, update this array when pictures are moved around
