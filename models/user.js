var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    winLoss: [{ game: String, win: Number, loss: Number }]
});

UserSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
            email: ret.email,
            name: ret.name
        };
        return returnJson;
    }
});

UserSchema.methods.authenticated = function(password) {
    var user = this;
    var isAuthenticated = bcrypt.compareSync(password, user.password);
    return isAuthenticated ? user : false;
};

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        next();
    } else {
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    }
});


var User = mongoose.model('user', UserSchema);


module.exports = User;
