const User = require("../models/User");

const createUser = (user) => User.create(user);

module.exports = {
    createUser,
}