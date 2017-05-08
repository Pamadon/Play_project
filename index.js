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
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

var room = User.firstName;
console.log(room);
server.listen(port, function() {});


mongoose.connect(process.env.MONGOLAB_ROSE_URI || 'mongodb://localhost/playGame');

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
    res.render('loginForm');

});


app.get('/profile', isLoggedIn, function(req, res) {
    var id = req.user.id;
    User.findById(id, function(error, user) {
        res.render('profile', { user: user });
    });

});

app.get('/activeGame/:id', isLoggedIn, function(req, res) {
    res.render('activeGame', { id: req.user._id });
});



var numUsers = 0;
var rooms = ['room1', 'room2', 'room3'];


io.sockets.on('connection', function(socket) {

    var addedUser = false;


    socket.on('new message', function(data) {

        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });


    socket.on('add user', function(username) {
        if (addedUser) return;


        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        socket.room = 'room1';

        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });


    socket.on('typing', function() {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });


    socket.on('stop typing', function() {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });


    socket.on('disconnect', function() {
        if (addedUser) {
            --numUsers;


            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});


app.use('/login', require('./controllers/login'));
app.use('/signup', require('./controllers/signup'));
app.use('/create', require('./controllers/create'));
app.use('/find', require('./controllers/find'));
app.use('/createGame', require('./controllers/createGame'));
