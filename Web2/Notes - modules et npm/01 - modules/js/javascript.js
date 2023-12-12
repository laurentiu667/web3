import { generateAsciiArt, alertMessage } from "./utils.js";
import Square from "./sprites/Square.js";
let spriteList = [];

window.addEventListener("load", () => {
    generateAsciiArt();

    spriteList.push(new Square());

    tick();
});

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const alive = spriteList[i].tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}