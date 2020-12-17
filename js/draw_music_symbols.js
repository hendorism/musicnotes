console.log("music_notation_v0018.js is working.");
console.log("music_notation_v0018.js was made by Aaron Dull in 2019.");

const c = document.getElementById("music-notation-canvas");
const ctx = c.getContext("2d");
c.width = 400;
c.height = 1200;
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 0, c.width, c.height);
ctx.fillStyle = "#eeeecc";
ctx.fillRect(0,0,c.width, c.height);

const noteHeadRadius = 4;
const lineWidth = 1;
const thickLineWidth = 2.5;

function drawReticle(x,y,ctx){
    ctx.fillStyle = '#77f';
    ctx.beginPath();
    ctx.arc(x,y,4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function drawStaves(stavesQuantity,stavesSpacing,topMargin){
    for(e=0;e<stavesQuantity;e++){
        for(i=0;i<5;i++){
            drawLine(10,topMargin+10*i+stavesSpacing*e, 390,topMargin+10*i+stavesSpacing*e);
        }
    }
}

function crossBeams(q, x1, y1, x2, y2) {
  for (i=0; i<q; i++) {
    drawThickLine(x1, y1+5*i, x2, y2+5*i);
  }
}

function drawTrebleCleff(x,y,ctx){
    drawReticle(x,y);
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.beginPath ();
    ctx.moveTo (x-5,y+20);
    ctx.bezierCurveTo (
    x+3,y+40,
    x+4,y+15,
    x-4,y-40);
    ctx.bezierCurveTo (
    x+16,y-35,
    x-20,y-4,
    x-4,y+14);
    ctx.bezierCurveTo (
    x+16,y+35,
    x+10,y-45,
    x-4,y+5);
    ctx.stroke ();
}

function drawTimeSignature(x,y,n,d){
    //drawReticle();
    ctx.font = "26px Arial";
    ctx.fillText(n,x-7,y-1);
    ctx.fillText(d,x-7,y+20);
}

function drawLine(x1,y1,x2,y2){
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
}

function drawBezier(x1,x2,x3,x4,y1,y2,y3,y4) {
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
}

function drawThickLine(x1,y1, x2, y2){
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath();
    ctx.moveTo   ( x1, y1 );
    ctx.lineTo   ( x2, y2 );
    ctx.stroke   ();
}

function drawThickBezier(x1,x2,x3,x4,y1,y2,y3,y4) {
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
}

function drawFlat(x,y){
    //drawReticle (x,y);
    ctx.beginPath();
    ctx.moveTo(x-1,y-13);
    ctx.lineTo(x-3,y+4);
    ctx.bezierCurveTo( x+5,y+1, x+5,y-5, x-3,y-1   );
    ctx.bezierCurveTo( x+5,y-5, x+5,y+1, x-3,y+4   );
    ctx.stroke();
}

function drawDoubleFlat(x,y){
    //drawReticle(x,y);
    drawFlat(x,y);
    drawFlat(x-5,y);
}

function drawSharp(x,y){
    //drawReticle(x,y);
    ctx.font = "18px arial"
    ctx.fillText("#",x-4,y+7);
}

function drawDoubleSharp(x,y){
    //drawReticle(x,y);
    ctx.font = "16px arial"
    ctx.fillText("x",x-4,y+5);
}

function drawNatural(x,y){
    //drawReticle(x,y);
    drawLine(x-2,y-8,x-2,y+5);
    drawLine(x-2,y+0,x+2,y-5);
    drawLine(x-2,y+5,x+2,y-0);
    drawLine(x+2,y-5,x+2,y+8);
}

function drawNoteHead(x,y){
    //ctx.beginPath();
    //ctx.arc(x,y,noteHeadRadius,0,Math.PI*2,true);
    //ctx.closePath();
    //ctx.fill();
    //ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x, y, 6/2, 8/2, Math.PI / 3, 0, 2 * Math.PI);
    ctx.fill();
}

function drawEighthRest(x,y){
  let m = 1;
  let radians = (2/3)*Math.PI;
  ctx.fillStyle = "#000";
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.arc(x,y-1,2.5*m,Math.PI*0.5,Math.PI*-2.5,true);
  //ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x+2.5*Math.cos(radians),y+2.5*Math.sin(radians)-1);
  ctx.bezierCurveTo(x+4, y+2.5, x+6, y, x+8, y-2);
  ctx.lineTo(x+4,y+17);
  ctx.stroke();
}

function drawQuarterRest(x,y) {
  let m = 10;
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y+2);
  ctx.bezierCurveTo(x-3, y, x-8, y-2, x-4, y+9);
  ctx.bezierCurveTo(x-10, y-3, x-6, y-5, x, y+2);
  ctx.fill();
  ctx.lineTo(x-7,y-9);
  ctx.bezierCurveTo(x-3, y-13, x-3, y-15, x-6, y-19);
  ctx.lineTo(x+1,y-10);
  ctx.bezierCurveTo(x-5, y-9, x-3, y-3, x, y);
  ctx.fill();
  ctx.stroke();
}

function drawKeySignature(x,y,a){
    let orderOfFlats  = [0,-15,5,-10,10,-5,15];
    let orderOfSharps = [-20,-5,-25,-10,5,-15,0];
    //drawReticle(x,y);
    if (a<0) {
        for(i=0;i>a;i-=1){
            drawFlat(x+5*-i,y+orderOfFlats[-i]);
        }
    } else if (a>0) {
        for(i=0;i<a;i++){
            drawSharp(x+5*i,y+orderOfSharps[i]);
        }
    }
}

function drawTuplet(t,x1,y1,x2,y2,x3,y3,xt,yt,x4,y4,x5,y5,x6,y6,ctx) {
    ctx.lineWidth = lineWidth;
    drawLine(x1,y1,x2,y2);
    drawLine(x2,y2,x3,y3);
    ctx.font = "18px monospace";
    ctx.fillText(t,xt,yt);
    drawLine(x4,y4,x5,y5);
    drawLine(x5,y5,x6,y6);
    //ctx.beginPath();
    //ctx.moveTo(x1, y1);
    //ctx.lineTo(x2, y2);
    //ctx.lineTo(x3, y3);
    //ctx.stroke();

    //ctx.moveTo(x4, y4);
    //ctx.lineTo(x5, y5);
    //ctx.lineTo(x6, y6);
    //ctx.stroke();
}

console.log("music_notation_v0018.js is finished working.");























