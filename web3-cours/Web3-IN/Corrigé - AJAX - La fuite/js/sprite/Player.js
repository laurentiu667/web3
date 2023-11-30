class Player {
	constructor() {
		this.sprite = new TiledImage("images/player.png", 9, 4, 100, true, 1.0);
		this.sprite.addImage("images/hair.png");
		this.sprite.addImage("images/torso.png");
		this.sprite.addImage("images/pants.png");

		this.x = 450;
		this.y = 130;

		this.setDirection(2);
		this.completed = false;
	}

	setRoom(room) {
		this.room = room;
	}

	setDirection(dir) {
		this.sprite.changeRow(dir);
		this.sprite.changeMinMaxInterval(1, 9);

		if (dir == 0) {				// 0 = up
			this.speedX = 0;
			this.speedY = -1;
		}
		else if (dir == 2) {		// 2 = down
			this.speedX = 0;
			this.speedY = 1;
		}
		else if (dir == 1) {		// 1 = left
			this.speedX = -1;
			this.speedY = 0;
		}
		else if (dir == 3) {		// 3 = right
			this.speedX = 1;
			this.speedY = 0;
		}
	}

	tick() {
		this.nX = this.x + this.speedX;
		this.nY = this.y + this.speedY;

		if (this.room.isValid(this.nX, this.nY)) {
			this.x = this.nX;
			this.y = this.nY;
		}

		if (this.x < 0) {
			if (!this.completed) {
				this.completed = true;
				window.location.href = "http://apps-de-cours.com/meme/working";
			}
		}

		this.sprite.tick(ctx, this.x, this.y);

		return true;
	}
}
