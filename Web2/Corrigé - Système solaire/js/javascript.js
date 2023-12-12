console.log(window.innerWidth, window.innerHeight); // Permet d'obtenir la taille disponible de la page Web

document.onkeyup = evt => {
    if (evt.key == "Escape") {
        window.location.reload();
    }
}

window.addEventListener("load", () => {
    let space = document.querySelector(".space");

    document.querySelector(".sun").onclick = () => {
        setTimeout(() => {
            document.querySelectorAll(".star").forEach(s => {
                s.remove();
            })
        }, 2000)
    }

    document.querySelector("input").onchange = function () {
        space.style.backgroundColor = this.value;
    }

    document.querySelector(".add-star").onclick = () => {
        let rndX = Math.random() * window.innerWidth - 100;
        let rndY = Math.random() * window.innerHeight - 100;

        let star = document.createElement("div");
        star.classList.add("ui-comp", "star");
        star.style.left = rndX + "px";
        star.style.top = rndY + "px";
        star.onmousemove = () => star.remove();
        space.append(star);
    }

    document.querySelector(".add-planet").onclick = () => {
        let rndX = Math.random() * window.innerWidth - 100;
        let rndY = Math.random() * window.innerHeight - 100;

        let planet = document.createElement("div");
        planet.classList.add("ui-comp", "planet");
        planet.style.left = rndX + "px";
        planet.style.top = rndY + "px";

        let rnd = Math.random();

        if (rnd < 0.2) {
            planet.style.backgroundImage = "url('img/earth.png')";
        }
        else if (rnd < 0.4) {
            planet.style.backgroundImage = "url('img/jupiter.png')";
        }
        else if (rnd < 0.6) {
            planet.style.backgroundImage = "url('img/mars.png')";
        }
        else if (rnd < 0.8) {
            planet.style.backgroundImage = "url('img/neptune.png')";
        }
        else {
            planet.style.backgroundImage = "url('img/saturn.png')";
        }

        planet.onclick = () => planet.remove();
        space.append(planet);
    }
})
