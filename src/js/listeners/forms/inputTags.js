import { setError } from "./setError.js";

const input = document.querySelector("#tags");
const tagContainer = document.querySelector("#tag-container");
const tagCounterContainer = document.querySelector("#tag-counter");

let tags = [];
let tagCounter = 8 - tags.length;
tagCounterContainer.innerText = tagCounter;

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputTags = (def) => {
  input.onkeydown = (e) => {
    const tagPre = input.value.replace(/\s+/g, " ").trim();
    handleKeyDown(e, tagPre, def);
  };
};

// Check if tag already exist
function testInput(tagPre) {
  if (tags.includes(tagPre)) {
    return false;
  }
  return true;
}

// Shows remaining tags in UI
function updateCounter() {
  tagCounter = 8 - tags.length;
  tagCounterContainer.innerText = tagCounter;
}

// Handle what happens when user press enter
function handleKeyDown(e, tagPre, def) {
  const label = document.querySelector("#tags-label");
  const hint = document.querySelector("#tags-hint");

  if (e.key === "Enter" || e.keyCode === 13) {
    e.preventDefault();
    const test = testInput(tagPre);
    setError(test, input, hint, label, "Tag already exists", def);

    if (tagPre.length > 0 && !tags.includes(tagPre) && tags.length < 8) {
      createTag(tagPre);
      tags.push(tagPre);
      console.log(tags);
      updateCounter();
      input.value = "";
    }
    return test;
  }
}

// Create tag element in DOM and push string to tags array
function createTag(text) {
  const tag = document.createElement("div");
  tag.className =
    "gap-1 bg-neutral-100 p-2 flex items-center text-secondary-200 select-none transition-all";
  tag.innerHTML = `<p>${text}</p> <svg 
  class="cursor-pointer fill-secondary-200 hover:bg-neutral-200 transition-all"
  width="20"
  height="21"
  viewBox="0 0 20 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8535 14.146C14.8999 14.1925 14.9368 14.2476 14.9619 14.3083C14.9871 14.369 15 14.4341 15 14.4997C15 14.5654 14.9871 14.6305 14.9619 14.6912C14.9368 14.7519 14.8999 14.807 14.8535 14.8535C14.807 14.8999 14.7519 14.9368 14.6912 14.9619C14.6305 14.9871 14.5654 15 14.4997 15C14.4341 15 14.369 14.9871 14.3083 14.9619C14.2476 14.9368 14.1925 14.8999 14.146 14.8535L10 10.7068L5.85398 14.8535C5.76017 14.9473 5.63292 15 5.50025 15C5.36758 15 5.24033 14.9473 5.14652 14.8535C5.0527 14.7597 5 14.6324 5 14.4997C5 14.3671 5.0527 14.2398 5.14652 14.146L9.29316 10L5.14652 5.85398C5.0527 5.76017 5 5.63292 5 5.50025C5 5.36758 5.0527 5.24033 5.14652 5.14652C5.24033 5.0527 5.36758 5 5.50025 5C5.63292 5 5.76017 5.0527 5.85398 5.14652L10 9.29316L14.146 5.14652C14.2398 5.0527 14.3671 5 14.4997 5C14.6324 5 14.7597 5.0527 14.8535 5.14652C14.9473 5.24033 15 5.36758 15 5.50025C15 5.63292 14.9473 5.76017 14.8535 5.85398L10.7068 10L14.8535 14.146Z"
  />
</svg>`;

  const closeIcon = tag.querySelector("svg");
  closeIcon.onclick = () => removeTag(tag);
  tagContainer.appendChild(tag);
}

// Remove tag
function removeTag(tag) {
  const tagText = tag.querySelector("p").innerHTML;
  tags = tags.filter((tag) => tag !== tagText);
  console.log(tags);
  tag.remove();
  updateCounter();
}

export const captureTags = () => {
  return tags;
};
