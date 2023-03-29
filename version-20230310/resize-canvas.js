
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas1.width = window.innerWidth*0.98;
  canvas1.height = window.innerHeight*0.98;
  drawStuff();
}

resizeCanvas();
