var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var isLoggedIn = require('../middleware/isLoggedIn');
var Game_Choices = require('../models/Game_Choices');

router.get('/', function(req, res) {
    res.render('createGame');
});

router.post('/', isLoggedIn, function(req, res, next) {
    var newGame = new Game_Choices({

        gameName: req.body.game_name,
        cap: req.body.playerCap
    });

    newGame.save(function(err, savedUser, rowsAffected) {
        if (err) {
            console.log(err);
            res.redirect('/login');

        }
        res.redirect('/profile')
    });
});

module.exports = router;
