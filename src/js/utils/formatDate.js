export function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function checkIfAuctionEnded(date) {
  const now = new Date();
  const auctionEnd = new Date(date);

  return now > auctionEnd ? true : false;
}
