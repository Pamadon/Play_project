var mongoose = require('mongoose');


var activeGamesschema = new mongoose.Schema({
    gameName: String,
    lat: Number,
    long: Number,
    game_time: String,
    start_time: String,
    end_time: String,
    gameState: Number,
    winnerId: Number,

    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game_Choices"
    },

});

activeGamesschema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            lat: ret.lat,
            long: ret.long,
            game_time: ret.game_time

        }
        return returnJson;

    }
});


var ActiveGames = mongoose.model('ActiveGames', activeGamesschema);

module.exports = ActiveGames;
console.log(ActiveGames);
