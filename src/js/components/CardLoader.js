export const CardLoader = () => {
  const imageLoader = document.createElement("div");
  imageLoader.className = "loader aspect-square rounded";

  const titleLoader = document.createElement("div");
  titleLoader.className = "loader h-[28px]";

  const currentBidLoader = document.createElement("div");
  currentBidLoader.className = "loader h-[48px]";

  const endsInLoader = document.createElement("div");
  endsInLoader.className = "loader h-[24px]";

  return `<div class="flex flex-col gap-4">
  ${imageLoader.outerHTML}
  ${titleLoader.outerHTML}
  ${currentBidLoader.outerHTML}
  ${endsInLoader.outerHTML}
  </div>`;
};
