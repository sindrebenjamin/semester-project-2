import { deleteListing } from "../../api/listings/deleteListing.js";
const deleteButton = document.querySelector("#delete");
const deleteModal = document.querySelector("#delete-modal");
const editId = new URLSearchParams(window.location.search).get("edit");

// Open modal and prompt confirmation
deleteButton.onclick = () => {
  document.querySelector("body").classList.add("overflow-none");
  deleteModal.classList.remove("hidden");
};

const cancelButton = document.querySelector("#cancel-delete");
const yesDelete = document.querySelector("#yes-delete");

// Close modal and cancel
cancelButton.onclick = (e) => {
  e.preventDefault();
  deleteModal.classList.add("hidden");
};

// Close modal if clicking outside it
deleteModal.onclick = (e) => {
  if (
    !e.target.classList.contains("inner-modal") ||
    !e.target.closest(".inner-modal")
  ) {
    deleteModal.classList.add("hidden");
  }
};

yesDelete.onclick = (e) => {
  e.preventDefault();
  deleteListing(editId);
};
