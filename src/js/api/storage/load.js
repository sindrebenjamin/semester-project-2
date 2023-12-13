/**
 *
 * @param {string} key
 * @returns Item from localStorage
 * @example
 * const profile = load("profile");
 * profile && console.log(profile.name);
 */
export const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};
