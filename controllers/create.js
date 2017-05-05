var express = require('express');
var router = express.Router();
var passport = require('../config/passportConfig');
var User = require('../models/user');
var activeGame = require('../models/activeGames');
var isLoggedIn = require('../middleware/isLoggedIn');
var games = require('../models/Game_Choices');

router.get('/', function(req, res) {

    games.find({}, function(error, games) {
        console.log(games);
        res.render('create', { games: games });
    });

});



router.post('/', isLoggedIn, function(req, res, next) {
    var newGame = new activeGame({

        gameName: req.body.gameName,
        start: req.body.start_time,
        end: req.body.end_time,
        lat: req.body.lat,
        long: req.body.long,
    });

    newGame.save(function(err, savedUser, rowsAffected) {
        if (err) {
            console.log(err);
            res.redirect('/login');

        }
        res.redirect('activeGame/:id');
    });
});

module.exports = router;
