<?php
	// phpt = php tags
	// phpe = echo
	// dsgfdsfg
	# afdsfs
	/* asdf */
	$username = "Marty";

	if ($username == "McFly") {
		$username = $username . " abc";
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Variables</title>
		<meta charset="utf-8" />
	</head>
	<body>
		Nom : <?php echo $username; ?>
		<br>
		Nom : <?= $username ?>
	</body>
</html>







