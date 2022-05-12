const router = require('express').Router();

const {
    renderLoginPage,
    renderRegisterPage,
    register,
    login,
    logout
} = require('../controllers/userController');

const { isGuest, isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/register', isGuest, renderRegisterPage);
router.get('/login', isGuest, renderLoginPage);
router.get('/logout', isAuthenticated, logout);

router.post('/register', register);
router.post('/login', login);

module.exports = router;