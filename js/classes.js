$(document).ready(function(){ //jquery
console.log("js/classes.js has loaded")
// class staves {
//   constructor(stavesQuantity, stavesSpacing, stavesTopMargin) {
//     this.draw = drawStaves(stavesQuantity, stavesSpacing, stavesTopMargin);
//   }
// }

// class musicNote {
//   constructor(name, octave, accidental) {
//     this.name = name; // e.g. a
//     this.octave = octave; // e.g. 4
//     this.displayAccidental = displayAccidental; // false if accidental is implied from key signature
//     this.accidental = accidental; // whether the note is natural, flat, sharp, double-sharp etc.
//     this.selected = true; // if note is selected, notehed appears different color, and we can do things to it.
//   }
// }
});// end jquery
function musicNote(noteName, octave) {
  this.noteName = noteName;
  this.octave = octave;
}

let brobrobrobro = new musicNote("c", "4", "-1");
console.log(brobrobrobro);
