/**
 * Cut title at passed cutoff point and add an ellipsis (...)
 * @param {string} title Title to check
 * @param {number} num Cutoff point
 * @returns
 */
export const checkTitle = (title, num) => {
  if (title.length > num) {
    const cutTitle = title.slice(0, num);
    return cutTitle + "...";
  }
  return title;
};
