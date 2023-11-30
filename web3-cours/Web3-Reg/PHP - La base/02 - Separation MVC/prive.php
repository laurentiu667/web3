<?php
	require_once("action/priveAction.php");

	$data = execute();

    require_once("partial/header.php");
?>
<?php
    foreach ($data["spies"] as $spy) {
        ?>
        <div>
            <?= $spy ?>
        </div>
        <?php
    }
?>
<?php
    require_once("partial/footer.php");

			
