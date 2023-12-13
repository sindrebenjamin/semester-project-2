/**
 * Set currently highest bid based on passed array of bids
 * @param {array} bids Array of bids
 * @returns
 */
export const currentBid = (bids) => {
  if (bids.length === 0) {
    return "No bids yet";
  }
  const sorted = bids.sort((a, b) => a - b);
  const highestBid = sorted.length - 1;

  if (sorted[highestBid].amount > 0) {
    return "$" + sorted[highestBid].amount;
  }
};
