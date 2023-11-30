module.exports = class GameDAO {
    constructor() {
        this.gameList = [];
    }

    getCount() {
        return this.gameList.length;
    }

    getGame(name) {
        let game = null;

        this.gameList.forEach(g => {
            if (g.name == name) {
                game = g;
            }
        })

        return game;
    }

    addGame(name) {
        let success = false;

        if (name != null && name != "") {
            success = true;

            this.gameList.push({
                name : name,
                reviews : []
            });
        }

        return success;
    }

    getGames() {
        return this.gameList;
    }

    deleteGame(name) {
        let count = this.gameList.length;

        this.gameList = this.gameList.filter(g => {
            return g.name != name;
        });

        return count != this.gameList.length;
    }

    addReview(gameName, nbStars, comment) {
        let success = false;
        let game = this.getGame(gameName);

        if (game != null && nbStars >= 0 && nbStars <= 5) {
            success = true;

            game.reviews.push({
                nbStars : parseInt(nbStars),
                comment : comment
            })
        }

        return success;
    }

    getGameRating(name) {
        let rating = 0;
        let game = this.getGame(name);
        
        if (game != null) {
            if (game.reviews.length == 1) {
                rating = game.reviews[0].nbStars;
            }
            else {
                rating = game.reviews.reduce((r1, r2) => {
                    let result = r2 == null ? 0 : r2.nbStars;

                    if (isNaN(r1)) {
                        result += r1.nbStars;
                    }
                    else {
                        result += r1;
                    }

                    return result;
                });
            }

            rating = rating/game.reviews.length;
        }

        return rating;
    }

    addUser(name) {
        return false;
    }
}