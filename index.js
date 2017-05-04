require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var morgan = require('morgan');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/playGame');

app.use(express.static('public'));
app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
});
app.get('/', function(req, res) {
    res.render('index');
});


app.get('/profile', isLoggedIn, function(req, res) {
    var id = req.user.id;
    console.log(id);
    User.findById(id, function(error, user) {
        res.render('profile', { user: user });
    });

});

app.use('/login', require('./controllers/login'));
app.use('/signup', require('./controllers/signup'));
app.use('/create', require('./controllers/create'));
app.use('/find', require('./controllers/find'));

app.listen(process.env.PORT || 3000);
