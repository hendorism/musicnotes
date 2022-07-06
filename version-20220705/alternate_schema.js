let screen = {
	contents: [],
	background_color: "#336699",
	refresh: function() {
		canv1.width = window.innerWidth;
		canv1.height = window.innerHeight;
		console.log("canv1 dimensions: " + canv1.width + ", " + canv1.height);
		ctx1.fillStyle = screen.background_color;
		ctx1.fillRect(0,0,canv1.width,canv1.height);
		screen.noteConsole.draw();
	}
}

let noteConsole = {
	height: 200,
	width: window.innerWidth,
	x: 0,
	y: 10,
	background_color: "#ddeeff",
	font_color: "#223344",
	contents: ["this", "is", "a", "test"],
	draw: function() {
		ctx1.fillStyle = noteConsole.background_color;
		let x1 = 0;
		let y1 = window.innerHeight-screen.noteConsole.height;
		let x2 = window.innerWidth;
		let y2 = window.innerHeight-y1;
		ctx1.fillRect(x1, y1, x2, y2);
		for (i=0; i<noteConsole.contents.length; i++) {
			ctx1.font = "16px monospace";
			ctx1.fillStyle = "#334488";
			let line = (i+1) + ": " + noteConsole.contents[i];
			ctx1.fillText(line, x1+10, y1+18*(i+1));
		}
	},
	log: function(entry) {
		console.log("noteConsole.log: " + entry);
	}
}
