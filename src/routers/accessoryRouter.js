const router = require('express').Router();
const {
    createAccessory,
    renderCreateAccessoryPage
} = require('../controllers/accessoryController');

router.get('/create', renderCreateAccessoryPage);
router.post('/create', createAccessory);

module.exports = router;