<?php
    
    function execute() {
        $title = "Accueil";
        $compteur = file_get_contents("compteur.txt");
        $compteur++;
        file_put_contents("compteur.txt", $compteur);

        return compact("compteur", "title");
    }