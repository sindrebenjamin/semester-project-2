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
    return daysRemaining <= 0
      ? `Auction ended`
      : `Ends in ${daysRemaining} ` + (daysRemaining > 1 ? `days` : `day`);
  } else {
    const timeDifference = currentDate - targetDate;

    const formatTime = (time, unit) => {
      const roundedTime = Math.round(time);
      return `${roundedTime} ${unit}${roundedTime !== 1 ? "s" : ""} ago`;
    };

    const getTimeUnit = (timeDifference, unitInMilliseconds, unitName) => {
      const timeValue = timeDifference / unitInMilliseconds;
      return timeValue >= 1 ? formatTime(timeValue, unitName) : null;
    };

    const yearsAgo = getTimeUnit(
      timeDifference,
      1000 * 60 * 60 * 24 * 365,
      "year"
    );
    if (yearsAgo) return yearsAgo;

    const monthsAgo = getTimeUnit(
      timeDifference,
      1000 * 60 * 60 * 24 * 30,
      "month"
    );
    if (monthsAgo) return monthsAgo;

    const weeksAgo = getTimeUnit(
      timeDifference,
      1000 * 60 * 60 * 24 * 7,
      "week"
    );
    if (weeksAgo) return weeksAgo;

    const daysAgo = getTimeUnit(timeDifference, 1000 * 60 * 60 * 24, "day");
    if (daysAgo) return daysAgo;

    const hoursAgo = getTimeUnit(timeDifference, 1000 * 60 * 60, "hour");
    if (hoursAgo) return hoursAgo;

    const minutesAgo = getTimeUnit(timeDifference, 1000 * 60, "minute");
    if (minutesAgo) return minutesAgo;

    return "Now";
  }
};
