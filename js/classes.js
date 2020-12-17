function staves(stavesQuantity, stavesSpacing, stavesTopMargin) {
  this.draw = drawStaves(stavesQuantity, stavesSpacing, stavesTopMargin);
}

function musicNote(name, octave, sharpFlat) {
  this.name = name; // e.g. a
  this.octave = octave; // e.g. 4
  this.displayAccidental = displayAccidental; // false if accidental is implied from key signature
  this.sharpFlat = sharpFlat; // whether the note is natural, flat, sharp, double-sharp etc.
  this.selected = true; // if note is selected, notehed appears different color, and we can do things to it.
}
class pointerReticle {
  constructor() {
    this.x = 10;
    this.y = 100;
  }
}