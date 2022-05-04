const router = require('express').Router();

const renderCreateCubePage = (req, res) => res.render('create');

const createCube = (req, res) => {
    const {name, imageUrL, description, difficulty, } = req.body;
}

router.get('/cube/create', renderCreateCubePage);
router.post('/cube/create', createCube);

module.exports = router;