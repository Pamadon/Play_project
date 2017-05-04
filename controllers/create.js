var express = require('express');
var router = express.Router();
var passport = require('../config/passportConfig');
var User = require('../models/user');
var activeGame = require('../models/activeGames');
var isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', function(req, res) {
    res.render('create');
});


router.post('/', isLoggedIn, function(req, res, next) {
    var newGame = new activeGame({

        gameName: req.body.game_choice,
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
        console.log(savedUser);
    });
});

module.exports = router;
