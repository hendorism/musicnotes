window.addEventListener("keydown", function(e) {
  // prevent space-bar and arrow-keys from scrolling the page
  // 37 39 38 40 32
  // LE RI UP DO SB
  //
  //
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);
$(document).keypress(function(e){
  notationConsoleDotLog(`You pressed: ${e.which}`);
  createANote(keyMap[e.which]);
});

$(document).keyup(function(e){
  notationConsoleDotLog(`You pressed: ${e.which}`);
  if (e.which == 8){
    startOver();
  } else if (e.which == 38) { //up
    decreaseY_5();
  } else if (e.which == 39) { //right
    increaseX_5();
  } else if (e.which == 40) { //down
    increaseY_5();
  } else if (e.which == 37) { //left
    decreaseX_5();
  } else if (e.which == 32) { //spacebar
    notationConsoleDotLog("spacebar")
  }
  drawReticle(x,y);
  notationConsoleDotLog("x=" + x + ", y=" + y);
  updateRender();
})
var keyMap = {
  "122": "c3", "120": "d3",  "99": "e3", "118": "f3",  "98": "g3", "110": "a3", "109": "b3",
  "97": "c4", "115": "d4", "100": "e4", "102": "f4", "103": "g4", "104": "a4", "106": "b4",
  "113": "c5", "119": "d5", "101": "e5", "114": "f5", "116": "g5", "121": "a5", "117": "b5",
  "49": "c6",  "50": "d6",  "51": "e6",  "52": "f6",  "53": "g6",  "54": "a6",  "55": "b6",
}
function increaseX_5() {x+=5;}
function decreaseX_5() {x-=5;}
function increaseY_5() {y+=5;}
function decreaseY_5() {y-=5;}
function increaseXten() {x+=10;}
function decreaseXten() {x-=10;}
let y = 50;
let x = 15;
let quan = 12;
let spac = 100;
let tmar = 50;
function clearCanvas() {
  ctx.fillStyle = "#eeeecc";
  ctx.fillRect(0, 0, c.width, c.height);
}
var ledgerLineRadius = 8;
var notationConsole = document.getElementById("notationConsole");
var listOfNotesDisplay = document.getElementById("listOfNotesDisplay");
var scoreComponents = [];
var yValueOfNoteRelativeToMiddleLine;
var yValuesOfNotesRelativeToMiddleLine = {
  "b6": -70, "a6": -65, "g6": -60, "f6": -55, "e6": -50, "d6": -45, "c6": -40,
  "b5": -35, "a5": -30, "g5": -25, "f5": -20, "e5": -15, "d5": -10, "c5":  -5,
  "b4":   0, "a4":   5, "g4":  10, "f4":  15, "e4":  20, "d4":  25, "c4":  30,
  "b3":  35, "a3":  40, "g3":  45, "f3":  50, "e3":  55, "d3":  60, "c3":  65
}
let displayAccidental;
var notationConsoleEntryNumber = 0;

function notationConsoleDotLog(notationConsoleLogEntry) {
  notationConsoleEntryNumber ++;
  let lineBreak = document.createElement("BR");
  let entryNumberSpan = document.createElement("SPAN");
  let entryNumber = document.createTextNode(notationConsoleEntryNumber + ": ");
  let entry = document.createTextNode(notationConsoleLogEntry);
  entryNumberSpan.class = "notation-console-entry-number-span";
  entryNumberSpan.appendChild(entryNumber);
  notationConsole.appendChild(lineBreak);
  notationConsole.appendChild(entryNumberSpan);
  notationConsole.appendChild(entry);
  notationConsole.scrollTop = notationConsole.scrollHeight;
}

function createANote(idOfButton, accidentalValue, accidentalIsShown) {
  clearCanvas();
  if (idOfButton != undefined) {
    let noteName = idOfButton.slice(0,2);
    if () {
      displayAccidental = true;
    } else {
      displayAccidental = false;
    }
    scoreComponents.push(new musicNote(noteName.slice(0,1), noteName.slice(1,2), 0));
    notationConsoleDotLog('hi')
    notationConsoleDotLog(`scoreComponents=${scoreComponents}`)
    notationConsoleDotLog(JSON.stringify(scoreComponents[scoreComponents.length-1]))
    notationConsoleDotLog('new note: ' + listOfNotes[listOfNotes.length-1]);
  } else {
    notationConsoleDotLog("error: idOfButton is " + idOfButton);
  }
  if (stavesHaveBeenDrawn == true) {
    drawStaves(quan, spac, tmar);
  }
  x=15;
  ii = 0;
  updateRender()
}

function updateRender() {
  for (iii=0; iii<scoreComponents.length; iii++) {
    if (scoreComponents[iii].selected==true) {
      fillStyle = '#238fb3';
    } else {
      fillStyle = '#000000';
    }
    y = yValuesOfNotesRelativeToMiddleLine[scoreComponents[iii].name + scoreComponents[iii].octave]+tmar+20+spac*ii;
    drawNoteHead(x,y);
    drawLedgerLines(y);
    resetX();
  }
}

function startOver() {
  clearCanvas();
  x = 15;
  scoreComponents = [];
  notationConsoleDotLog("Starting over. You just deleted everything.");
}
  
function drawLedgerLines(yy) {
  let middleLineY = tmar+spac*ii+20;
  let noteHeadY_minus_middleLineY = yy-middleLineY;
  if (noteHeadY_minus_middleLineY<=-30 && -noteHeadY_minus_middleLineY%2===0) {
      for (ledgerLineNumber=0; ledgerLineNumber>(noteHeadY_minus_middleLineY+20)/10; ledgerLineNumber--) {
          drawLine(x-ledgerLineRadius, middleLineY-30+10*ledgerLineNumber, x+ledgerLineRadius, middleLineY-30+10*ledgerLineNumber);
      }
  } else if (noteHeadY_minus_middleLineY<=-30 && -noteHeadY_minus_middleLineY%2===1) {
      for (ledgerLineNumber=0; ledgerLineNumber-1>(noteHeadY_minus_middleLineY+20)/10; ledgerLineNumber--) {
          drawLine(x-ledgerLineRadius, middleLineY-30+10*ledgerLineNumber, x+ledgerLineRadius, middleLineY-30+10*ledgerLineNumber);
      }
  } else if (noteHeadY_minus_middleLineY>=30 && noteHeadY_minus_middleLineY%2===0) {
      for (ledgerLineNumber=0; ledgerLineNumber<=(noteHeadY_minus_middleLineY-30)/10; ledgerLineNumber++) {
          drawLine(x-ledgerLineRadius, middleLineY+30+10*ledgerLineNumber, x+ledgerLineRadius, middleLineY+30+10*ledgerLineNumber);
      }
  } else if (noteHeadY_minus_middleLineY>=30 && noteHeadY_minus_middleLineY%2===1) {
      for (ledgerLineNumber=0; ledgerLineNumber<(noteHeadY_minus_middleLineY-30)/10; ledgerLineNumber++) {
          drawLine(x-ledgerLineRadius, middleLineY+30+10*ledgerLineNumber, x+ledgerLineRadius, middleLineY+30+10*ledgerLineNumber);
      }
  }
}

function resetX() {
  x += 10;
  if (x>390) {
    x = 15;
    ii += 1;
  }
}
