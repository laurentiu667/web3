<?php
    
    class User {
        private $firstName;
        private $lastName;
        private static $counter;

        public function __construct($firstName, $lastName) {
            $this->firstName = $firstName;
            $this->lastName = $lastName;
            User::$counter++;
        }

        public static function getCounter() {
            return User::$counter;
        }

        public function getName() {
            return $this->firstName . " " . $this->lastName;
        }
    }