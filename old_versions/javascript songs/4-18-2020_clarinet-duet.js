//Start drawing music.
// 4-18-2020_clarinet-duet.js
//
const noteSpacing = 19; 
console.log("4-18-2020_clarinet-duet.js is working.");
function song(){
    ctx.font = "16px monospace";
    ctx.fillText("Bb clarinet",10,80);
    drawStaves(6,80,100);
    drawTrebleCleff(30,130);
    drawKeySignature(45,120,3);
    drawTimeSignature(65,120,4,4);
    drawTrebleCleff(30,200);
    drawKeySignature(45,200,3);
    drawTimeSignature(65,200,4,4);
    
    ctx.font = "16px monospace";
    ctx.fillStyle = "#ff6699";
    ctx.fillText("4-18-2020_clarinet-duet",100,25);
    ctx.fillStyle = "#000000";
    ctx.fillText("two Bb clarinets",10,75);
    drawThickLine(20,100,20,220);
    var clarinet1_line1_y = [
        95,100,105,105+35,
        150,125,100,135,
        135,100,110,110,
        125,140,135,130,
        200
    ]
    var clarinet1_line1 = []
    for(i=0;i<clarinet1_line1_y.length;i++){
        if(90+i*noteSpacing<380){
            if(i==clarinet1_line1_y.length-1){
                clarinet1_line1.push({
                    "x":90+i*noteSpacing,
                    "y":clarinet1_line1_y[i],
                    "accidental":"00"
                })
            } else {
                clarinet1_line1.push({
                    "x":90+i*noteSpacing,
                    "y":clarinet1_line1_y[i],
                    "accidental":"0"
                })
            }
        } else {
            var staff = 0
            staff++
            console.log("staff = "+staff)
            if(i==clarinet1_line1_y.length-1){
                clarinet1_line1.push({
                    "x":,
                    "y":clarinet1_line1_y[i],
                    "accidental":"00"
                })
            } else {
                clarinet1_line1.push({
                    "x":90+i*noteSpacing,
                    "y":clarinet1_line1_y[i],
                    "accidental":"0"
                })
            }
        }
    }
    console.log(clarinet1_line1)
     
    for(i=0;i<clarinet1_line1_y.length;i++){
        drawNoteHead(90+i*noteSpacing,clarinet1_line1_y[i])
        let x = 90+i*noteSpacing+3
        drawLine(x,clarinet1_line1_y[i],x,80)
        if(i%4==0){
            console.log(clarinet1_line1_y[i])
            drawThickLine(x,80,x+3*noteSpacing,80)
            drawThickLine(x,85,x+3*noteSpacing,85)
        }
    }
    // for(i=0;i<clarinet1_line1_y,length;i++){
    // }


//    drawNoteHead(90,95)
//    drawNoteHead(100,)


}
song();

    // const song = [
    //     const clarinet1 = [
    //         {
    //             "x":90,
    //             "y":95,
    //             "accidental":0
    //         },
    //         {}
    //     ],
    //     const clarinet2 = [
    //         {
    //             "x":90,
    //             "y":
    //         },
    //         {}
    //     ],
    // ]

    




// Function drawSong replaces function drawStaves and includes
// iterating through all the notes to draw them to the staves.
// drawSong iterates through parts array.
// Parts array contains arrays part1 and part2.
// Each part array contains an object for each note.
// Each note object contains x,y, and accidental values.
// x: x coordinate
// y: y coordinate
// accidental: indicates whether the note will
// have an accidental displayed next to it.
// 0 will draw no accidental
// 1 and 2 draw sharp and double-sharp.
// -1 and -2 draw flat and double-flat.
// function drawSong takes
// sq: staves quantity
// ss: staves spacing
// tm: top margin
// pq: parts quantity
function drawSong(sq,ss,tm,pq){
    for(i=0;i<parts.length;i++){
        for(e=0;e<parts[i][e].length;e++){
            if(parts[i][e].accidental==0){
                drawNoteHead(parts[i][e].x,parts[i][e].y)
            }
        }
    }

}


console.log("4-18-2020_clarinet-duet.js is working.");