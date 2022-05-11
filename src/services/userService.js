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
        const isLogged = await bcrypt.compare(password, user.password);
        if (isLogged) {
            const payload = {
                _id: user._id,
                username: user.username
            }

            const options = {
                expiresIn: '1d'
            }

            return await jwtPromise.sign(payload, SECRET, options);
        }
    } catch (err) {
        throw { message: err.message }
    }
}

module.exports = {
    createUser,
    loginUser
}