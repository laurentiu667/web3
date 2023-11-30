<?php
    
    class UserDAO {

        public static function authenticate($username, $password) {
            $user = null;

            if ($username == "john" && $password == "qwerty") {
                $user = [
                    "username" => $username,
                    "visibility" => 1,
                ];
            }

            return $user;
        }
    }