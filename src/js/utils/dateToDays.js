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
    const millisecondsInMinute = 1000 * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInWeek = millisecondsInDay * 7;
    const millisecondsInMonth = millisecondsInDay * 30;
    const millisecondsInYear = millisecondsInDay * 365;

    const yearsRemaining = Math.floor(timeDifference / millisecondsInYear);
    const monthsRemaining = Math.floor(timeDifference / millisecondsInMonth);
    const weeksRemaining = Math.floor(timeDifference / millisecondsInWeek);
    const daysRemaining = Math.floor(timeDifference / millisecondsInDay);
    const hoursRemaining = Math.floor(timeDifference / millisecondsInHour);
    const minutesRemaining = Math.floor(timeDifference / millisecondsInMinute);

    if (yearsRemaining > 0) {
      return `Ends in ${yearsRemaining} ${
        yearsRemaining > 1 ? "years" : "year"
      }`;
    } else if (monthsRemaining > 0) {
      return `Ends in ${monthsRemaining} ${
        monthsRemaining > 1 ? "months" : "month"
      }`;
    } else if (weeksRemaining > 0) {
      return `Ends in ${weeksRemaining} ${
        weeksRemaining > 1 ? "weeks" : "week"
      }`;
    } else if (daysRemaining > 0) {
      return `Ends in ${daysRemaining} ${daysRemaining > 1 ? "days" : "day"}`;
    } else if (hoursRemaining > 0) {
      return `Ends in ${hoursRemaining} ${
        hoursRemaining > 1 ? "hours" : "hour"
      }`;
    } else if (minutesRemaining > 0) {
      return `Ends in ${minutesRemaining} ${
        minutesRemaining > 1 ? "minutes" : "minute"
      }`;
    } else {
      return "Auction ended";
    }
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

    const secondsAgo = getTimeUnit(timeDifference, 1000, "second");
    if (secondsAgo) return secondsAgo;

    return "Now";
  }
};
