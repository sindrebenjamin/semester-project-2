export const sortByPopular = (listings) => {
  const popularArray = Array.from(listings)
    .sort((a, b) => b._count.bids - a._count.bids)
    .slice(0, 4);
  return popularArray;
};
