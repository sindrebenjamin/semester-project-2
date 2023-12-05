import { deleteListing } from "../../api/listings/deleteListing.js";
const deleteButton = document.querySelector("#delete");
const deleteModal = document.querySelector("#delete-modal");
const editId = new URLSearchParams(window.location.search).get("edit");

editId && deleteButton.classList.remove("hidden");

// Open modal and prompt confirmation
deleteButton.onclick = (e) => {
  e.preventDefault();
  modalVisiblity();
};

const cancelButton = document.querySelector("#cancel-delete");
const yesDelete = document.querySelector("#yes-delete");

// Close modal and cancel
cancelButton.onclick = (e) => {
  e.preventDefault();
};

// Close modal if clicking outside it
deleteModal.onclick = (e) => {
  if (
    !e.target.classList.contains("inner-modal") ||
    !e.target.closest(".inner-modal")
  ) {
    modalVisiblity();
  }
};

yesDelete.onclick = (e) => {
  e.preventDefault();
  deleteListing(editId);
};

function modalVisiblity() {
  document.querySelector("body").classList.toggle("overflow-hidden");
  deleteModal.classList.toggle("hidden");
}
