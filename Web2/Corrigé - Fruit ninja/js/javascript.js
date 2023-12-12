let spriteList = [];
let score = 0;
let life = 0;

window.addEventListener("load", () => {
	document.getElementById("game-over").onclick= () => {
		if (life == 0) {
			initGame();
		}
	}

	initGame();

	tick();
});

const initGame = () => {
	score = 0;
	life = 3;
	document.getElementById("score").innerHTML = score;
	document.getElementById("life").innerHTML = life;
	document.getElementById("game").style.display = "block";
	document.getElementById("game-over").style.display = "none";
}

const hit = () => {
	if (life > 0) {
		life--;
		document.getElementById("life").innerHTML = life;

		if (life == 0) {
			document.getElementById("game").style.display = "none";
			document.getElementById("game-over").style.display = "block";
		}
	}
}

const tick = () => {
	if (life > 0) {
		if (Math.random() < 0.01) {
			spriteList.push(new Fruit());
		}
	}

	for (let i = 0; i < spriteList.length; i++) {
		if (!spriteList[i].tick()) {
			spriteList.splice(i, 1);
		}
	}

	window.requestAnimationFrame(tick);
}