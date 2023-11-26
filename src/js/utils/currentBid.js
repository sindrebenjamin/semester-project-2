export const currentBid = (bids) => {
  if (bids.length === 0) {
    return "0";
  }
  const sorted = bids.sort((a, b) => a - b);
  const highestBid = sorted.length - 1;

  if (sorted[highestBid].amount > 0) {
    return sorted[highestBid].amount;
  }
};
