const router = require('express').Router();
const { create } = require('../services/cubeService');

const renderCreateCubePage = (req, res) => res.render('create');

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const cube = { name, imageUrl, description, difficulty }

    create(cube)
        .then(result => console.log('Cube created: ', result));    
    
    res.redirect('/');
}

router.get('/cube/create', renderCreateCubePage);
router.post('/cube/create', createCube);

module.exports = router;