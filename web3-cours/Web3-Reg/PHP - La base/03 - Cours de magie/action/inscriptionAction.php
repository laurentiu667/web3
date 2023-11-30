<?php
    
    function execute() {
        $title = "Inscription";
        $compteur = file_get_contents("compteur.txt");

        return compact("compteur", "title");
    }