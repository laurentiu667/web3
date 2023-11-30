<?php
    require_once("User.php");
    
    class Student extends User {
        private $session;
        private static $counter = 0;

        public function __construct($firstName, $lastName, $session) {
            parent::__construct($firstName, $lastName);
            $this->session = $session;
            Student::$counter++;
        }

        public static function getCounter() {
            return Student::$counter;
        }

        public function getName() {
            return parent::getName() . " (" . $this->session . ")";
        }
    }