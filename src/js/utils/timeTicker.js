let countdownInterval;

export const timeTicker = (time) => {
  const endDate = new Date(time);

  function calculateTimeDifference() {
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      document.querySelector("#countdown").innerText = "Auction ended";
    }

    return difference;
  }

  function updateCountdown() {
    const difference = calculateTimeDifference();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const formattedTime = `${String(days).padStart(2, "0")}d ${String(
      hours
    ).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(
      seconds
    ).padStart(2, "0")}s`;

    difference > 0 &&
      (document.querySelector("#countdown").innerText = formattedTime);
  }

  updateCountdown();

  countdownInterval = setInterval(updateCountdown, 1000);
};
