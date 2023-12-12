class Frame {
    constructor(id) {
        this.element = document.getElementById(id);
        this.element.style.opacity = 0;
        this.isOver = false;
        this.opacity = 0;
        this.speed = 0.002;

        this.element.onmouseover = () => {
            this.speed = -0.02;
        }

        this.element.onmouseout = () => {
            this.speed = 0.002;
        }
    }

    tick() {
        this.opacity += this.speed;

        if (this.opacity > 1) {
            this.opacity = 1;
        }
        else if (this.opacity < 0) {
            this.opacity = 0;
        }

        this.element.style.opacity = this.opacity;

    }
}