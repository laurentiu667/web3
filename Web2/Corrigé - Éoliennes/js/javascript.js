let spriteList = [];
let speed = 1;

window.addEventListener("load", () => {
    spriteList.push(new Blades("blades-1"));
    spriteList.push(new Blades("blades-2"));
    spriteList.push(new Blades("blades-3"));

    document.querySelector("#btn-less").onclick = () => {
        speed -= 0.5;
    }

    document.querySelector("#btn-more").onclick = () => {
        speed += 0.5;
    }

    tick();
})

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const element = spriteList[i];
        element.tick();
    }

    window.requestAnimationFrame(tick);
}