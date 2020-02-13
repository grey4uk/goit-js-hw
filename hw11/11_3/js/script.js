class CountdownTimer {
  constructor(item) {
    this.selector = item.selector;
    this.targetDate = item.targetDate;
  }
  days(time) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  hours(time) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  mins(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }
  secs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 18, 2020")
});
function time(){
  return countdownTimer.targetDate.getTime() - Date.now();
};

function setCountdown(targetCountdown,valueCountdown) {
  setInterval(() => {
    document
      .querySelector(countdownTimer.selector)
      .querySelector(targetCountdown).textContent = valueCountdown(time());
  }, 1000);
}
setCountdown('span[data-value="secs"]',countdownTimer.secs);
setCountdown('span[data-value="mins"]',countdownTimer.mins);
setCountdown('span[data-value="hours"]',countdownTimer.hours);
setCountdown('span[data-value="days"]',countdownTimer.days);