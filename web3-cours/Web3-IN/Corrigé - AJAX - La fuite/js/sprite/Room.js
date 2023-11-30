class Room {
	constructor() {
		this.background = new Image();
		this.background.src = "images/room.jpg";

		this.obstacles = [];
		this.obstacles.push({x : 0, y: 0, w: 170, h: 275});
		this.obstacles.push({x : 0, y: 323, w: 165, h: 170});

		this.obstacles.push({x : 120, y: 0, w: 530, h: 120});
		this.obstacles.push({x : 560, y: 0, w: 80, h: 420});

		this.obstacles.push({x : 440, y: 248, w: 200, h: 200});
		this.obstacles.push({x : 125, y: 370, w: 400, h: 80});

		// Table
		this.obstacles.push({x : 243, y: 167, w: 153, h: 115});

		// Chest
		this.obstacles.push({x : 520, y: 153, w: 40, h: 35});
	}

	isValid(x, y) {
		var valid = true;

		for (var i = 0; i < this.obstacles.length; i++) {
			var obs = this.obstacles[i];

			if (obs.x < x && obs.x + obs.w > x &&
				obs.y < y && obs.y + obs.h > y) {
				valid = false;

				break;
			}
		}

		return valid;
	}

	tick() {
		if (this.background.complete) {
			ctx.drawImage(this.background, 0, 0);
		}

		return true;
	}
}
