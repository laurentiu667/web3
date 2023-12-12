const MONSTER_COUNT = 10;

let spriteList = new Array();

// N'oubliez pas que posX et posY ne seront pas visible dans la classe Monster, vous
// aurez donc à passer ces positions en paramètre de la fonction tick du monstre, ou à les exporter
let posX = 500;
let posY = 350;

window.addEventListener("load", () => {
	for (let i = 0; i < MONSTER_COUNT; i++) {
		spriteList.push(new Monster());
	}

	document.querySelector("main").onmousemove = event => {
		posX = event.x;
		posY = event.y;
	}

	tick();
});

const tick = () => {
	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}