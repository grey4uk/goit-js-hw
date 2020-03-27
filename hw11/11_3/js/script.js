class CountdownTimer {
  constructor(item) {
    this.selector = item.selector;
    this.targetDate = item.targetDate;
    this.setCountdown(
      'span[data-value="secs"]',
      'span[data-value="mins"]',
      'span[data-value="hours"]',
      'span[data-value="days"]'
    );
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
  time() {
    let time = this.targetDate.getTime() - Date.now();
    if (time >= 0) {
      return time;
    } else {
      // alert("Date is here)))");
      document.querySelector(this.selector).style.display = "none";
      document.querySelector("h1").style.display = "none";
      document.querySelector("#wrapper").style.backgroundImage =
        'url("https://picua.org/images/2020/02/14/3a1ddd2212690c1e282a028bb48b3879.jpg")';
    }
  }
  setCountdown(seconds, minutes, hours, days) {
    setInterval(() => {
      document.querySelector(seconds).textContent = this.secs(this.time());
      document.querySelector(minutes).textContent = this.mins(this.time());
      document.querySelector(hours).textContent = this.hours(this.time());
      document.querySelector(days).textContent = this.days(this.time());
    }, 1000);
  }
}
const myDate=prompt("input data, such in example: Feb 15, 2020, 20:51");
const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`${myDate}`)
  // ("Feb 26, 2020")
  // (`${myDate}`)
});