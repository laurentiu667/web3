let GameDAO = require("../DAO/GAmeDAO.js");
let assert = require('assert');

describe('GameDAO', () => {
    describe('Adding a game', () => {
        let gameDAO = new GameDAO();

        it('should return true when it is working', () => {
            let success = gameDAO.addGame("Title1");
            assert.equal(success, true);
        });

        it('should return false if title is empty', () => {
            let success = gameDAO.addGame(null);
            assert.equal(success, false);

            success = gameDAO.addGame("");
            assert.equal(success, false);
        });
    });

    describe("Add a review", () => {
        let gameDAO = new GameDAO();
        gameDAO.addGame("D4");

        it('should return true if number of stars are valid', () => {
            let success = gameDAO.addReview("D4", 0, "safd"); // limite min
            assert.equal(success, true);
            
            success = gameDAO.addReview("D4", 2, "safd"); // valeur interne
            assert.equal(success, true);

            success = gameDAO.addReview("D4", 5, "safd"); // limite max
            assert.equal(success, true);

            success = gameDAO.addReview("D4", -1, "safd"); // limite externe min
            assert.equal(success, false);
            success = gameDAO.addReview("D4", 6, "safd"); // limite externe min
            assert.equal(success, false);
            
            success = gameDAO.addReview("D4", "%$/saf", "safd"); // limite externe min
            assert.equal(success, false);
        })
    })
});
