const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if(err) {
            return console.error(err);
        }

        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;