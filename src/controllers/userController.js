
const { createUser, loginUser } = require("../services/userService");
const { jwtPromise } = require("../utils/promises");

const renderLoginPage = (req, res) => res.render('user/login');
const renderRegisterPage = (req, res) => res.render('user/register');

const register = (req, res) => {
    const { username, password, repeatPassword } = req.body;

    createUser({ username, password, repeatPassword })
        .then(res.redirect('/login'))
        .catch(err => console.log(err));
}

const login = (req, res) => {
    const { username, password } = req.body;

    loginUser({ username, password })
        .then(token => {
            res.cookie('#user-auth-token', token, { httpOnly: true });
            res.redirect('/');
        })
        .catch(err => console.log(err));
}

module.exports = {
    register,
    login,
    renderLoginPage,
    renderRegisterPage
}