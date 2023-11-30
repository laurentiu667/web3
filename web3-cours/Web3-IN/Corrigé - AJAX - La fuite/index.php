<?php
    require_once("action/IndexAction.php");

    $action = new IndexAction();
    $action->execute();

	require_once("partial/header.php");
?>

<h1>Faites-le sortir de cette pièce!</h1>
<p>En utilisant <strong>AJAX</strong>, vous devez faire qu'en cliquant sur une flèche, une variable de session nommée "direction" est créée avec la direction que le personnage doit prendre.</p>
<p>Pour ouvrir la page avec le personnage, cliquez <a href="room.php" target="room">ici</a>. Note : vous n'avez pas à modifier la page du personnage, tout a été déjà implémenté, y compris AJAX.</p>
<p>Vous devriez vous faire les fichiers "javascript.js" et ajax-index.php (+ son contrôleur).</p>

<div class="controls">
	<div class="arrow-up" data-dir="0"></div>
	<div class="arrow-down" data-dir="2"></div>
	<div class="arrow-left" data-dir="1"></div>
	<div class="arrow-right" data-dir="3"></div>
</div>

<!-- TO REMOVE -->
<script>
	$(".controls div").click(function (e) {
		$.ajax({
			url: "ajax-index.php",
			type: "post",
			data: {
				dir : this.getAttribute("data-dir")
			}
		})
	})
</script>

<?php
	require_once("partial/footer.php");
