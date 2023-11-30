window.addEventListener("load", () => {
    let inputNode = document.querySelector("input");
    inputNode.onkeyup = e => {
        let val = inputNode.value;
        
		let formData = new FormData();
		formData.append("word", val); 

        fetch("ajax.php",{      
            method: 'POST', // $_POST["word"]
            body: formData,
        })
        .then(response => response.json())
		.then(data => {
            let node = document.createElement("div");
            let parentNode = document.querySelector("#result");
            parentNode.append(node);
            node.innerText = data;
            console.log(data);
        });
    }
})