/**
 * Check if passed url is a valid image URL and resolve true if it is
 * @param {string} url Image URL
 * @returns Promise
 */
export const checkMedia = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(url);
    };

    img.onerror = function () {
      resolve("./public/nomedia.png");
    };

    img.src = url;
  });
};
