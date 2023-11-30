<?php
	session_start();

	function execute() {
		$email = $_SESSION["courriel"] ?? null;
		
		if (empty($_SESSION["courriel"])) {
			header("location:index.php");
			exit;
		}

		$cc = "4540 1233 5645 3453";
		
		return compact("cc", "email");
	}