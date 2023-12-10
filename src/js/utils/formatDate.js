export function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const year = inputDate.getUTCFullYear();
  const month = (inputDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getUTCDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function checkIfAuctionEnded(date) {
  const now = new Date();
  const auctionEnd = new Date(date);

  return now > auctionEnd ? true : false;
}
