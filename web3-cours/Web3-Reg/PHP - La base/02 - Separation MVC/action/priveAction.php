<?php
    
    function execute() {
        $spies = [];
        $spies[] = "James Bond";
        $spies[] = "Austin Powers";
        $spies[] = "Ethan Hunt";

        return compact("spies");
    }