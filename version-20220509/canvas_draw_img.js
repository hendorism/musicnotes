const img = new Image();
img.src = "picture.jpg";
img.addEventListener("load", function() {
    ctx1.drawImage(img, 0, 0, 960, 540);
});