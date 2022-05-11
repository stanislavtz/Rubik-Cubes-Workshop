const User = require("../models/User");
const bcrypt = require('bcrypt');

const createUser = ({ username, password, repeatPassword }) => {
    if (password !== repeatPassword) {
        throw { message: `Password don't match` }
    }

    return User.create({ username, password });
}

const loginUser = async ({ username, password }) => {
    const user = await User.findOne({ username });
    console.log('User: ', user);
    return await bcrypt.compare(password, user.password);
}

module.exports = {
    createUser,
    loginUser
}