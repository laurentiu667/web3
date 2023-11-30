<?php
#
/* */
	// phpt
	$username = "John";

	if ($username == "Smith") {
		echo "salut!" . $username;
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Variables</title>
		<meta charset="utf-8" />
	</head>
	<body>
		Nom : <?php echo $username; ?><br>
		Nom : <?= $username; ?><br>
		<?= $username ?>
		<?php
			// phpe
		?>
	</body>
</html>







