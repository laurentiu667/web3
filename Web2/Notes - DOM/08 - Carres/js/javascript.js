let spriteList = [];

window.addEventListener("load", () => {
    tick();
})
// détecter un mouvement de la souris dans l'écran
// prendre la position et ajouter un div à cet endroit
document.onmousemove = event => {
    console.log(event.pageX, event.pageY);
    spriteList.push(new Square(event.pageX, event.pageY));
}

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }
    
    window.requestAnimationFrame(tick);
}


class Square {
    constructor(x, y) {
        this.node = document.createElement("div");
        this.node.classList.add("square"); // css .square
        this.node.style.left = x + "px";
        this.node.style.top = y + "px";
        document.body.append(this.node);
        this.y = y;
        this.velocity = 0.1;
        this.speed = 1;
    }

    tick() {
        let alive = true;

        this.speed += this.velocity;
        this.y -= this.speed;
        this.node.style.top = this.y + "px";

        if (this.y < 0) {
            alive = false;
            this.node.remove();
        }

        return alive;
    }
}

// document.body.append(...)