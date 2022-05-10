const User = require("../models/User");
const { createUser } = require("../services/userService");

const renderLoginPage = (req, res) => res.render('user/login');
const renderRegisterPage = (req, res) => res.render('user/register');

const register = (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        throw { message: `Password don't match` }
    }

    createUser({username, password})
        .then(res.redirect('/login'))
        .catch(err => console.log(err));
}

module.exports = {
    register,
    renderLoginPage,
    renderRegisterPage
}