class Hood {
	constructor() {
		let columnCount = 24;
		let rowCount = 1;
		let refreshDelay = 40; // msec
		let loopColumn = true;
		let scale = 3.0;
        
		this.tiledImage = new TiledImage("images/run.png", columnCount, rowCount, refreshDelay, loopColumn, scale);
		this.tiledImage.changeRow(0);
		this.tiledImage.changeMinMaxInterval(0, 23);

		this.x = 300;
		this.y = 100;
	}

	tick () {
		this.tiledImage.tick(this.x, floorY - this.tiledImage.getActualHeight()/4, ctx);
		return true;
	}
}