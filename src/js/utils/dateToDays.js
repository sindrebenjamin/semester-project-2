/**
 *
 * @param {*} date Date and time in ISO 8601 format
 * @param {boolean} past Set to true if referencing past date
 * @returns
 */
export const dateToDays = (date, past) => {
  const targetDate = new Date(date);
  const currentDate = new Date();
  if (!past) {
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysRemaining} ` + (daysRemaining > 1 ? `days` : `day`);
  } else {
    const timeDifference = currentDate - targetDate;
    const daysAgo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysAgo} ` + (daysAgo > 1 ? `days` : `day`);
  }
};
