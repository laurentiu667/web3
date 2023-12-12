class FireWallBreakVisuals
{
	constructor() {
		this.color = MATRIX_COLOR;
		this.length = 120;
		this.step = 1 / this.length;
		this.progression = 0;
		this.x = canvas.width * 0.3;
		this.y = canvas.height / 2;
		this.size = canvas.height / 1.7;
		this.shake = this.size / 10;
	}

	draw() {
		if (this.progression > 0) {
			ctx.font = this.size + "px Courier New";
			ctx.fillStyle = this.color.get(this.progression);
			const x = Math.random() * this.shake + this.x;
			const y = Math.random() * this.shake + this.y;
			ctx.fillText(numWallsDestroyed, x, y);
			this.progression -= this.step;
		}
	}

	start() {
		numWallsDestroyed++;
		this.progression = 1;
	}

	getRandomPoint() {
		return { "x" : Math.random() * canvas.width, "y" : Math.random() * canvas.height };
	}
}

class FireWall
{
	constructor(bottomLeftX, bottomLeftY) {
		this.x = bottomLeftX;
		this.y = bottomLeftY - FIREWALL_HEIGHT;
		this.lastX = this.x;
		this.lastY = this.y;
		this.width = FIREWALL_WIDTH;
		this.height = FIREWALL_HEIGHT;
        this.glitters = [];
        this.glitterColor = new AlphaInterpolator("#FF5555");
	}

	getRandomPoint() {
		return { "x" : Math.random() * this.width + this.x, "y" : Math.random() * this.height + this.y };
	}

	draw() {
		this.lastX = this.x;
		this.x -= terrainSpeed;
		ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 5.5;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        const numGlitters = 5 * P_MUL;
		for (let i = 0; i < numGlitters; i++) {
			this.glitters.push(new Glitter(this, GRAVITY * 10, Math.PI / 2, 10, this.glitterColor, 4));
		}
		for (let i = 0; i < this.glitters.length; i++) {
			const element = this.glitters[i];
			element.draw();
			const alive = element.tick();
			if (!alive) {
				this.glitters.splice(i, 1);
				i--;
			}
		}
	}
}

class ColorInterpolator
{
	constructor(c1, c2) {
		this.r1 = parseInt(c1[1] + c1[2], 16);
		this.g1 = parseInt(c1[3] + c1[4], 16);
		this.b1 = parseInt(c1[5] + c1[6], 16);
		this.r2 = parseInt(c2[1] + c2[2], 16);
		this.g2 = parseInt(c2[3] + c2[4], 16);
		this.b2 = parseInt(c2[5] + c2[6], 16);
	}

	get(ratio) {
		const inv = 1 - ratio;
		return "rgb(" + (this.r1 * inv + this.r2 * ratio) + ", " + (this.g1 * inv + this.g2 * ratio) + ", " + (this.b1 * inv + this.b2 * ratio) + ")";
	}
}

class AlphaInterpolator
{
	constructor(c) {
		const r = parseInt(c[1] + c[2], 16);
		const g = parseInt(c[3] + c[4], 16);
		const b = parseInt(c[6] + c[6], 16);
		this.str = "rgba(" + r + "," + g + "," + b + ",";
	}

	get(alpha) {
		return this.str + alpha + ")";
	}
}

const RECT_Y_SPACING = 25;
const SHAKING = 5;
class DashVisuals
{
	constructor()
	{
		const NB_RECTS = canvas.height / RECT_Y_SPACING;
		this.rects = [];
		for (let i = 0; i < NB_RECTS; i++) {
			const x = Math.random() * canvas.width - canvas.width;
			const y = i * RECT_Y_SPACING;
			this.rects.push({ "x" : x, "y" : y, "z" : this.z = Math.random() * 0.8 + 0.2 });
		}
	}

	draw(opacity) {
		this.rects.forEach(element => {
			ctx.font = element.z * 40 + "px Courier New";
			ctx.fillStyle = MATRIX_COLOR.get(opacity);
			const x = element.x + terrainSpeed * opacity ** 1.5 * 20 * element.z ** 2;
			const y = element.y + Math.random() * SHAKING * element.z - SHAKING * element.z / 2;
			ctx.fillText("01001011 10111010 00011001 10010111 11100111 01001010 01100111 11100011 1000111 100100111 01001011 10111010 00011001 10010111 11100111 01001010 01100111 11100011 1000111 100100111", x, y);
		});
	}
}

const ActionState = {
	ready : 0,
	starting : 1,
	doing : 2,
	stoping : 3,
	resting : 4
}

