const router = require('express').Router();

router.get('/register', renderRegisterPage);
router.get('/login', renderLoginPage);

function renderLoginPage(req, res) {
    res.render('user/login');
}

function renderRegisterPage(req, res) {
    res.render('user/register');
}

module.exports = router;