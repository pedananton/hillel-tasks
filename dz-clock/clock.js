/**
 * @type {HTMLElement}
 */
// @ts-ignore
const clock = document.getElementsByClassName("clock")[0];
/**
 * @type {HTMLInputElement}
 */
// @ts-ignore
const customSet = document.getElementById("customSet");
/**
 * Sets arrows to the time
 * @param {Date} date
 */
function setClockTime(date) {
  const hh = String(date.getHours());
  const mm = String(date.getMinutes());
  const ss = String(date.getSeconds());
  clock.style.setProperty("--hours", hh);
  clock.style.setProperty("--minutes", mm);
  clock.style.setProperty("--seconds", ss);
}
/**
 * @param {string} time in "HH:MM:SS" format
 * @returns {Date}
 */
function parseTimeString(time) {
  let t = time.split(":").map(Number);

  if (!time.includes(":")||(t[0]<0||t[0]>24)||(t[1]<0||t[1]>60)||(t[2]<0||t[2]>60)
  ) {
    throw new Error("Неверный формат времени");
  }

  const [hh, mm, ss] = t;
  const date = new Date();
  date.setHours(hh);
  date.setMinutes(mm);
  date.setSeconds(ss);
  date.setMilliseconds(0);
  return date;
}

/**
 * @type {Date}
 */
let clockTime;

let clockIntervalHandle;

function onPlayClick() {
  try {
    clockTime = parseTimeString(customSet.value);
    setClockTime(clockTime);
    scheduleTicker();
    document.getElementsByClassName("clock")[0].classList.remove("clock_broken");
    } catch (e) {
    toBroken();
  }
}

function valiDate() {

}

function scheduleTicker() {
  clockIntervalHandle = setInterval(() => {
    clockTime.setSeconds(clockTime.getSeconds() + 1);
    setClockTime(clockTime);
  }, 1000);
}
/**
 * @style {}
 */
function onStopClick() {
  clearInterval(clockIntervalHandle);
}

function toBroken() {
  onStopClick();
  document.getElementsByClassName("clock")[0].classList.add("clock_broken");
}

document.getElementById("play").addEventListener("click", onPlayClick);
document.getElementById("stop").addEventListener("click", onStopClick);

