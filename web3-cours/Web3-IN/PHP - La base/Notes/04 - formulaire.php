<?php
	// ============ LOGIQUE (contrôleur)
	$showBox = false;

	if (!empty($_GET["info"])) {
		$showBox = true;
		$text = $_GET["info"];
	}

	// ============== VUE (en bas)
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Les formulaires</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<?php
			if ($showBox) {
				?>
				<div>
					Bravo!
				</div>
				<?php
			}
		?>
		<form action="" method="get">
			<div>
				Info : <input type="text" name="info" />
			</div>
			<div>
				<input type="submit" value="Go!" />
			</div>
		</form>
	</body>
</html>







