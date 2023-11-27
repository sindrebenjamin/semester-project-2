export const addRemove = (classesToAdd, classesToRemove, element) => {
  classesToAdd.forEach((classToAdd) => {
    element.classList.add(classToAdd);
  });
  classesToRemove.forEach((classToRemove) => {
    element.classList.remove(classToRemove);
  });
};
