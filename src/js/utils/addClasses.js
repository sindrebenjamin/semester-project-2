/**
 *Add all classes in array to element
 * @param {*} element
 * @param {Array} classNames
 *
 */

export const addClasses = (element, classNames) => {
  classNames.forEach((className) => {
    element.classList.add(className);
  });
};
