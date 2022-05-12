const router = require('express').Router();
const {
    createAccessory,
    renderCreateAccessoryPage
} = require('../controllers/accessoryController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/create', isAuthenticated, renderCreateAccessoryPage);
router.post('/create', isAuthenticated, createAccessory);

module.exports = router;