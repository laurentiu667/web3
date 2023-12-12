let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let background = new Image();
let x = 0;
let speedX = -4;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", e => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

background.src = "images/background.jpg";


const tick = () => {
	x += speedX;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (background.complete) {
		let ratio = background.width/background.height;
		let imgWidth = ratio * canvas.height
		
		ctx.drawImage(background, x, 0, imgWidth, canvas.height);
		ctx.drawImage(background, x + imgWidth - 2, 0, imgWidth, canvas.height);

		if (x <= -imgWidth) {
			x += imgWidth;
		}
	}

	window.requestAnimationFrame(tick);
}

tick();