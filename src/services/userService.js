const User = require("../models/User");
const bcrypt = require('bcrypt');
const { jwtPromise } = require("../utils/promises");
const { SECRET } = require('../utils/constants');

const createUser = ({ username, password, repeatPassword }) => {
    if (password !== repeatPassword) {
        throw { message: `Password don't match` }
    }

    return User.create({ username, password });
}

const loginUser = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username });
        if(!user) {
            throw {message: 'Wrong username or password'}
        }

        const isLogged = await bcrypt.compare(password, user.password);
        if(!isLogged) {
            throw {message: 'Wrong username or password'}
        }

        const payload = {
            _id: user._id,
            username: user.username
        }

        const options = {
            expiresIn: '1d'
        }

        return jwtPromise.sign(payload, SECRET, options);
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    loginUser
}