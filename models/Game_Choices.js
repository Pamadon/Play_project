var mongoose = require('mongoose');

var Game_ChoicesSchema = new mongoose.Schema({
    gameName: String,
    cap: Number,
});

var Game_Choices = mongoose.model('Game_Choices', Game_ChoicesSchema);


module.exports = Game_Choices;
