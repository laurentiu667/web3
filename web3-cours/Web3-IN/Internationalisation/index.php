<?php
	// require_once... action ici...
		
	// La logique suivante devrait être dans CommonAction !
	require_once("Translator.php");
	
	// Devrait être une constante
	$currentLang = "fr"; 
	
	if (isset($_GET["lang"]) && strlen($_GET["lang"]) > 0) {
		$currentLang = $_GET["lang"];
	}

	$trans = new Translator($currentLang);
?>


<!DOCTYPE html>
<html>
    <head>
        <title><?= $trans->read("index", "pageTitle") ?></title>
        <meta charset="utf-8" >
	</head>
	<body>
		<h1><?= $trans->read("index", "mainTitle"); ?></h1>
		<p>
			<?= $trans->read("index", "text"); ?>
		</p>
		<div>
			<a href="index.php?lang=en">English</a> | 
			<a href="index.php?lang=fr">Français</a>
		</div>
	</body>
</html>