class Glitter
{
	constructor(shape, vel, velAngle, turbMod, colorInterpolator, size = 6)
	{
		const randVel = Math.random() ** 1.5 * vel * 0.7 + vel * 0.3;
		let randAngel = Math.random() ** 6 * Math.PI / 4;
		randAngel = Math.random() > 0.5 ? randAngel : -randAngel;
		randAngel += velAngle;
		this.xVel = -Math.sin(randAngel) * randVel;
		this.yVel = Math.cos(randAngel) * randVel;
		this.turbMod = turbMod;
		this.colorInterpolator = colorInterpolator;
		this.size = size;

		const point = shape.getRandomPoint();
		this.x = point.x;
		this.y = point.y;
		this.xAcc = 0;
		this.yAcc = 0;
		this.ttl = Math.random() * (TURB_MAX_TLL - TURB_MIN_TLL) + TURB_MIN_TLL;
	}

	tick()
	{
		const turbulanceAngle = Math.random() * Math.PI * 2;
		const turbulanceAmplitude = Math.random() * TURB_EVOL_SPEED - TURB_EVOL_SPEED / 2;
		this.xAcc -= Math.sin(turbulanceAngle) * turbulanceAmplitude * this.turbMod;
		this.yAcc += Math.cos(turbulanceAngle) * turbulanceAmplitude * this.turbMod;
		this.xVel += this.xAcc;
		this.yVel += this.yAcc;
		this.x += this.xVel;
		this.x -= terrainSpeed;
		this.y += this.yVel;

		this.ttl -= 1;

		return (this.ttl >= 0);
	}

	draw()
	{
		const progression = this.ttl / TURB_MAX_TLL;
		ctx.fillStyle = this.colorInterpolator.get(progression);
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}

class Block
{
	constructor(x)
	{
		this.x = x;
		const emptyBlock = Math.random() < 0.33;
		this.width = (Math.random() * (MAX_BLOCK_WIDTH - MIN_BLOCK_WIDTH) + MIN_BLOCK_WIDTH) * canvas.width;
		if (emptyBlock) {
			this.width **= 0.8;
			this.height = -10000;
		} else {
			this.height = (Math.random() * (MAX_BLOCK_HEIGHT - MIN_BLOCK_HEIGHT) + MIN_BLOCK_HEIGHT) * canvas.height;;
		}
		this.rampTimeLeft = 0
		this.initialRampTime = 0;

		fireWallCountDown--;
		if (fireWallCountDown <= 0 && !emptyBlock) {
			fireWall = new FireWall(Math.random() * this.width + this.x, canvas.height - this.height);
			fireWallCountDown = FIREWALL_COUNTDOWN_DURATION;
		}
	}

	setColorRamp(rampTime)
	{
		this.initialRampTime = rampTime;
		this.rampTimeLeft = rampTime;
	}

	draw()
	{
		if (this.rampTimeLeft <= 0) {
			ctx.fillStyle = BLOCK_COLOR.get(0);
			ctx.fillRect(this.x, canvas.height - this.height, this.width, this.height);
		} else {
			const progression = this.rampTimeLeft / this.initialRampTime;
			ctx.fillStyle = BLOCK_COLOR.get(progression);
			this.rampTimeLeft -= 1;
			ctx.fillRect(this.x, canvas.height - this.height, this.width, this.height);
		}
	}

	getRight()
	{
		return this.x + this.width - 1;
	}
}

class Terrain
{
	constructor()
	{
		let block = new Block(0);
		block.width = canvas.width;
		block.height = canvas.height;
		this.blocks = [block]

		this.fill();
	}

	tick()
	{
		this.blocks.forEach(element => {
			element.x -= terrainSpeed;
		});
		this.fill();
	}

	draw()
	{
		this.blocks.forEach(element => {
			element.draw();
		})
	}

	fill()
	{
		if (this.blocks.length <= 0) {
			this.blocks.push(new Block(0));
		}
		while (this.getRight() <= canvas.width) {
			this.blocks.push(new Block(this.getRight()));
		}
	}

	getBlockAt(x)
	{
		for (let i = 0; i < this.blocks.length; i++) {
			const element = this.blocks[i];
			if (element.getRight() >= x) {
				return element;
			}
		}
		return null;
	}

	getRight()
	{
		return this.blocks[this.blocks.length - 1].getRight();
	}
}

class Ball
{
	constructor(x, y, radius, terrain)
	{
		this.x = x;
		this.y = y;
		this.lastX = x;
		this.lastY = y;
		this.radius = radius;
		this.terrain = terrain;
		this.yVel = 0;
		this.jumpState = ActionState.ready;
		this.dashState = ActionState.ready;
		this.takeDownState = ActionState.ready;
		this.glitters = [];
		this.jumpVel = 0;
		this.dashProgression = 1;
		this.dashVisuals = new DashVisuals();
	}

