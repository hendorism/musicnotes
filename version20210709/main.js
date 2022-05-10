let canv1 = document.getElementById("canvas1");
let ctx1 = canv1.getContext("2d");
canv1.width = 600;
canv1.height = 400;
clearPage();
let ledger_line_radius = 9;
let staff_spacing = 10;
let top_margin = 60;
let system_spacing = 100;
let system = 0;
let note_head_horizontal_spacing = 25;
let note_head_radius = 5;
let notes1 = [];

//basic drawing functions:

function drawLine(x1, y1, x2, y2) {
    ctx1.beginPath();
    ctx1.moveTo(x1, y1);
    ctx1.lineTo(x2, y2);
    ctx1.stroke();
}

function drawLedgerLines(xx, yy) {
    let middle_line_y = top_margin+system_spacing*system+2*staff_spacing;
    let note_head_y_minus_middle_line_y = yy-middle_line_y;
    if (note_head_y_minus_middle_line_y<=-30 && -note_head_y_minus_middle_line_y%2===0) {
        for (ledger_line_number=0; ledger_line_number>(note_head_y_minus_middle_line_y+20)/10; ledger_line_number--) {
            let x1 = xx-ledger_line_radius;
            let y1 = middle_line_y-30+10*ledger_line_number;
            let x2 = xx+ledger_line_radius;
            let y2 = middle_line_y-30+10*ledger_line_number;
            drawLine(x1, y1, x2, y2);
        }
    } else if (note_head_y_minus_middle_line_y<=-30 && -note_head_y_minus_middle_line_y%2===1) {
        for (ledger_line_number=0; ledger_line_number-1>(note_head_y_minus_middle_line_y+20)/10; ledger_line_number--) {
            let x1 = xx-ledger_line_radius;
            let y1 = middle_line_y-30+10*ledger_line_number;
            let x2 = xx+ledger_line_radius;
            let y2 = middle_line_y-30+10*ledger_line_number;
            drawLine(x1, y1, x2, y2);
        }
    } else if (note_head_y_minus_middle_line_y>=30 && note_head_y_minus_middle_line_y%2===0) {
        for (ledger_line_number=0; ledger_line_number<=(note_head_y_minus_middle_line_y-30)/10; ledger_line_number++) {
            let x1 = xx-ledger_line_radius;
            let y1 = middle_line_y+30+10*ledger_line_number;
            let x2 = xx+ledger_line_radius;
            let y2 = middle_line_y+30+10*ledger_line_number;
            drawLine(x1, y1, x2, y2);
        }
    } else if (note_head_y_minus_middle_line_y>=30 && note_head_y_minus_middle_line_y%2===1) {
        for (ledger_line_number=0; ledger_line_number<(note_head_y_minus_middle_line_y-30)/10; ledger_line_number++) {
            let x1 = xx-ledger_line_radius;
            let y1 = middle_line_y+30+10*ledger_line_number;
            let x2 = xx+ledger_line_radius;
            let y2 = middle_line_y+30+10*ledger_line_number;
            drawLine(x1, y1, x2, y2);
        }
    }
  }

function drawStaves() {
    for (e=0; e<12; e++) {
        for (i=0; i<5; i++) {
            let x1 = 10
            let y1 = top_margin+staff_spacing*i+system_spacing*e
            let x2 = canv1.width-10
            let y2 = y1;
            drawLine(x1, y1, x2, y2);
        }
    }
}

//other functions

function createNote(buttonId) {
    let note_name = buttonId.slice(0,1);
    let note_octave = buttonId.slice(1,2);
    notes1.push({name:note_name,octave:note_octave});
    printNotes();
}

function printNotes() {
    clearPage();
    drawStaves();
    system = 0;
    loopNotes();
}

function loopNotes() {
    let x = 30;
    for (i=0; i<notes1.length; i++) {
        if (x > canv1.width-20) {
            system += 1;
            x = x-(x-30);
        }
        let note = notes1[i];
        let pitch = note.name+note.octave;
        let note_y_offset = y_values[pitch];
        let y = top_margin + staff_spacing*2 + system*system_spacing + staff_spacing*note_y_offset;
        drawLedgerLines(x, y);
        drawNoteHead(x, y);
        x += note_head_horizontal_spacing;
    }
}

function clearPage() {
    ctx1.fillStyle = "#eeeecc";
    ctx1.fillRect(0,0,canv1.width, canv1.height);
    ctx1.strokeStyle = "#000000";
    ctx1.strokeRect(0, 0, canv1.width, canv1.height);
}

function drawNoteHead(x, y) {
    ctx1.fillStyle = "#000";
    ctx1.beginPath();
    ctx1.ellipse(x, y, 3*note_head_radius/4, note_head_radius, Math.PI / 3, 0, 2 * Math.PI);
    ctx1.fill();
}

function drawKeySig() {

}

function checkKeySig() {

}

function redundantAccidental(note) {
    if (note)
}

var y_values = {
    b6: -7.0, a6: -6.5, g6: -6.0, f6: -5.5, e6: -5.0, d6: -4.5, c6: -4.0,
    b5: -3.5, a5: -3.0, g5: -2.5, f5: -2.0, e5: -1.5, d5: -1.0, c5: -0.5,
    b4:  0.0, a4:  0.5, g4:  1.0, f4:  1.5, e4:  2.0, d4:  2.5, c4:  3.0,
    b3:  3.5, a3:  4.0, g3:  4.5, f3:  5.0, e3:  5.5, d3:  6.0, c3:  6.5
}

drawStaves();
