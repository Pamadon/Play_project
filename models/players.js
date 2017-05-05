var mongoose = require('mongoose');

var PlayersSchema = new mongoose.Schema({
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: "Game_Choices" },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
     ref: "User"

    },

});

var Players = mongoose.model('Players', PlayersSchema);


module.exports = Players;
