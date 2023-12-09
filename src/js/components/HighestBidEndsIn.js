export const HighestBidEndsIn = (data, highestBid) => {
  console.log(data, highestBid);

  return `<div>
  <p class="text-secondary-200 text-xs">Highest bid</p>
  <p class="text-secondary-600">$${highestBid}</p>
</div>
<div>
  <p class="text-secondary-200 text-xs">Ends in</p>
  <p class="text-secondary-600">00d 02h 05m 01s</p>
</div>`;
};
