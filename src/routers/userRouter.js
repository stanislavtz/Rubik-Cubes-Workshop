const router = require('express').Router();

const {
    renderLoginPage,
    renderRegisterPage,
    register,
    login
} = require('../controllers/userController');

router.get('/register', renderRegisterPage);
router.get('/login', renderLoginPage);

router.post('/register', register);
router.post('/login', login);

module.exports = router;