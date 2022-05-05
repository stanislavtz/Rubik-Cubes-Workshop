const router = require('express').Router();
const { create, getById } = require('../services/cubeService');

const renderCreateCubePage = (req, res) => res.render('cube/create');

const renderCubeDetailsPage = (req, res) => {
    const id = req.params.id;
    getById(id)
        .then(cube => res.render('cube/details', { ...cube }))
        .catch(err => console.error(err));

}

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const cube = { name, imageUrl, description, difficulty }

    create(cube)
        .then(res.redirect('/'))
        .catch(err => console.log(err));
}

const renderCubeAttachAccessoryPage = (req, res) => {
    const id = req.params.id;

    getById(id)
        .then(cube => res.render('cube/attach', {...cube}))
        .catch(err => console.error(err));
}

router.get('/create', renderCreateCubePage);
router.get('/:id/details', renderCubeDetailsPage);
router.get('/:id/attach', renderCubeAttachAccessoryPage);

router.post('/create', createCube);

module.exports = router;