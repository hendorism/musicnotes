let strings = [
    {name: "E", pitch: 4, color: "#000000"},
    {name: "A", pitch: 9, color: "#000000"},
    {name: "D", pitch: 2, color: "#000000"},
    {name: "G", pitch: 7, color: "#000000"},
    {name: "C", pitch: 0, color: "#000000"},
    {name: "F", pitch: 5, color: "#000000"},
    {name: "Bb/A#", pitch: 10, color: "#000000"},
    {name: "Eb/D#", pitch: 3, color: "#000000"},
    {name: "Ab/G#", pitch: 8, color: "#000000"},
    {name: "Db/C#", pitch: 1, color: "#000000"},
    {name: "Gb/F#", pitch: 6, color: "#000000"},
    {name: "B", pitch: 11, color: "#000000"}
];

//create an array of coordinates for the fretboard
//make an object for each fret
//each fret has x, y, fretNumber, stringNumber, pitch
//each fret also has a clickable region [[x1, y1], [x1, y2], [x2, y1], [x2, y2]]
let fretboard = [
    {x: 0, y: 0, fretNumber: 0, stringNumber: 0, pitch: 0, clickableRegion: [[0, 0], [0, 0], [0, 0], [0, 0]]},
];

//display the fretboard
function drawFretboard() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.strokeStyle = "#000000";
    ctx1.fillStyle = "#2277bb";
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

}

//drawFretboard();