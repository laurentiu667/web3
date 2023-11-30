<?php
    $tab = array("elem1", "elem2", "elem3");
    $tab = json_encode($tab); // de structure à chaîne de caractères
    // $tab = json_decode($tab); // from string, to object/array/...
    // echo $tab;
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
        let tableau = <?= $tab ?>;
        tableau = JSON.stringify(tableau); // Équivalent du json_encode
        tableau = JSON.parse(tableau); // Équivalent du json_decode
        console.log(tableau);

        let d = {hp:29,enemyHP:25};
        d = JSON.stringify(d);
        console.log(d)

        let data = JSON.parse('{"hp":29,"enemyHP":25}');
        console.log(data.hp);

    </script>
</body>
</html>