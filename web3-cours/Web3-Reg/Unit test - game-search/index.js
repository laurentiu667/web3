let GameDAO = require("./DAO/GameDAO.js");
const readline = require('readline');

let gameDAO = new GameDAO();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu(msg = null) {
	console.log("");
	console.log("");
	console.log("=========================");
    console.log("|    Game Database (" + gameDAO.getCount() + ")");
    console.log("|");
    console.log("| 1- Add a game");
    console.log("| 2- List all games");
    console.log("| 3- Delete a game");
    console.log("| 4- Add a game review");
    console.log("| 5- Get rating");
    console.log("| 6- Quit");
    console.log("-------------------------");
    console.log("");

    if (msg != null) {
        console.log(msg);
        console.log("");
    }

    rl.question("Choose an option (1-6) : ", (answer) => {
        if (isNaN(answer)) {
            showMenu();
        }
        else {
            if (answer == 1) addGame();
            else if (answer == 2) listGames();
            else if (answer == 3) deleteGame();
            else if (answer == 4) addGameReview();
            else if (answer == 5) getRating();
            else if (answer == 6) rl.close();
            else showMenu("Wrong option specified...");
        }
    });
}

showMenu();

function addGame() {
    rl.question("Title : ", (title) => {
        let resultTxt = "Your title is empty!";

        if (title.length > 0) {
            let success = gameDAO.addGame(title);

            if (success) resultTxt = "Game added."
            else resultTxt = "Game already exists?"
        }

        showMenu(resultTxt);
    });
}

function listGames() {
    let list = gameDAO.getGames();

    list.forEach(game => {
        console.log("- " + game.name);

        game.reviews.forEach(review => {
            console.log("--> " + review.comment + " (" + review.nbStars + ")")
        })
    });

    rl.question("Press <enter> to continue...", (line) => {
        showMenu();
    });
}

function deleteGame() {
    rl.question("Title : ", (title) => {
        let resultTxt = "Your title is empty!";

        if (title.length > 0) {
            let success = gameDAO.deleteGame(title);

            if (success) resultTxt = "Game deleted."
            else resultTxt = "Game already exists?"
        }

        showMenu(resultTxt);
    });
}

function addGameReview() {
    rl.question("Title : ", (title) => {
        rl.question("nbStar (0-5) : ", (starCount) => {
            rl.question("Comment : ", (comment) => {
                let success = gameDAO.addReview(title, starCount, comment);
                let resultTxt = "Review added.";

                if (!success) resultTxt = "Error adding review.";

                showMenu(resultTxt);
            });
        });        
    });
}

function getRating() {
    rl.question("Title : ", (title) => {
        let resultTxt = "Your title is empty!";

        if (title.length > 0) {
            let rating = gameDAO.getGameRating(title);

            resultTxt = rating + " stars";
        }

        showMenu(resultTxt);
    });
}