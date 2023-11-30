<?php
    require_once("User.php");
    require_once("Student.php");

    $user = new User("John", "Doe");
    echo $user->getName();

    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();
    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();
    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();
    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();
    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();
    $student = new Student("Jane", "Doe", "A2023");
    echo $student->getName();

    echo Student::getCounter();