<?php
	$showSuccess = false;

	// if (isset($_GET["info"]))
	if (!empty($_GET["info"])) {
		$showSuccess = true;
		$text = $_GET["info"];
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Les formulaires</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<?php
			if ($showSuccess) {
				?>
				<div>
					Bravo!!!!
				</div>
				<?php
			}
		?>
		<form action="04 - formulaire.php" method="get">
			<div>
				Info : <input type="text" name="info" />
			</div>
			<div>
				<input type="submit" value="Go!" />
			</div>
		</form>
	</body>
</html>







