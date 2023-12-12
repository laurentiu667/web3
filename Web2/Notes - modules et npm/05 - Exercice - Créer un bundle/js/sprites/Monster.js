class Monster {
	constructor () {
		this.node = document.createElement("div");
		this.node.className = "monster";
		document.querySelector("main").appendChild(this.node);

		this.velocityX = 0;
		this.velocityY = 0;
		this.velocityFactor = 0.2;
		this.currentPosX = 800 - Math.random() * 1600;
		this.currentPosY = 800 - Math.random() * 1600;
		this.maxVelocityX = 8;
		this.maxVelocityY = 8;
	}

	tick() {
		if (this.currentPosX < posX) {
			if (this.velocityX < this.maxVelocityX) {
				this.velocityX += this.velocityFactor;
			}
		}
		else if (this.currentPosX > posX) {
			if (this.velocityX > -this.maxVelocityX) {
				this.velocityX -= this.velocityFactor;
			}
		}

		if (this.currentPosY < posY) {
			if (this.velocityY < this.maxVelocityY) {
				this.velocityY += this.velocityFactor;
			}
		}
		else if (this.currentPosY > posY) {
			if (this.velocityY > -this.maxVelocityY) {
				this.velocityY -= this.velocityFactor;
			}
		}

		this.currentPosX += this.velocityX;
		this.currentPosY += this.velocityY;

		this.node.style.left = this.currentPosX + "px";
		this.node.style.top = this.currentPosY + "px";

		let angle = getElementAngle(this.currentPosX, this.currentPosY, posX, posY);
		rotateElement(this.node, angle);

		return true;
	}
}