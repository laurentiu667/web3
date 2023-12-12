let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let background = new Image();
let floor = new Image();
let backgroundX = 0;
let floorX = 0;
let floorY = 0;
let spriteList = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", e => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

background.src = "images/background.jpg";
floor.src = "images/floor.png";

spriteList.push(new Hood());

const tick = () => {
	let speedX = -canvas.width/400;
	backgroundX += speedX;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (background.complete) {
		let ratio = background.width/background.height;
		let imgWidth = ratio * canvas.height
		ctx.drawImage(background, backgroundX, 0, imgWidth, canvas.height);
		ctx.drawImage(background, backgroundX + imgWidth - 2, 0, imgWidth, canvas.height);

		if (backgroundX <= -imgWidth) {
			backgroundX += imgWidth;
		}
	}

	if (floor.complete) {
		floorX += speedX * 2;
		let height = canvas.height * 0.1;
		let ratio = floor.width/floor.height;
		let imgWidth = ratio * height;
		ctx.drawImage(floor, floorX, canvas.height - height, imgWidth, height);
		ctx.drawImage(floor, floorX + imgWidth - 2, canvas.height - height, imgWidth, height);
		floorY = canvas.height - height;

		if (floorX <= -imgWidth) {
			floorX += imgWidth;
		}
	}

	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}

tick();