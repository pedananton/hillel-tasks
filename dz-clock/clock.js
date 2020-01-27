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
  const [hh, mm, ss] = time.split(":").map(Number);
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
  clockTime = parseTimeString(customSet.value);
  valiDate();
  setClockTime(clockTime);
  scheduleTicker();
  document.getElementsByClassName("clock")[0].classList.remove("clock_broken");
}

function valiDate() {
  if (customSet.value.includes(":")) {
   return true;
  } else{ 
  toBroken();
  throw new Error(alert("Неверный формат времени"));
  // подскажи пожалуйста почему "throw new Error" происходит раньше чем "toBroken" отрисовывает разбивание
}
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
  return false;
}

document.getElementById("play").addEventListener("click", onPlayClick);
document.getElementById("stop").addEventListener("click", onStopClick);


// это уберу (пытался валидность проверитa таким образом)
// function valiDate() {
//   const trueTime = customSet.value.split(":");
//   // trueTime[1] -= 1;
//   let t = new Date (trueTime[0], trueTime[1], trueTime[2]);
//   if ((t.getHours() == trueTime[0]) && (t.getMinutes() == trueTime[1]) && (t.getSeconds() == trueTime[2])){
//     return true;
//   } else {
//     toBroken();
//   }
// }