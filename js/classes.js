function canvas(systemsQuantity, systemsSpacing, marginTop) {
  // how many systems are going to be on that page. is a function of all margins and spacing and page height.
  this.systemsQuantity = systemsQuantity;
  // essentially a bottom-margin for systems in addition to whatever bottom margin for the bottom staff in that system
  this.systemsSpacing = systemsSpacing;
  // top-margin for the music, (gets added to staff top margin) systems do not have top-margin.
  this.marginTop = marginTop;
}
function system(staffQuantity, measuresQuantity) {
  // How many staves in a given system
  this.staffQuantity = staffQuantity;
  // How many measures in a given system
  this.measuresQuantity = measuresQuantity;
}
function staff(marginTop, marginBottom) {
  // a top-margin just for a particular staff
  this.marginTop = marginTop;
  // a bottom-margin just for a particular staff
  this.marginBottom = marginBottom;
}
function musicNote(name, octave, sharpFlat) {
  this.name = name; // e.g. a
  this.octave = octave; // e.g. 4
  //this.duration = duration; // e.g. 4 to mean 1/4 or quarter-note
  this.displayAccidental = false; // false if accidental is implied from key signature
  this.sharpFlat = sharpFlat; // whether the note is natural, flat, sharp, double-sharp etc.
  this.selected = true; // if note is selected, notehed appears different color, and we can do things to it.
}
