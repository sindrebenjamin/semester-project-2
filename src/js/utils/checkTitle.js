export const checkTitle = (title) => {
  if (title.length > 20) {
    const cutTitle = title.slice(0, 19);
    return cutTitle + "...";
  }
  return title;
};
