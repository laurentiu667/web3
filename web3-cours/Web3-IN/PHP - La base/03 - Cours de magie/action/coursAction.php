<?php
    
    function execute() {
        $title = "Cours";
        $counter = file_get_contents("counter.txt");
        
        return compact("counter", "title");
    }