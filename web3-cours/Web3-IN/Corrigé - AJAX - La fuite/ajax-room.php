<?php
    require_once("action/AjaxRoomAction.php");

    $action = new AjaxRoomAction();
    $action->execute();

	echo json_encode($action->result);
?>
