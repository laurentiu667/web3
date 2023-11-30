<?php
    require_once("User.php");
    
    class Student extends User {
        private $session;

        public function __construct($firstName, $lastName, $session) {
            parent::__construct($firstName, $lastName);
            $this->session = $session;
        }

        public function getName() {
            return parent::getName() . " (" . $this->session . ")";
        }
    }