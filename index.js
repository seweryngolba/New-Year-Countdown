const appYear = document.querySelector("#countdown-year");
const happyNewYear = document.querySelector("#new-year-display");
const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();

function newYearCountdown() {
  const now = new Date().getTime();
  const dateDifference = newYearDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(dateDifference / day);
  const h = Math.floor((dateDifference % day) / hour);
  const m = Math.floor((dateDifference % hour) / minute);
  const s = Math.floor((dateDifference % minute) / second);

  document.getElementById("days").textContent = d < 10 ? "0" + d : d;
  document.getElementById("hours").textContent = h < 10 ? "0" + h : h;
  document.getElementById("minutes").textContent = m < 10 ? "0" + m : m;
  document.getElementById("seconds").textContent = s < 10 ? "0" + s : s;
}

newYearCountdown();
setInterval(newYearCountdown, 1000);
