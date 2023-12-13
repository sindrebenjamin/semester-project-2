/**
 * Add item to localStorage
 * @param {*} key
 * @param {*} value
 */
export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
