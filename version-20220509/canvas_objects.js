class Circle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let circle = new Circle(200, 200, 23, "red");
circle.draw(ctx1);
