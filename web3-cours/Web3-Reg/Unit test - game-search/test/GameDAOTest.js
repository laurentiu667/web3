let GameDAO = require("../DAO/GAmeDAO.js");
let assert = require('assert');

describe('GameDAO', () => {
    describe('Adding a game', () => {
        let gameDAO = new GameDAO();

        it('should return true when it is working', () => {
            let success = gameDAO.addGame("Title1");
            assert.equal(success, true);
        });
        
        it('should return false when title is empty', () => {
            let success = gameDAO.addGame(null);
            assert.equal(success, false);

            success = gameDAO.addGame("");
            assert.equal(success, false);
        });
    });

    describe('Adding a user', () => {
        let gameDAO = new GameDAO();

        it('should return true when it is working', () => {
            let success = gameDAO.addUser("asdf");
            assert.equal(success, true);
        });
        
    });

    describe("Adding reviews", () => {
        let gameDAO = new GameDAO();
        gameDAO.addGame("wow");

        it("should return false if nbStars is not valid", () => {
            // Test limit values
            let success = gameDAO.addReview("wow", 0);
            assert.equal(success, true);
            success = gameDAO.addReview("wow", 5);
            assert.equal(success, true);

            // Test normal value            
            success = gameDAO.addReview("wow", 2);
            assert.equal(success, true);
            
            // Test invalid values       
            success = gameDAO.addReview("wow", -1);
            assert.equal(success, false);

            success = gameDAO.addReview("wow", 6);
            assert.equal(success, false);

            // Test not normal values
            success = gameDAO.addReview("wow", "asdf");
            assert.equal(success, false);
        })
    })
});
