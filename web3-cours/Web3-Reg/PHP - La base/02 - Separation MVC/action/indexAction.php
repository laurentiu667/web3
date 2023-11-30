<?php
    
    function execute() {
        $username = "";
        $hasError = false;

        if (!empty($_POST["champCourriel"])) {
            if ($_POST["champCourriel"] == "test@test.com" &&
                $_POST["champMotDePasse"] == "test") {
                // yééééé
                header("location: prive.php");
                exit;
            }
            else {
                $hasError = true;
            }
        }

        return compact("hasError", "username");
    }

    // compact prend nos variables et en fait
    // un dictionnaire