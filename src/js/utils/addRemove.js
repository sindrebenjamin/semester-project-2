/**
 * Add and remove classes of given element
 * @param {array} classesToAdd Array of classes to add
 * @param {array} classesToRemove Array of classes to remove
 * @param {*} element Element to add and remove classes on
 *
 */
export const addRemove = (classesToAdd, classesToRemove, element) => {
  classesToAdd.forEach((classToAdd) => {
    element.classList.add(classToAdd);
  });
  classesToRemove.forEach((classToRemove) => {
    element.classList.remove(classToRemove);
  });
};
