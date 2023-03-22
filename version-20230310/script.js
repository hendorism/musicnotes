const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

canvas1.style.border = "1px solid red";
canvas1.style.display = "block";

function drawStaff(x, y) {
    ctx1.strokeStyle = "#ff00ff";
    for (i=0; i<5; i++) {
        let x1 = x;
        let y1 = y+10*i;
        let x2 = canvas1.width-10;;
        let y2 = y+10*i;
        
        ctx1.beginPath();
        ctx1.moveTo(x1, y1);
        ctx1.lineTo(x2, y2);
        ctx1.stroke();
    }
}

function drawStaves() {
    for (ii=0; ii<6; ii++) {
        drawStaff(10,10+100*ii)
    }
}

function drawStuff() {
    drawStaves();    
    ctx1.strokeStyle = "#000000";
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.lineTo(10, 150);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(10, 10);
    ctx1.bezierCurveTo(-5, 30, 15, 50, 5, 85);
    ctx1.bezierCurveTo(15, 150-40, -5, 150-20, 10, 150);
    ctx1.stroke();
    //ctx1.beginPath();
    //ctx1.moveTo(20, 60);
    //ctx1.bezierCurveTo(40, 80, 10, 20, 18, 08);
    //ctx1.bezierCurveTo(32, 13, 0, 75, 30, 40);
    //ctx1.stroke();
    ctx1.fillStyle = "#0044ff";
    ctx1.beginPath();
    //x, y, w, h, rotate, start, stop
    ctx1.ellipse(50, 40, 5.5, 3.5, Math.PI * -0.15, Math.PI * 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.ellipse(65, 40, 5.5, 3.5, Math.PI * -0.15, Math.PI * 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.ellipse(90, 10, 5.5, 3.5, Math.PI * -0.15, Math.PI * 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.ellipse(105, 20, 5.5, 3.5, Math.PI * -0.15, Math.PI * 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.moveTo(55, 40);
    ctx1.lineTo(55,12);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(70, 40);
    ctx1.lineTo(70, 12);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(85, 38);
    ctx1.lineTo(85, 10);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(100, 20);
    ctx1.lineTo(100, 48);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(120, 10);
    ctx1.lineTo(120, 150);
    ctx1.stroke();
    let bassClef = new BassClef(13, 120);
    bassClef.draw();
    let trebleClef = new TrebleClef(22, 40);
    trebleClef.draw();
    
}
