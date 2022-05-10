const router = require('express').Router();

const {
    renderLoginPage,
    renderRegisterPage
} = require('../controllers/userController');

router.get('/register', renderRegisterPage);
router.get('/login', renderLoginPage);

module.exports = router;