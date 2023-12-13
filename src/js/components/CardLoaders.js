/**
 *
 * @param {number} amount Amount of cards
 * @returns Loader components equal to passed amount
 */
export const CardLoaders = (amount) => {
  let loaders = "";
  for (let i = 0; i < amount; i++) {
    loaders += `<div class="loader-item flex flex-col gap-4">
    <div class="loader aspect-square rounded"></div>
    <div class="loader h-[28px]"></div>
    <div class="loader h-[48px]"></div>
    <div class="loader h-[24px]"></div>
  </div>`;
  }

  return loaders;
};
