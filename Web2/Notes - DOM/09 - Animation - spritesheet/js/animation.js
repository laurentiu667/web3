let spriteList = [];

let leftArrowOn = false;
let rightArrowOn = false;

window.addEventListener("load", () => {
	spriteList.push(new Skeleton());

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

document.addEventListener("keydown", e => {
	if (e.key == "ArrowLeft") leftArrowOn = true;
	else if (e.key == "ArrowRight") rightArrowOn = true;
});

document.addEventListener("keyup", e => {
	if (e.key == "ArrowLeft") leftArrowOn = false;
	else if (e.key == "ArrowRight") rightArrowOn = false;
});