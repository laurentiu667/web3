<?php
    $tab = array("elem1", "elem2", "elem3");
    // echo $tab;
    $tab = json_encode($tab);
    $tab2 = json_decode($tab);
    echo $tab;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON</title>
</head>
<body>
    <script>
        let t =JSON.parse('["a", "b"]'); // json_decode();
        console.log(t);
        t = JSON.stringify(t);           // json_encode();
        console.log(t);
        let tabJS = <?= $tab ?>;
        console.log(tabJS);
    </script>
</body>
</html>