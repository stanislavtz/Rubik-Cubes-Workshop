const router = require('express').Router();
const { getAll } = require('../services/cubeService');

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);

function renderHomePage(req, res) {
    getAll()
        .then(cubes => {
            res.render('home', { cubes });
        })
        .catch(err => console.error(err));
}

function renderAboutPage(req, res) {
    res.render('about');
}

module.exports = router;