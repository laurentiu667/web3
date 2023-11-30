<?php
    
    function execute() {
        $title = "Inscription";
        $counter = file_get_contents("counter.txt");

        return compact("counter", "title");
    }