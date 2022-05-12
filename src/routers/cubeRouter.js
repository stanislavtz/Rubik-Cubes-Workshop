const router = require('express').Router();

const {
    createCube,
    attachAccessory,
    renderCreateCubePage,
    renderCubeDetailsPage,
    renderCubeAttachAccessoryPage,
    renderEditCubePage,
    renderDeleteCubePage,
    editCube,
    removeCube
} = require('../controllers/cubeController');

const { isAuthenticated, isAuthorized } = require('../middlewares/authMiddleware');

router.get('/create', isAuthenticated, renderCreateCubePage);
router.get('/:cubeId/details', renderCubeDetailsPage);
router.get('/:cubeId/attach', isAuthenticated, isAuthorized, renderCubeAttachAccessoryPage);
router.get('/:cubeId/edit', isAuthenticated, isAuthorized, renderEditCubePage);
router.get('/:cubeId/delete', isAuthenticated, isAuthorized, renderDeleteCubePage);

router.post('/create', isAuthenticated, createCube);
router.post('/:cubeId/attach', isAuthenticated, attachAccessory);
router.post('/:cubeId/edit', isAuthenticated, isAuthorized, editCube);
router.post('/:cubeId/delete', isAuthenticated, isAuthorized, removeCube);

module.exports = router;