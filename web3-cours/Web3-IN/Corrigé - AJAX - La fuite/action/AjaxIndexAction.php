<?php
	require_once("action/CommonAction.php");

	class AjaxIndexAction extends CommonAction {
		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$_SESSION["direction"] = $_POST["dir"];

			$this->result = "OK";
		}
	}
