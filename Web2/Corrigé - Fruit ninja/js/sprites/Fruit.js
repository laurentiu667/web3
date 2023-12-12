class Fruit {
	constructor() {
		this.velocityY = 0.1;
		this.speedY = -10;

		this.speedX = Math.random() * 5 - 2.5;

		this.x = Math.random() * 700 + 100;
		this.y = 500;
		this.cut = false;

		this.fruitNo =  Math.floor(Math.random() * 5 + 1);

		this.node = document.createElement("div");
		this.node.style.top = this.y + "px";

        this.node.classList.add("fruit");
        this.node.classList.add("fruit_" + this.fruitNo);

		this.node.onclick = e => this.triggerCut(e);

		document.getElementById("game").append(this.node);
	}

	triggerCut(e) {
        if (!this.cut) {
            this.cut = true;

            this.node.classList.remove("fruit_" + this.fruitNo);
            this.node.classList.add("fruit_" + this.fruitNo + "-cut");

            let swordX = e.pageX - document.getElementById("game").offsetLeft - 75;
            let swordY = e.pageY - document.getElementById("game").offsetTop - 50;
            spriteList.push(new SwordSlash(swordX,swordY));

            score++;
            document.getElementById("score").innerHTML = score;
        }
	}

	tick() {
		this.speedY += this.velocityY;
		this.x += this.speedX;
		this.y += this.speedY;

		this.node.style.top = this.y + "px";
		this.node.style.left = this.x + "px";

		let alive = this.y < 500 && life > 0;

		if (!alive) {
			this.node.remove();

			if (!this.cut) {
				hit();
			}
		}

		return alive;
	}
}