var express = require('express');
var router = express.Router();
var User = require('../models/user');
var ActiveGames = require('../models/activeGames');
var isLoggedIn = require('../middleware/isLoggedIn');



router.get('/', isLoggedIn, function(req, res) {
    res.render('find');
});





module.exports = router;
