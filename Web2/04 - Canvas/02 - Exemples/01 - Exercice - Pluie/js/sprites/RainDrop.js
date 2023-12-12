export default class RainDrop {
    constructor(mainWidth, mainHeight) {
        this.x = Math.random() * mainWidth;
        this.y = Math.random() * -10;
        this.size = Math.random() * 2 + 1;
        this.baseSpeed = 6;

        this.maxHeight = mainHeight;
    }

    tick(ctx) {
		ctx.fillStyle = "rgba(30, 30, 220, 0.8)";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

		this.y += this.size + this.baseSpeed;

		return this.y > this.maxHeight;
	}
}
