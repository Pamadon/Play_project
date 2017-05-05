var express = require('express');
var router = express.Router();
var User = require('../models/user');
var ActiveGames = require('../models/activeGames');
var isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', isLoggedIn, function(req, res) {
    User.find({}, function(error, places) {

        res.render('find', { places: places });
    });
});





module.exports = router;
