const { createUser, loginUser } = require("../services/userService");

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
    loginUser({username, password})
        .then((res) => console.log('IsLogin: ', res))
        .then(res.redirect('/'))
        .catch(err => console.log(err));
}

module.exports = {
    register,
    login,
    renderLoginPage,
    renderRegisterPage
}