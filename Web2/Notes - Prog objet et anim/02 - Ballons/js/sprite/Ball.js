class Ball {
    constructor(id) {
        this.id = id;
        this.node = document.querySelector("#" + this.id);
        this.x = Math.random() * 400;
        this.y = Math.random() * 40;
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        this.speed = 2;
        this.speedX = 1;
        this.velocityY = 0.5; // Gravité (0.5px/tick)
        this.node.onclick = () => {
            this.speed += -10;
        }
    }

    tick() {
        this.speed += this.velocityY;
        this.y += this.speed;

        if (this.y < 219) {
            this.x += this.speedX;
        }

        if (this.y > 220) {
            this.speed = -this.speed/1.5; 
            this.y = 220;
        }

        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    }
}