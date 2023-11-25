export const dateToDays = (date) => {
  const targetDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return `Ends in ${daysRemaining} ` + (daysRemaining > 1 ? `days` : `day`);
};
