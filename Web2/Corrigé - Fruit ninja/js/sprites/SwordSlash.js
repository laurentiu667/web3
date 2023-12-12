class SwordSlash {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.counter = 10;

		this.node = document.createElement("div");
		this.node.classList.add("sword-slash");
		this.node.style.left = this.x + "px";
		this.node.style.top = this.y + "px";
		document.getElementById("game").append(this.node);
	}

	tick() {
		this.counter--;

		let alive = this.counter > 0 && life > 0;

		if (!alive) {
			this.node.remove();
		}

		return alive;
	}
}