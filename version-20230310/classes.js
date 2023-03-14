class NoteHead {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx1.fillStyle = "#000000";
        ctx1.beginPath();
        ctx1.ellipse(this.x, this.y, this.w, this.h, this.rotate, Math.PI * 0, Math.PI * 2);
        ctx1.fill();
    }
}

class BassClef {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx1.fillStyle = "#333333";
        ctx1.strokeStyle = "#333333";
        ctx1.beginPath();
        ctx1.ellipse(this.x+3, this.y+0, 3, 3, Math.PI*0, Math.PI*0, Math.PI*2);
        ctx1.fill();
        ctx1.beginPath();
        ctx1.moveTo(this.x, this.y);
        let x2 = this.x+10;
        let y2 = this.y-30;
        let x3 = this.x+30;
        let y3 = this.y+20;
        let x4 = this.x+0;
        let y4 = this.y+30;
        ctx1.bezierCurveTo(x2, y2, x3, y3, x4, y4);
        ctx1.stroke();
        ctx1.beginPath();
        ctx1.ellipse(this.x+20, this.y-5, 2, 2, Math.PI*0, Math.PI*0, Math.PI*2);
        ctx1.fill();
        ctx1.beginPath();
        ctx1.ellipse(this.x+20, this.y+5, 2, 2, Math.PI*0, Math.PI*0, Math.PI*2);
        ctx1.fill();
    }
}

class GrandStaff {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx1.fillStyle = "#333333";
        ctx1.strokeStyle = "#333333";
        ctx1.beginPath();
        ctx1.moveTo(10, 10);
        let x2 = this.x - 15;
        let y2 = this.y + 20;
        let x3 = this.x + 5;
        let y3 = this.y + 40;
        let x4 = this.x - 5;
        let y4 = this.y + 75;
        ctx1.bezierCurveTo(x2, y2, x3, y3, x4, y4);
        let x5 = this.x + 5;
        let y5 = this.y + (150-40) - 10;
        let x6 = this.x - 5 - 10;
        let y6 = this.y + (150-20) - 10;
        let x7 = this.x + 10 - 10;
        let y7 = this.y + 150 - 10;
        ctx1.bezierCurveTo(x5, y5, x6, y6, x7, y7);
        ctx1.stroke();
    }
}

class TrebleClef {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // ctx1.fillStyle = "#bb0000";
        // ctx1.beginPath();
        // ctx1.ellipse(this.x, this.y, 2, 2, Math.PI*0, Math.PI*0, Math.PI*2);
        // ctx1.fill();
        ctx1.fillStyle = "#333333";
        ctx1.strokeStyle = "#333333";
        ctx1.beginPath();
        ctx1.moveTo(this.x-3, this.y+20);
        let x2 = this.x+10;
        let y2 = this.y + 40;
        let x3 = this.x - 16;
        let y3 = this.y - 35;
        let x4 = this.x ;
        let y4 = this.y - 30;
        let x5 = this.x ;
        let y5 = this.y -10;
        let x6 = this.x - 20;
        let y6 = this.y + 30;
        let x7 = this.x+7;
        let y7 = this.y-5;
        ctx1.bezierCurveTo(x2, y2, x3, y3, x4, y4);
        ctx1.bezierCurveTo(x5, y5, x6, y6, x7, y7);
        ctx1.stroke();
        // let c = [
        //     [this.x, this.y], [x2, y2],
        //     [x3, y3], [x4, y4], [x5, y5],
        //     [x6, y6], [x7, y7]
        // ];
        // for (i=0; i<c.length; i++) {
        //     ctx1.beginPath();
        //     ctx1.ellipse(c[i][0], c[i][1], (i+3)/3, (i+3)/3, Math.PI*0, Math.PI*0, Math.PI*2);
        //     ctx1.fill();
        // }
    }
}