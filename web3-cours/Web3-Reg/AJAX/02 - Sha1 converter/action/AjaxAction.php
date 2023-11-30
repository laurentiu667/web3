<?php
    require_once("action/CommonAction.php");

    class AjaxAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = "";

            if (!empty($_POST["word"])) {
                $result = sha1($_POST["word"]);
            }

            return compact("result");
        }
    }