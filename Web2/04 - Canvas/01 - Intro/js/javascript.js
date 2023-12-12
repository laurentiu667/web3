let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(30, 60, 10, 10);

canvas.onmousemove = (e) => {
    ctx.fillStyle = "blue";
    ctx.fillRect(e.pageX, e.pageY, 10, 10);
}