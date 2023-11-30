class Game {
	constructor() {
		this.player = new Player();

		var room = new Room();
		this.player.setRoom(room);

		this.spriteList = []
		this.spriteList.push(room);
		this.spriteList.push(this.player);

		this.smallDelay = new Date();
	}

	fetchAjaxCommand() {
		var tmp = this;

		$.ajax(
			{
				url: "ajax-room.php",
				type: "POST",
				data: {}
			}
		)
		.done(function (msg) {
			var response = JSON.parse(msg);

			if (response !== "" && !isNaN(response)) {
				tmp.player.setDirection(response);
			}
		});
	}

	tick() {
		var delta = (new Date() - this.smallDelay);

		if (delta > 500) {
			this.smallDelay = new Date();
			this.fetchAjaxCommand();
		}

		for (var i = 0; i < this.spriteList.length; i++) {
			var alive = this.spriteList[i].tick();

			if (!alive) {
				this.spriteList.splice(i, 1);
				i--;
			}
		}
	}
}
