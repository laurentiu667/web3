let node = null;
let posY = null;
let speed = -1;

const moveGeneric = () => {
    if (node == null) {
        node = document.querySelector(".generic");
        node.onclick = () => {
            speed = -speed;
        }
    }

    // OffsetTop permet d'obtenir la position actuelle Y du noeud
    let posY = node.offsetTop + speed;

    document.querySelector(".generic").style.top = posY + "px";

    setTimeout(moveGeneric, 30);
}

window.addEventListener("load", moveGeneric);