	getRandomPoint() {
		const magnitude = Math.random() * this.radius;
		const angle = Math.random() * 2 * Math.PI;
		return { "x" : Math.sin(angle) * magnitude + this.x, "y" : Math.cos(angle) * magnitude + this.y };
	}

	tick()
	{
		let alive = true;


		this.processJump();
		this.processDash();
		this.processTakeDown();
		this.checkDownwardCollision();
		this.checkFrontalCollision();
		this.checkFireWallCollision();

		this.yVel += GRAVITY;
		this.y += this.yVel;

		alive = this.x + this.radius >= 0;

		for (let i = 0; i < this.glitters.length; i++) {
			const element = this.glitters[i];
			const alive = element.tick();
			if (!alive) {
				this.glitters.splice(i, 1);
				i--;
			} else {
				element.draw();
			}
		}

		return alive;
	}

	checkFireWallCollision() {
		let collision = false;
		if (fireWall != null) {
			if (this.x < fireWall.lastX && this.x >= fireWall.x) {
				if (this.y >= fireWall.y && this.y <= fireWall.y + fireWall.height) {
						collision = true;
				}
			}
		}

		if (collision) {
			if (this.dashState == ActionState.doing) {
				fireWallBreakVisuals.start();
				const numGlitters = 300 * P_MUL;
				const color = new AlphaInterpolator("#FFFFFF");
				for (let i = 0; i < numGlitters; i++) {
					this.glitters.push(new Glitter(fireWall, -terrainSpeed * 1, Math.PI / 2, 5, color));
				}
				fireWall = null;
				TERRAIN_SPEED_BASE *= 1.1;
				terrainSpeed = TERRAIN_SPEED_BASE;
			} else {
				this.x = fireWall.x - this.radius;
			}
		}

	}

	processJump() {
		switch (this.jumpState) {
			case ActionState.ready:
				if (goingUp) {
					this.jumpState = ActionState.starting;
					this.processJump();
				}
				break;
			case ActionState.starting:
				if (this.dashState == ActionState.doing) {
					dashTickRate = 3;
					this.yVel -= GRAVITY * 2;
					// this.y -= GRAVITY * 100;
					this.jumpVel = -GRAVITY * 3;
				} else {
					this.yVel = -GRAVITY * 7;
					this.jumpVel = -GRAVITY * 3;
				}
				this.jumpState = ActionState.doing;
				const numGlitters = 200 * P_MUL;
				for (let i = 0; i < numGlitters; i++) {
					this.glitters.push(new Glitter(this, 3, Math.PI / 4, 2, GLODEN_COLOR));
				}
			case ActionState.doing:
				this.yVel += this.jumpVel;
				this.jumpVel *= 0.9;

				const numGlitters2 = 3 * P_MUL;
				for (let i = 0; i < numGlitters2; i++) {
					this.glitters.push(new Glitter(this, terrainSpeed, Math.PI / 2.5, 0, GLODEN_COLOR));
				}
				if (!goingUp) {
					this.jumpState = ActionState.stoping;
					this.processJump();
				}
				break;
			case ActionState.stoping:
				this.jumpState = ActionState.resting;
				break;
			case ActionState.resting:
				break;
			default:
				throw "Invalid JumpState";
		}
	}

	processDash() {
		switch (this.dashState) {
			case ActionState.ready:
				if (spaceBar) {
					this.dashState = ActionState.starting;
					this.processDash();
				}
				break;
			case ActionState.starting:
				dashTickRate = 1;
				terrainSpeed = TERRAIN_SPEED_BASE * 2;
				this.dashState = ActionState.doing;
				this.dashProgression = 0;
				this.yVel = 0;
				case ActionState.doing:
                    this.x += 1.5;
                    if (this.x > canvas.width / 2) {
                        this.x = canvas.width / 2;
                    }
					this.yVel += -GRAVITY * (1 - this.dashProgression ** 2);
				this.dashProgression += 1 / DASH_DURATION * dashTickRate;
				let progression = 0;
				if (this.dashProgression < DASH_BALANCE) {
					progression = 1;
				} else {
					progression = 1 - (this.dashProgression - DASH_BALANCE) / (1 - DASH_BALANCE) ** 1;
                }
                const numGlitters = 10 * P_MUL;
				for (let i = 0; i < numGlitters; i++) {
					this.glitters.push(new Glitter(this, 4, Math.PI / 2, 0, GLODEN_COLOR, 7));
				}
				terrainSpeed = TERRAIN_SPEED_BASE + progression * TERRAIN_SPEED_BASE * DASH_SPEED;
				if (this.dashProgression >= 1) {
					this.dashState = ActionState.stoping;
					this.processDash();
				}
				break;
			case ActionState.stoping:
				this.dashProgression = 1;
				terrainSpeed = TERRAIN_SPEED_BASE;
				this.dashState = ActionState.resting;
				break;
			case ActionState.resting:
				break;
			default:
				throw "Invalid DashState";
		}
	}

