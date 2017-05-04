var mongoose = require('mongoose');

var activeGamesschema = new mongoose.Schema({
    gameName: String,
    lat: Number,
    long: Number,
    start: String,
    end: String,
    cap: Number,
    ownerId: Number
});


var ActiveGames = mongoose.model('ActiveGames', activeGamesschema);

module.exports = ActiveGames;
