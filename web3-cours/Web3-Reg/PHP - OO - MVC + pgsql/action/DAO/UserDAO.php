<?php
    require_once("action/DAO/Connection.php");
    
    class UserDAO {

        public static function authenticate($username, $password) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("SELECT * FROM users WHERE username = ?");
            $statement->bindParam(1, $username); // Premier ?, alors mets username
            $statement->setFetchMode(PDO::FETCH_ASSOC); // Juste pour les select, permet de retourner un dictionnaire ex : $row["username"] (sinon $row[0])
            $statement->execute();

            $user = null;
            // $row = $statement->fetch(); // Donne la prochaine ligne résultat
            // $rows = $statement->fetchAll(); // un tableau de toutes les lignes

            if ($row = $statement->fetch()) {
                if (password_verify($password, $row["password"])) {
                    $user = [
                        "username" => $row["first_name"],
                        "visibility" => $row["visibility"],
                    ];
                }
            }

            return $user;
        }

        public static function setLastLogin($username) {
            $connection = Connection::getConnection();
            // 1 - Établir une connexion
            // 2- Faire la requête
        }
    }