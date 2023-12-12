window.addEventListener("load", () => {
    
    // 1- Trouver le noeud et ajouter un écouteur
    // pour détecter une touche relâchée (onkeyup)
    let inputNode = document.querySelector("input");
    inputNode.onkeyup = event => {
        // 2- Lorsqu'une touche est relâchée,
        // est-elle un "Enter"?
        if (event.key == "Enter") {
            // 3- Si oui, alors créer un nouveau div et
            // l'ajouter à son parent

            // - Créer un noeud
            let node = document.createElement("div");
            // - Mettre la valeur du champ texte
            node.innerText = inputNode.value;
            // - Ajouter à la page
            let parentNode = document.querySelector("#memo-list");
            parentNode.append(node);

            inputNode.value = "";
                    
            // 4- Sur le nouveau noeud, lorsqu'il est cliqué
            // le supprimer
            node.onclick = () => node.remove();
        }
    }

    

    

})