<?php
    
    function execute() {
        $title = "Accueil";
        $counter = file_get_contents("counter.txt");
        $counter++;
        file_put_contents("counter.txt", $counter);
        
        return compact("counter", "title");
    }