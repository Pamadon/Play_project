var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('../config/passportConfig');


router.get('/', function(req, res) {
    res.render('signupForm');
});

router.post('/', function(req, res, next) {
    var newUser = new User({

        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        winLoss: [{ game: " ", win: 0, loss: 0 }]
    });

    newUser.save(function(err, savedUser, rowsAffected) {
        if (err) {
            console.log(err);
            res.redirect('/login');
        }
        passport.authenticate('local', {
            successRedirect: '/profile',
            successFlash: 'Login successful',
            failureRedirect: '/login',
            failureFlash: 'Failed login.  Try again'
        })(req, res, next);
    });
});

module.exports = router;
