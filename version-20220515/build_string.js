let builderString = "";
window.addEventListener("keydown", function(e) {
  let k = e.key;
  consoleLog("key: " + k);
  if([32, 37, 38, 39, 40].indexOf(k) > -1) {
    e.preventDefault();
  }
  builderString += k;
  consoleLog(builderString);
}, false);
