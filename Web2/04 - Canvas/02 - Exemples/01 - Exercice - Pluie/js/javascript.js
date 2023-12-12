import RainDrop from './sprites/RainDrop.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let layer1 = new Image();
let layer2 = new Image();
let rainDropList = new Array();

let mainWidth = canvas.width;
let mainHeight = canvas.height;

layer1.src = "images/layer1.png";
layer2.src = "images/layer2.png";

const tick = () => {
	if (layer2.complete) {
		ctx.drawImage(layer2, 0, 0);
	}

	if (Math.random() < 0.7) {
		rainDropList.push(new RainDrop(mainWidth, mainHeight));
	}

	for (let i = 0; i < rainDropList.length; i++) {
		let toRemove = rainDropList[i].tick(ctx);

		if (toRemove) {
			rainDropList.splice(i, 1);
			i--;
		}
	}

	if (layer1.complete) {
		ctx.drawImage(layer1, 0, 0);
	}

	window.requestAnimationFrame(tick);
}

tick();