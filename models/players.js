var mongoose = require('mongoose');

var PlayersSchema = new mongoose.Schema({
    gameName: String,
    cap: Number,
});

var Players = mongoose.model('Players', PlayersSchema);


module.exports = Players;
