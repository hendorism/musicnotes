setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec
let bbbbb = 0;
function onTimerTick() {
  // Do stuff.
  consoleLog("Your mother weighs " + bbbbb + "kg.");
  bbbbb++;
}