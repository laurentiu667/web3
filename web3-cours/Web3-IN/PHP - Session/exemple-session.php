<?php

    function execute() {
        // Est-ce qu'il y a un tableau de post its en session,
        // Si non, en faire un ($tab = [])
        if (empty($_SESSION["liste"])) {
            $_SESSION["liste"] = [];
        }

        // Est-ce qu'il y a un post it à ajouter?
        // Si oui, créer un post it et l'ajouter au tableau
        // [$_POST["text"], $...x, $..y]
        if (!empty($_POST["text"])) {
            $unPostIt = [$_POST["text"], $_POST["x"], $_POST["y"]];
            $_SESSION["tab"][] = $unPostIt; // .push($unPostIt)
        }

        // Retourner le tableau via compact
        $list = $_SESSION["tab"];
        return compact("list");
    }

    session_start();

    // session_destroy();
    // session_start();

    if (empty($_SESSION["nomUsager"])) {
        $_SESSION["nomUsager"] = "Jane";
    }
    
    // $username = "John";

    echo $_SESSION["nomUsager"];