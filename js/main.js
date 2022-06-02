$(document).ready(function() { //jquery
console.log("js/main.js has loaded");

window.addEventListener("keydown", function(e) { // prevent keys from scrolling the page
  // 37   39   38   40   32
  // <    >    ^    D    SP
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) { // not sure
    e.preventDefault(); // (prevent default behavior)
    /* The default behavior of direction arrow keys
     * is to scroll the page. The default behavior
     * of space bar is to scroll down the height of
     * the viewport.
     */
  }
}, false); // Why does this say false?
	// What does that mean?

$(document).keypress(function(e) {
  consoleLog( `keypress = ${e.which}` );
  consoleLog( `keyMap[e.which] = ${keyMap[e.which]}` );
  musicalInput( keyMap[e.which] );
});

$(document).keyup(function(e) {
  notationConsoleLog(`keyup = ${e.which}`);
  if (e.which == 8){
    startOver();
  } else if (e.which == 38) { //up
    y -= 5;
  } else if (e.which == 39) { //right
    x += 5;
  } else if (e.which == 40) { //down
    y += 5;
  } else if (e.which == 37) { //left
    x -= 5;
  } else if (e.which == 32) { //spacebar
    notationConsoleLog("spacebar")
  } else {
    return null;
  }
  notationConsoleLog("x=" + x + ", y=" + y);
  updateRender();
})

}); // end jquery

var keyMap = {
  "122":"c3","120":"d3", "99":"e3","118":"f3", "98":"g3","110":"a3","109":"b3",
   "97":"c4","115":"d4","100":"e4","102":"f4","103":"g4","104":"a4","106":"b4",
  "113":"c5","119":"d5","101":"e5","114":"f5","116":"g5","121":"a5","117":"b5",
   "49":"c6", "50":"d6", "51":"e6", "52":"f6", "53":"g6", "54":"a6", "55":"b6",
  "219":"do","221":"uo"
}
let y = 50;
let x = 15;
let quan = 12;
let spac = 100;
let tmar = 50;

var scoreComponents = [];
// var yValueOfNoteRelativeToMiddleLine;
var yValuesOfNotesRelativeToMiddleLine = {
  "b6":-70,"a6":-65,"g6":-60,"f6":-55,"e6":-50,"d6":-45,"c6":-40,
  "b5":-35,"a5":-30,"g5":-25,"f5":-20,"e5":-15,"d5":-10,"c5": -5,
  "b4":  0,"a4":  5,"g4": 10,"f4": 15,"e4": 20,"d4": 25,"c4": 30,
  "b3": 35,"a3": 40,"g3": 45,"f3": 50,"e3": 55,"d3": 60,"c3": 65
}
//let displayAccidental;
let accidentalValue = 0;
//function setAccidentalValue() {
//
//}
let octaveShift = 0;
function shiftOctave( shiftDirection ) {
  if (shiftDirection == 'u') {
    octaveShift += 1;
  } else if (shiftDirection == 'd') {
    octaveShift -= 1;
  } else {
    return null;
  }
  notationConsoleLog("Octave shift = " + octaveShift);
}
let noteNames = ["a", "b", "c", "d", "e", "f", "g"];

///////////////////////===== drawing stuff to page =====/////////
function musicalInput(musicalInputCode) {
  if (musicalInputCode == undefined) {
    notationConsoleLog(`error: musicalInputCode is ${musicalInputCode}`);
  } else {
    if (musicalInputCode.slice(1,2) == "o") {
      shiftOctave(musicalInputCode.slice(0,1));
    } else if (noteNames.includes(musicalInputCode.slice(0,1))) {
      makeNewNote(musicalInputCode.slice(0,1), musicalInputCode.slice(1,2));
    } else {
      notationConsoleLog("Invalid music input: ${musicalInputCode}");
    }
    if (stavesHaveBeenDrawn == true) {
      drawStaves(quan, spac, tmar);
    }
    updateCanvas();
  }
}

function makeNewNote() {
  let noteName = musicalInputCode.slice(0,1);
  let newComponent = new musicNote(noteName, octave);
  scoreComponents.push(newComponent);
  notationConsoleLog('new note: ' + scoreComponents[scoreComponents.length-1]);
}

/*
 * scoreComponents should contain objects
 * representing the following things:
 * staves = {
 *   quan: quan,
 *   spac: spac,
 *   tmar: tmar,
 *   spacAdjust: []
 * }
 * clefs = {
 *   noteNameAndOctaveOfCenterLine: noteNameAndOctaveOfCenterLine
 *   reticlePointVerticalOffset: reticlePointVerticleOffset
 * }
 * key sigs
 * barlines
 */

function updateCanvas() {
  resetX();
  clearCanvas();
  updateRender();
}

function resetX() {
  x += 10;
  if (x>390) {
    x = 15;
    ii += 1;
  }
}

function clearCanvas() {
  ctx.fillStyle = "#eeeecc";
  ctx.fillRect(0, 0, c.width, c.height);
}

function updateRender() { //draw stuff
  for (let iii=0; iii<scoreComponents.length; iii++) {
    if (scoreComponents[iii].selected==true) {
      fillStyle = '#238fb3';
    } else {
      fillStyle = '#000000';
    }
    y = yValuesOfNotesRelativeToMiddleLine[scoreComponents[iii].noteName + scoreComponents[iii].octave]+tmar+20+spac*ii;
    drawNoteHead(x,y);
    drawLedgerLines(y);
    resetX();
  }
}

function setAccidentalValue(accidentalValueInput) {
  accidentalValue = accidentalValueInput;
  console.log("accidentalValue = " + accidentalValue);
}


function startOver() {
  clearCanvas();
  x = 15;
  scoreComponents = [];
  notationConsoleLog("Starting over. You just deleted everything.");
}
