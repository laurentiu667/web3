let spriteList = [];

window.addEventListener("load", () => {
    for (let i = 0; i < BALL_COUNT; i++) {
        spriteList.push(new Ball("ball_" + i));
    }

    tick();
})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i];
        node.tick();
    }
    
    window.requestAnimationFrame(tick); // 60fps au cégep
}