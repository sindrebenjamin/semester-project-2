export const checkTitle = (title, num) => {
  if (title.length > num) {
    const cutTitle = title.slice(0, num);
    return cutTitle + "...";
  }
  return title;
};
