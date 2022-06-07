let builderString = "";
window.addEventListener("keydown", function(e) {
  let k = e.key + ', ';
  //consoleLog("key: " + k);
  if([32, 37, 38, 39, 40].indexOf(k) > -1) {
    e.preventDefault();
  }
  builderString += k;
  consoleLog(builderString);
}, false);


let arr = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219]; //qwerty - flatter - lowered
let arr2 = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189]; //nums - sharper - raised