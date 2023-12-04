/**
 *
 * @param {*} excludeItem Dragged item
 * Style elements not being dragged
 */
export function addOpacityToOtherItems(excludeItem) {
  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    if (imgItem !== excludeItem) {
      imgItem.classList.add("opacity-50");
    }
  });
}

/**
 * Remove opacity from image items
 */

export function removeOpacityFromAllItems() {
  const imgItems = document.querySelectorAll(".img-item");
  imgItems.forEach((imgItem) => {
    imgItem.classList.remove("opacity-50");
  });
}

/**
 *
 * @param {*} targetItem
 * @param {*} mouseY
 * @param {*} draggedItem
 * Place element before or after sibling
 */

export function handleDragAndDrop(targetItem, mouseY, draggedItem) {
  const imgContainer = document.querySelector("#img-container");
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

import { updateArray } from "../listeners/forms/inputImages.js";
import { placeholderVisiblity } from "../listeners/forms/inputImages.js";

/**
 *
 * @param {*} removeBtn
 * Delete related DOM element, update imageArray and create new placeholder
 */
export function deleteImg(removeBtn) {
  removeBtn.closest(".img-item").remove();
  updateArray();
  placeholderVisiblity();
  /*
  const placeholder = document.createElement("div");
  placeholder.className =
    "placeholder border-dotted border-2 border-neutral-200 aspect-square";
  imgContainer.appendChild(placeholder);
  */
}
