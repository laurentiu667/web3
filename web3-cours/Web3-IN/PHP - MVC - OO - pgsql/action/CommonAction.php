<?php
	session_start();
    require_once("action/constants.php");
    
    abstract class CommonAction {
        public static $VISIBILITY_PUBLIC = 0;
        public static $VISIBILITY_MEMBER = 1;
        public static $VISIBILITY_MODERATOR = 2;
        public static $VISIBILITY_ADMINISTRATOR = 3;

        private $pageVisibility;

        public function __construct($pageVisibility) {
            $this->pageVisibility = $pageVisibility;
        }

        public final function execute() {  
            if (!empty($_GET["logout"])) {
                session_destroy();
                session_start();
            }

            if (empty($_SESSION["visibility"])) {
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
            }

			if ($_SESSION["visibility"] < $this->pageVisibility) {
				header("location:login.php");
				exit;
			}

            // Template method
            // Exécute la logique de l'enfant
            $data = $this->executeAction();
            $data["isLoggedIn"] = $_SESSION["visibility"] > CommonAction::$VISIBILITY_PUBLIC;
            $data["username"] = $_SESSION["username"] ?? "Invité";

            return $data;
        }

        protected abstract function executeAction();
    }