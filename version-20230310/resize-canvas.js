
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  drawStuff();
}

resizeCanvas();
