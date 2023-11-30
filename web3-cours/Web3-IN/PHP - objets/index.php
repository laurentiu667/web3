<?php
    require_once("User.php");
    require_once("Student.php");
    
    $user1 = new User("John", "Doe");
    $user2 = new User("Jane", "Doe");

    $user3 = new Student("Jane", "Doe", "A2023");

    echo $user1->getName();
    echo $user2->getName();
    echo $user3->getName();

    echo $user3->getCounter();