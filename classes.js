class canvas {
  constructor(systemsQuantity, systemsSpacing, topMargin) {
    this.systemsQuantity = systemsQuantity;
    this.systemsSpacing = systemsSpacing;
    this.marginTop = marginTop;
  }
}
class system {
  constructor(staffQuantity, measuresQuantity) {
    this.staffQuantity = staffQuantity;
    this.measuresQuantity = measuresQuantity;
  }
}
class staff {
  constructor(marginTop, marginBottom) {
    this.marginTop = marginTop;
    this.marginBottom = marginBottom;
  }
}
class musicnote {
  constructor(name, octave, duration, accidental) {
    this.name = name;
    this.octave = octave;
    this.duration = duration;
    this.accidental = accidental;
  }
}
