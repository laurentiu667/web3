class Skeleton {
	constructor() {
		let colCount = 9;
		let rowCount = 4;
		let refreshDelay = 100;
		let loopColumns = true; // ou row?
		let scale = 1.0;

		this.node = document.createElement("div");
		document.querySelector("#game").append(this.node);

		this.tiledImage = new TiledImage(
			"images/skeleton-walk.png",
			colCount,
			rowCount,
			refreshDelay,
			loopColumns,
			scale,
			this.node
		);

		this.tiledImage.changeRow(1);
		this.tiledImage.changeMinMaxInterval(0, 8);

		this.tiledImage.addImage("images/item-hood-walk.png");
		this.tiledImage.addImage("images/item-shield-walk.png");

		this.x = 300;
		this.y = 300;
	}

	tick () {
		if (rightArrowOn) {
			this.tiledImage.changeRow(3);
			this.x++;
		}
		if (leftArrowOn) {
			this.tiledImage.changeRow(1);
			this.x--;
		}

		this.tiledImage.tick(this.x, this.y);
		
		return true;
	}
}