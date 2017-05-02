var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    User.findById(id, function(error, user) {
        cb(null, user);
    }).catch(cb);
});

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, cb) {
    User.findOne({ email: email }, function(error, user) {
        if (!user || !user.authenticated(password)) {
            cb(null, false);
        } else {
            cb(null, user);
        }
    }).catch(cb);
}));

module.exports = passport;
