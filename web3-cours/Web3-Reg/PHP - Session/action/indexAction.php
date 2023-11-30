<?php
	session_start();


	// function execute() {
	// 	// 1- Est-ce que $_SESSION["list"] existe?
	// 	//    Sinon, en créer une
	// 	if (empty($_SESSION["list"])) {
	// 		$_SESSION["list"] = [];
	// 	}

	// 	// 2- Est-ce que la personne a écrit dans le formulaire
	// 	//    Si oui, alors créer un $postIt et l'ajouter dans la liste
	// 	if (!empty($_POST["text"])) {
	// 		$_SESSION["list"][] = [$_POST["text"], $_POST["x"], $_POST["y"]];
	// 	}

	// 	// 3- Retourner la liste via "compact"
	// 	$list = $_SESSION["list"];
	// 	return compact("list");
	// }












	function execute() {
		$email = !empty($_SESSION["email"]) ? $_SESSION["email"] : null;
		$connectionError = false;
		
		if (isset($_POST["courriel"]) && isset($_POST["motDePasse"])) {
			if ($_POST["courriel"] == "test@test.com" &&
				$_POST["motDePasse"] == "test") {
				$email = $_POST["courriel"];

				$_SESSION["email"] = $email;		
			}
			else {
				$connectionError = true;
			}
		}
		
		return compact("email", "connectionError");
	}