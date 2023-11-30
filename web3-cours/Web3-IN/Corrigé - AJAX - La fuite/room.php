<?php
    require_once("action/RoomAction.php");

    $action = new RoomAction();
    $action->execute();

	require_once("partial/header.php");
?>

<div id="room">
	<canvas width="640" height="480" id="canvas"></canvas>
</div>

<script src="js/sprite/Room.js" charset="utf-8"></script>
<script src="js/sprite/Player.js" charset="utf-8"></script>
<script src="js/TiledImage.js" charset="utf-8"></script>
<script src="js/Game.js" charset="utf-8"></script>

<script>
	var ctx = document.getElementById("canvas").getContext("2d");
	var game = new Game();

	function tick() {
		game.tick();
		window.requestAnimationFrame(tick);
	}

	tick();
</script>
<?php
	require_once("partial/footer.php");
