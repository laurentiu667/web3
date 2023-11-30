<?php
	require_once("action/CommonAction.php");

	class AjaxRoomAction extends CommonAction {
		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->result = "";

			if (isset($_SESSION["direction"])) {
				$this->result = $_SESSION["direction"];
				unset($_SESSION["direction"]);
			}
		}
	}
