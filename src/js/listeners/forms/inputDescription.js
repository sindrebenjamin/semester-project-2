export const descriptionInput = () => {
  const descriptionTextArea = document.querySelector("#description");

  function setHeight() {
    // Calculate the new height based on scrollHeight and lineHeight
    if (descriptionTextArea.scrollHeight > 50) {
      descriptionTextArea.style.height = "auto";
      const newHeight =
        descriptionTextArea.scrollHeight > descriptionTextArea.clientHeight
          ? descriptionTextArea.scrollHeight
          : descriptionTextArea.clientHeight;

      descriptionTextArea.style.height = newHeight + "px";
    }
    descriptionTextArea.value === "" &&
      (descriptionTextArea.style.height = "44px");
  }

  setHeight();

  descriptionTextArea.classList.add("overflow-hidden");
  descriptionTextArea.addEventListener("input", function () {
    setHeight();
  });
};
