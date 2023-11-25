/*
export const checkMedia = (url) => {
  if (url) {
    return url;
  } else return "./public/nomedia.png";
};

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