	processTakeDown()
	{
		switch (this.takeDownState) {
			case ActionState.ready:
				if (goingDown) {
					this.yVel = GRAVITY * 20;
					this.takeDownState = ActionState.doing;
					this.processTakeDown();
				}
				break;
			case ActionState.doing:
				this.yVel += GRAVITY * 2;
				break;
			case ActionState.resting:
				if (!goingDown) {
					this.takeDownState = ActionState.ready;
				}
				break;
			default:
				break;
		}
	}

	checkFrontalCollision()
	{
		const blockUnderRightEdge = this.terrain.getBlockAt(this.x + this.radius);
		let distanceWithBlock = canvas.height - blockUnderRightEdge.height - this.y;

		if (distanceWithBlock < 0) {
			this.x = blockUnderRightEdge.x - this.radius;
		}
	}

	checkDownwardCollision()
	{
		const underlyingBlock = this.terrain.getBlockAt(this.x);
		const distanceWithBlock = canvas.height - underlyingBlock.height - this.y - this.radius;

		if (distanceWithBlock < 0) {
			underlyingBlock.setColorRamp(60);
			this.jumpState = ActionState.ready;
			if (this.dashState == ActionState.resting) {
				this.dashState = ActionState.ready;
			}
			if (this.takeDownState == ActionState.doing) {
				const numGlitters = 50 * P_MUL;
				for (let i = 0; i < numGlitters; i++) {
					this.glitters.push(new Glitter(this, GRAVITY * 10, Math.PI, 1, GLODEN_COLOR, 5));
				}
				this.takeDownState = ActionState.resting;
				this.y += distanceWithBlock;
				this.yVel *= -BALL_ELASTICITY / 2;
			} else {
				this.y += distanceWithBlock * 2;
				this.yVel *= -BALL_ELASTICITY;
				this.takeDownState = ActionState.ready;
			}
		}
	}

	draw()
	{
		ctx.beginPath();
		ctx.ellipse(	this.x - this.radius * (1 - this.dashProgression ** 2) * 2,
						this.y,
						this.radius + this.radius * (1 - this.dashProgression ** 2),
						this.radius * (this.dashProgression * 0.35 + 0.65),
						0,
						0,
						2 * Math.PI,
						false);
		ctx.fillStyle = "gold"
		ctx.fill();
	}
}

class Game
{
	constructor()
	{
		terrainSpeed = TERRAIN_SPEED_BASE = INITIAL_TERRAIN_SPEED_BASE;
		this.terrain = new Terrain();
		this.ball = new Ball(BALL_X * canvas.width + BALL_RADIUS, BALL_Y, BALL_RADIUS, this.terrain);
		fireWallBreakVisuals = new FireWallBreakVisuals();
		numWallsDestroyed = 0;
        this.gameState = ActionState.ready;
        this.welcomeScreenColor = new AlphaInterpolator("#FFFFFF");
        this.welcomeScreenTransition = 1;
	}

	showWelcomScreen(opacity) {
        const size = 32;
		ctx.fillStyle = COLOR_CARNIME_PINK;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.welcomeScreenColor.get(opacity);
        ctx.font = size + "px Courier New";
        const space = size * 1.5;
        const x = size;

        let y = size * 2.5;
        ctx.fillText("You are a computer virus.", x, y);
        y += space;
        ctx.fillText("You must break as many firewalls as possible.", x, y);
        y += space;
        ctx.fillText("As every virus does.", x, y);
        y += space * 2;
        ctx.fillText("space bar  : dash", x, y);
        y += space;
        ctx.fillText("up arrow   : jump", x, y);
        y += space;
        ctx.fillText("down arrow : drop", x, y);
        y += space * 2;
        ctx.fillText("Jumping while dashing will end your dash.", x, y);
        y += space;
        ctx.fillText("Dropping while dashing won't", x, y);
        y += space * 2.5;
        ctx.fillText("press space", x, y);
	}

