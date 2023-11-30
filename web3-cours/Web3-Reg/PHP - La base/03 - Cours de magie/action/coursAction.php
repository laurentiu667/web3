<?php
    
    function execute() {
        $title = "Cours";
        $compteur = file_get_contents("compteur.txt");

        return compact("compteur", "title");
    }