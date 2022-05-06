const router = require('express').Router();
const {
    createCube,
    attachAccessory,
    renderCreateCubePage,
    renderCubeDetailsPage,
    renderCubeAttachAccessoryPage
} = require('../controllers/cubeController');

router.get('/create', renderCreateCubePage);
router.get('/:id/details', renderCubeDetailsPage);
router.get('/:id/attach', renderCubeAttachAccessoryPage);

router.post('/create', createCube);
router.post('/:id/attach', attachAccessory);

module.exports = router;