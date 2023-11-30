<?php
    
    function execute() {
        $username = "saf";
        $hasError = false;

        if (!empty($_POST["champCourriel"])) {
            if ($_POST["champCourriel"] == "test@test.com" &&
                $_POST["champMotDePasse"] == "test") {
                header("location:prive.php");
                exit;
            }
            else {
                $hasError = true;
            }
        }

        return compact("hasError", "username");
    }