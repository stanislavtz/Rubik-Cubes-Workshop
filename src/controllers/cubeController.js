const router = require('express').Router();
const { create, getById } = require('../services/cubeService');

const renderCreateCubePage = (req, res) => res.render('create');
const renderCubeDetailsPage = (req, res) => {
    const id = req.params.id;
    getById(id)
        .then(cube => res.render('details', { ...cube }))
        .catch(err => console.error(err));

}

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const cube = { name, imageUrl, description, difficulty }

    create(cube)
        .then(res.redirect('/'))
        .catch(err => console.log(err));
}

router.get('/cube/create', renderCreateCubePage);
router.get('/cube/:id/details', renderCubeDetailsPage);

router.post('/cube/create', createCube);

module.exports = router;