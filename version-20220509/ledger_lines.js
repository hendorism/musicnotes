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