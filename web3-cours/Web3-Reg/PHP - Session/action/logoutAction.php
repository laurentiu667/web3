<?php
    session_start();

    function execute() {
        session_destroy();
        session_start();

        return [];
    }