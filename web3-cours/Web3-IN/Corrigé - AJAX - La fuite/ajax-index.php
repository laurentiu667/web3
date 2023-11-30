<?php
    require_once("action/AjaxIndexAction.php");

    $action = new AjaxIndexAction();
    $action->execute();

	echo json_encode($action->result);
?>
