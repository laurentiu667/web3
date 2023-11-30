window.addEventListener("load", () => {
    let node = document.querySelector("input");
    node.onkeyup = () => {
        let formData = new FormData();
        formData.append("quelconque", node.value);

        fetch("ajax.php", {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            let newNode = document.createElement("div");
            newNode.innerText = data;

            let parentNode = document.querySelector("#result");
            parentNode.append(newNode);
            console.log(data);    
        })
    }
})