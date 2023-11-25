export const checkAvatar = (url) => {
  if (url) {
    return url;
  } else return "./public/noavatar.png";
};