	tick()
	{
        let alive = true;

        switch (this.gameState) {
            case ActionState.ready:
                if (spaceBar) {
                    this.gameState = ActionState.starting;
                }
                this.showWelcomScreen(1);
                break;
            case ActionState.starting:
                this.welcomeScreenTransition -= 1 / 10;
                this.showWelcomScreen(this.welcomeScreenTransition);
                if (this.welcomeScreenTransition <= 0) {
                    this.gameState = ActionState.doing;
                }
                break;
            case ActionState.doing:
                this.terrain.tick();
                alive = this.ball.tick();

                if (fireWall != null) {
                    fireWall.draw();
                }
                if (this.ball.dashState == ActionState.doing) {
                    const opacity = 1 - this.ball.dashProgression;
                    this.ball.dashVisuals.draw(opacity);
                    const numGlitters = opacity ** 2 * 50 * P_MUL;
                    for (let i = 0; i < numGlitters; i++) {
                        const glitter = new Glitter(this.ball, terrainSpeed, Math.PI / 2, 1, MATRIX_COLOR);
                        glitter.x = Math.random() * canvas.width + canvas.width;
                        glitter.y = Math.random() * canvas.height;
                        this.ball.glitters.push(glitter);
                    }
                }
                fireWallBreakVisuals.draw();
                this.terrain.draw();
                this.ball.draw();
                break;
            default:
                break;
        }

		return alive;
	}
}

//=============================================================
let canvas = null;
let ctx	= null;
let goingUp = false;
let goingDown = false;
let spaceBar = false;
let fireWall = null;
let sDown = false;
let fireWallBreakVisuals = null;
let numWallsDestroyed = 0
//=============================================================
const P_MUL = 1;

const GRAVITY = 1;

const BALL_ELASTICITY = 0.9;
const BALL_X = 0.5;
const BALL_Y = 0;
const BALL_RADIUS = 20;

const INITIAL_TERRAIN_SPEED_BASE = 5;
let TERRAIN_SPEED_BASE = INITIAL_TERRAIN_SPEED_BASE;
let terrainSpeed = TERRAIN_SPEED_BASE;
const MIN_BLOCK_WIDTH = 0.2;
const MAX_BLOCK_WIDTH = 0.75;
const MIN_BLOCK_HEIGHT = 0.02;
const MAX_BLOCK_HEIGHT = 0.5;

const TURB_EVOL_SPEED = 0.05;
const TURB_MIN_TLL = 100;
const TURB_MAX_TLL = 200;
const GLITTER_MULTIPLIER = 1;

const DASH_DURATION = 40;
const DASH_SPEED = 2.5;
const DASH_BALANCE = 0.3;

const FIREWALL_WIDTH = BALL_RADIUS;
const FIREWALL_HEIGHT = BALL_RADIUS * 6;
const FIREWALL_COUNTDOWN_DURATION = 10;

const COLOR_MALACHITE	= "#00EB44";
const COLOR_PINEAPPLE	= "#58355E";
const COLOR_ARSENIC	  = "#40434E";
const COLOR_WINE		 = "#702632";
const COLOR_CARNIME_PINK = "#13868a";
const COLOR_RED		  = "#FF0000";

const BLOCK_COLOR = new ColorInterpolator(COLOR_WINE, COLOR_CARNIME_PINK);
const BLOCK_ALPHA = new AlphaInterpolator(COLOR_CARNIME_PINK);
const MATRIX_COLOR = new AlphaInterpolator(COLOR_MALACHITE);
const GLODEN_COLOR = new AlphaInterpolator("#FFD700");
const RED_INTERPOL = new AlphaInterpolator("FF0000");
let dashTickRate = 1;

//=============================================================
let fireWallCountDown = FIREWALL_COUNTDOWN_DURATION;
let game = null;
let glitters = [];
//=============================================================

window.addEventListener("load", () => {
	canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");

	game = new Game();

	tick();
});

const tick = () => {
	window.requestAnimationFrame(tick);

	ctx.fillStyle = COLOR_ARSENIC;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	let alive = game.tick();

	if (!alive) {
		game = new Game();
	}
};

document.onkeyup = (event) => {
	if (event.which == 38) goingUp = false;
	if (event.which == 32) spaceBar = false;
	if (event.which == 40) goingDown = false;
	if (event.which == 83) sKeyDown = false;
};

document.onkeydown = (event) => {
	if (event.which == 38) goingUp = true;
	if (event.which == 32) spaceBar = true;
	if (event.which == 40) goingDown = true;
	if (event.which == 83) sKeyDown = true;
};