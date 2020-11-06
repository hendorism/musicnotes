// using music_notation_v0018.js
console.log("Play Doh's Notes.js is working");
console.log("Play Doh's Notes.js is finished working");

// make function for clearing the canvas every time a song is loaded.
/* 

function opensong(song) {
//song is a string with the filename of the song's .js file
    if (song.type != string) {
           
    }
}
*/

ctx.font = "30px Arial";
ctx.fillText("Play Doh's Notes",10,45);
ctx.fillText("flute",20,80);
drawStaves(12,80,100)
drawTrebleCleff(20,155)
drawTimeSignature(4,4)
drawTrebleCleff(20,235)
drawKeySignature(35,120,-2)
ctx.strokeStyle = "#fff"

// BEAT 1-1
drawNoteHead(50,130)//g4
drawNoteHead(60,125)//a4
drawNoteHead(70,120)//b4
drawNoteHead(80,110)//d5
drawLine(45,130,50,100)
drawLine(55,125,60,95)
drawLine(65,120,70,90)
drawLine(75,110,80,85)
drawThickBezier(50,60,70,80,100,110,80,85)

// BEAT 1-2
drawNoteHead(90,125)//a4
drawNoteHead(100,120)//b4
drawNoteHead(110,110)//d5
drawNoteHead(120,100)//f5
drawLine(85,125,90,95)
drawLine(95,120,100,90)
drawLine(105,110,110,85)
drawLine(115,100,120,80)
drawThickBezier(90,100,110,120,95,100,75,80)

// BEAT 1-3
drawNoteHead(130,120)//b4
drawNoteHead(140,110)//d5
drawNoteHead(150,100)//f5
drawNoteHead(160,95)//g5
drawLine(125,120,130,90)
drawLine(135,110,140,80)
drawLine(145,100,150,75)
drawLine(155,95,160,75)
drawThickBezier(130,140,150,160,90,74,77,75)

// BEAT 1-4
drawNoteHead(170,110)//d5
drawNoteHead(180,100)//f5
drawNoteHead(190,95)//g5
drawNoteHead(200,85)//b5
drawLine(165,110,170,85)
drawLine(175,100,180,77)
drawLine(185,95,190,70)
drawLine(195,85,200,65)
drawThickBezier(170,180,195,200,85,75,60,65)

drawLine(205,140,205,100)

//BEAT 2-1
drawNoteHead(170,110)//d5
drawNoteHead(180,100)//f5
drawNoteHead(190,95)//g5
drawNoteHead(200,85)//b5
drawLine(165,110,170,85)
drawLine(175,100,180,77)
drawLine(185,95,190,70)
drawLine(195,85,200,65)
drawThickBezier(170,180,195,200,85,75,60,65)

// BEAT 2-2
drawNoteHead(170,110)//d5
drawNoteHead(180,100)//f5
drawNoteHead(190,95)//g5
drawNoteHead(200,85)//b5
drawLine(165,110,170,85)
drawLine(175,100,180,77)
drawLine(185,95,190,70)
drawLine(195,85,200,65)
drawThickBezier(170,180,195,200,85,75,60,65)

// BEAT 2-3
drawNoteHead(170,110)//d5
drawNoteHead(180,100)//f5
drawNoteHead(190,95)//g5
drawNoteHead(200,85)//b5
drawLine(165,110,170,85)
drawLine(175,100,180,77)
drawLine(185,95,190,70)
drawLine(195,85,200,65)
drawThickBezier(170,180,195,200,85,75,60,65)

// BEAT 2-4
drawNoteHead(170,110)//d5
drawNoteHead(180,100)//f5
drawNoteHead(190,95)//g5
drawNoteHead(200,85)//b5
drawLine(165,110,170,85)
drawLine(175,100,180,77)
drawLine(185,95,190,70)
drawLine(195,85,200,65)
drawThickBezier(170,180,195,200,85,75,60,65)









