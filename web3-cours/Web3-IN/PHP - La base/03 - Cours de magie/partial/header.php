<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= $data["title"] ?> | Cours de magie</title>
        <link rel="stylesheet" href="css/global.css">
    </head>
    <body>
        <main>
            <header>
                <div class="title">Cours de magie</div>
                <ul>
                    <li><a href="index.php" class="<?= $data["title"] == "Accueil" ? "selected" : "" ?>">Accueil</a></li>
                    <li><a href="cours.php" class="<?= $data["title"] == "Cours" ? "selected" : "" ?>">Cours</a></li>
                    <li><a href="inscription.php" class="<?= $data["title"] == "Inscription" ? "selected" : "" ?>">Inscription</a></li>
                </ul>
            </header>
            <div class="container">