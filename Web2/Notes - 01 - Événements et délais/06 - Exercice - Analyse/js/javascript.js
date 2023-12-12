window.addEventListener("load", () => {
    let buttonNode = document.querySelector("button");
    
    buttonNode.onclick = () => {
        let iconNode = document.querySelector("#analyze-icon");
        iconNode.style.display = "block";

        setTimeout(() => {
            iconNode.style.display = "none";

            let resultNode = document.querySelector("#analyze-result");
            resultNode.style.display = "block";
        }, 2000)
    }
})