const router = require('express').Router();

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);

function renderHomePage(req, res) {
    res.render('home');
}

function renderAboutPage(req, res) {
    res.render('about');
}

module.exports = router;