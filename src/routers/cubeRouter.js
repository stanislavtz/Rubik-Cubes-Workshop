const router = require('express').Router();

const {
    createCube,
    attachAccessory,
    renderCreateCubePage,
    renderCubeDetailsPage,
    renderCubeAttachAccessoryPage
} = require('../controllers/cubeController');

const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/create', isAuthenticated, renderCreateCubePage);
router.get('/:id/details', renderCubeDetailsPage);
router.get('/:id/attach', isAuthenticated, renderCubeAttachAccessoryPage);

router.post('/create', isAuthenticated, createCube);
router.post('/:id/attach', isAuthenticated, attachAccessory);

module.exports = router;